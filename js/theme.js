(function () {
  'use strict';

  var STORAGE_KEY = 'gyh-theme';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    document.querySelectorAll('[data-set-theme]').forEach(function (el) {
      var isActive = el.getAttribute('data-set-theme') === theme;
      el.parentElement.classList.toggle('active', isActive);
      el.parentElement.classList.toggle('disabled', isActive);
    });
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY) || 'dark';
    apply(saved);
    document.querySelectorAll('[data-set-theme]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        apply(this.getAttribute('data-set-theme'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
