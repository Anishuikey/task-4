# Mini Productivity Tracker Chrome Extension

A minimal Chrome extension to help you manage productivity by:

- Tracking time spent on websites (by domain)
- Blocking distracting websites by redirecting them
- Viewing daily usage stats and managing blocked sites via a popup UI

---

## Features

- Tracks active tab and time spent per domain
- Allows adding domains to a blocklist
- Redirects blocked sites to a productivity page
- Simple and clean user interface in the popup

---

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer Mode** (toggle top-right).
4. Click **Load unpacked** and select the project folder.
5. The extension will load and start tracking your browsing.

---

## Usage

- Click the extension icon to open the popup.
- See time spent on each site today.
- Add distracting websites to the blocklist to block them.
- Blocked sites will automatically redirect to a productivity info page.

---

## Project Structure

- `manifest.json` — Extension manifest file
- `background.js` — Background script tracking tabs and time
- `popup.html` — Popup UI for stats and controls
- `popup.js` — Popup logic for displaying stats and managing blocklist
- `styles.css` — Styles for popup UI

---

## Notes

- This is a minimal version without backend or syncing.
- Time tracking is approximate based on tab activity.
- Blocking is done by redirecting tabs immediately upon detection.

---

## License

MIT License
