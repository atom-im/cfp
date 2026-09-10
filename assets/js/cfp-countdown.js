(function () {
  'use strict';

  function updateCountdowns() {
    var now = Date.now();
    document.querySelectorAll('[data-countdown]').forEach(function (element) {
      // ISO timestamps include the conference's UTC offset, independent of
      // the build machine's or visitor's timezone.
      var remaining = new Date(element.dataset.countdown).getTime() - now;
      if (!Number.isFinite(remaining)) {
        element.textContent = 'See CFP';
      } else if (remaining <= 0) {
        element.textContent = 'Closed';
      } else {
        var minutes = Math.ceil(remaining / 60000);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        element.textContent = days > 0 ? days + (days === 1 ? ' day' : ' days') :
          hours > 0 ? hours + (hours === 1 ? ' hour' : ' hours') :
          minutes + (minutes === 1 ? ' minute' : ' minutes');
      }
    });

    // Event dates have no published start time. Count calendar days in Hong
    // Kong instead of inventing an exact conference start timestamp.
    var parts = new Intl.DateTimeFormat('en', {
      timeZone: 'Asia/Hong_Kong', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date(now));
    var calendar = {};
    parts.forEach(function (part) { calendar[part.type] = part.value; });
    var today = calendar.year + '-' + calendar.month + '-' + calendar.day;
    document.querySelectorAll('[data-event-date]').forEach(function (element) {
      var days = Math.round((Date.parse(element.dataset.eventDate) - Date.parse(today)) / 86400000);
      element.textContent = days <= 0 ? 'In Progress' : days + (days === 1 ? ' day' : ' days');
    });
  }

  updateCountdowns();
  setInterval(updateCountdowns, 60000);
}());
