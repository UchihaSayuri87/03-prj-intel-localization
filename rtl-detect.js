// Detect language changes (e.g., by Google Translate) and apply RTL if needed

(function () {
  // List of RTL language codes
  const rtlLangs = [
    'ar', 'he', 'fa', 'ur', 'ps', 'dv', 'ku', 'yi', 'ug', 'sd'
  ];

  // Helper: get current language from <html lang="...">
  function getCurrentLang() {
    return document.documentElement.lang ? document.documentElement.lang.toLowerCase().split('-')[0] : 'en';
  }

  // Helper: set dir attribute on <html> and <body>
  function setDir(isRTL) {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.dir = isRTL ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', isRTL);
  }

  // Main: check and apply RTL if needed
  function checkAndApplyRTL() {
    const lang = getCurrentLang();
    setDir(rtlLangs.includes(lang));
  }

  // Observe changes to <html lang="..."> (Google Translate changes this)
  const observer = new MutationObserver(checkAndApplyRTL);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  // Also check on page load and every 1s (for robustness)
  checkAndApplyRTL();
  setInterval(checkAndApplyRTL, 1000);
})();
