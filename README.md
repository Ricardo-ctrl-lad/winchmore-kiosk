# Winchmore School Kiosk

A simple static welcome screen for a wall-mounted iPad.

It displays:

- Winchmore School background/branding
- A large live clock
- The current date
- A welcome message

There is no timetable lookup or backend yet. The project is intentionally static so it can be hosted easily with GitHub Pages.

## Files

```text
winchmore-kiosk/
├── README.md
├── index.html
├── styles.css
├── script.js
└── WinchmoreSchool_BG.png
```

## Run in GitHub Codespaces

Open the repository in Codespaces and use any simple static web server/preview extension to open `index.html`.

For example, if Python is available:

```bash
python3 -m http.server 8000
```

Then open the forwarded port in your browser.

## Publish with GitHub Pages

1. Push these files to the `main` branch.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.
7. GitHub will provide a Pages URL such as:

```text
https://YOUR-USERNAME.github.io/winchmore-kiosk/
```

Use that URL as the Meraki Web Clip URL.

## Notes

- Designed for an iPad mounted horizontally.
- Uses 24-hour UK time and UK date formatting.
- The page does not need to reload for the clock/date to update.
- If the background is cropped differently on the iPad, adjust `--background-position` in `styles.css`.
