document.addEventListener("DOMContentLoaded", function () {
  console.log("IZZY Financial & Business Services website loaded successfully.");

  const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

  whatsappButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("WhatsApp button clicked.");
    });
  });
});
