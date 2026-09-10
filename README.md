Call for papers website: https://cfp.atom.im

Run `hugo server` to preview locally. The existing GitHub Pages workflow builds
on pushes to `master` and daily to refresh the conference categories.

Conference records live in `config.toml`. Use an official CFP link in `source`
and record the edition in `year`, including when the event dates are unknown.
Use `TBA` for unannounced or conflicting dates and `N/A` when a separate deadline
does not apply. Do not estimate future deadlines from previous years.

Exact submission deadlines must include their published UTC offset. Convert
Pacific/Eastern time using daylight saving time on the deadline date. Date-only
deadlines are displayed without a countdown. Countdown timestamps retain the
offset so the build and visitor timezones cannot change the deadline.

Use `notes`, `event_note`, or `notification_note` to identify tentative dates,
official conflicts, conference weeks, and initial versus final decisions.
`enable = 2` features a conference only while its submission is open; expired
featured entries join the inactive or past lists automatically.
