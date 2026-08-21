// NOTA: este archivo es el código FUENTE local. El webhook en producción
// (script.google.com/macros/s/.../exec, referenciado en script.js) solo se
// actualiza si este código se vuelve a pegar y desplegar manualmente en el
// editor de Google Apps Script. Ese redeploy es una acción que afecta un
// servicio externo en vivo y no se ejecuta automáticamente desde aquí.
var SPREADSHEET_ID = '1rxQc8lmZR4isCMGW-A7E3AkKAF4p7Epw6j7nlwHpnNkCJfjEpgk498KN';
var LEADS_SHEET_NAME = 'Leads';
var LEADS_HEADERS = [
  'created_at', 'form_type', 'source', 'first_name', 'last_name', 'phone', 'email',
  'city', 'state', 'language', 'service_or_interest', 'best_time', 'licensed',
  'experience', 'message', 'full_name', 'event_name', 'attendance_status', 'raw_payload'
];

function ensureHeaders_(sheet) {
  var lastColumn = Math.max(sheet.getLastColumn(), 1);
  var currentHeaders = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  var normalizedHeaders = currentHeaders.map(function (header) {
    return String(header || '').trim();
  });

  if (!normalizedHeaders[0]) {
    sheet.getRange(1, 1, 1, LEADS_HEADERS.length).setValues([LEADS_HEADERS]);
    return;
  }

  var missingHeaders = LEADS_HEADERS.filter(function (header) {
    return normalizedHeaders.indexOf(header) === -1;
  });

  if (missingHeaders.length) {
    sheet.getRange(1, normalizedHeaders.length + 1, 1, missingHeaders.length).setValues([missingHeaders]);
  }
}

function getLeadsSheet_() {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(LEADS_SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(LEADS_SHEET_NAME);
  }
  ensureHeaders_(sheet);
  return sheet;
}

function doPost(e) {
  try {
    var sheet = getLeadsSheet_();
    var data = JSON.parse(e.postData.contents || '{}');
    var fullName = (data.fullName || data.name || '').trim();
    var nameParts = fullName ? fullName.split(/\s+/) : [];
    var firstName = (data.firstName || nameParts.shift() || '').trim();
    var lastName = (data.lastName || nameParts.join(' ') || '').trim();
    var formType = data.formType || data.form_type || '';
    var serviceOrInterest = data.service || data.interest || data.intent || '';
    var eventName = data.eventName || data.event_name || '';
    var attendanceStatus = data.attendanceStatus || data.attendance_status || '';

    if (!formType && eventName) {
      formType = 'event_rsvp';
    }
    if (!eventName && formType === 'sabor_y_finanzas') {
      eventName = 'Sabor y Finanzas';
    }
    if (!attendanceStatus && formType === 'sabor_y_finanzas') {
      attendanceStatus = 'confirmed';
    }

    sheet.appendRow([
      data.createdAt || new Date().toISOString(),
      formType,
      data.source || 'Landing IZZY Financial Protection',
      firstName,
      lastName,
      data.phone || '',
      data.email || '',
      data.city || '',
      data.state || '',
      data.language || '',
      serviceOrInterest,
      data.bestTime || '',
      data.licensed || '',
      data.experience || '',
      data.message || '',
      fullName,
      eventName,
      attendanceStatus,
      JSON.stringify(data)
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
