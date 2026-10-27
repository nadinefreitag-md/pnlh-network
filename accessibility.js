/* Keep the original Editorial sidebar behaviour keyboard-accessible. */
(function () {
  var sidebar = document.getElementById('sidebar');
  var inner = sidebar.querySelector('.inner');
  var toggle = sidebar.querySelector('.toggle');
  function sync() {
    var closed = sidebar.classList.contains('inactive');
    toggle.setAttribute('aria-expanded', String(!closed));
    inner.inert = closed;
  }
  new MutationObserver(sync).observe(sidebar, {attributes:true, attributeFilter:['class']});
  sync();
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !sidebar.classList.contains('inactive')) {
      sidebar.classList.add('inactive');
      toggle.focus();
    }
  });
})();
