function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Leads');
      sheet.appendRow(['created_at', 'source', 'name', 'phone', 'intent', 'state']);
    }

    var data = JSON.parse(e.postData.contents || '{}');
    sheet.appendRow([
      data.createdAt || new Date().toISOString(),
      data.source || 'Landing IZZY',
      data.name || '',
      data.phone || '',
      data.intent || '',
      data.state || ''
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
