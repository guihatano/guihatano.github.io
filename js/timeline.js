'use strict';

window.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.timeline li');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    items.forEach(function (item) { observer.observe(item); });
  } else {
    // Older browsers: show everything immediately
    items.forEach(function (item) { item.classList.add('in-view'); });
  }

  // Toggle see-more / see-less label (Bootstrap handles the collapse itself)
  document.querySelectorAll('.see-more').forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.textContent = this.textContent.trim() === 'See More' ? 'See Less' : 'See More';
    });
  });
});
