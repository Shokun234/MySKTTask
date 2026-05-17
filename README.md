# MySKTTask

Static homework manager for students. Data can stay local for drafts, while everyone can read from a public Google Sheet. Admin updates can be sent back to Google Sheets through the included Apps Script web app.

## Files

- `index.html` - app shell
- `styles.css` - UI styles
- `app.js` - app logic
- `manifest.json` and `sw.js` - PWA/offline shell
- `google-apps-script.gs` - paste into Google Apps Script to enable Sheet updates

## Google Sheets

Create tabs named `Homework`, `Summaries`, `Events`, `ActivityLog`.

Use row 1 headers:

- `Homework`: `id,title,subject,assignDate,dueDate,description,attachments,done,grade,personalNotes,comments,recurring,createdAt,updatedAt`
- `Summaries`: `id,author,subject,title,body,link,quiz,flashcards,comments,createdAt,updatedAt`
- `Events`: `id,title,start,end,type,description,createdAt,updatedAt`
- `ActivityLog`: `at,action,type,id,title`

Publish the Sheet as viewable by link. In the app Admin page, paste the Sheet URL or ID.

To allow writes, open Apps Script from the Sheet, paste `google-apps-script.gs`, deploy as a Web App, and paste the Web App URL in Admin.
