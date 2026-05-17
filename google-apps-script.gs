const SHEETS = {
  homeworks: 'Homework',
  summaries: 'Summaries',
  events: 'Events',
  activity: 'ActivityLog',
};

function doGet() {
  return json_({ ok: true, app: 'MySKTTask Sheets bridge' });
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (body.action === 'snapshot') {
      replace_(ss, SHEETS.homeworks, body.homeworks || []);
      replace_(ss, SHEETS.summaries, body.summaries || []);
      replace_(ss, SHEETS.events, body.events || []);
      appendLog_(ss, body.log || []);
      return json_({ ok: true });
    }
    return json_({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function replace_(ss, name, rows) {
  const sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  const headers = headersFor_(name);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  if (!rows.length) return;
  const values = rows.map(row => headers.map(key => serial_(row[key])));
  sheet.getRange(2, 1, values.length, headers.length).setValues(values);
}

function appendLog_(ss, rows) {
  if (!rows.length) return;
  const sheet = ss.getSheetByName(SHEETS.activity) || ss.insertSheet(SHEETS.activity);
  const headers = headersFor_(SHEETS.activity);
  if (sheet.getLastRow() === 0) sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  const values = rows.map(row => headers.map(key => serial_(row[key])));
  sheet.getRange(sheet.getLastRow() + 1, 1, values.length, headers.length).setValues(values);
}

function headersFor_(name) {
  if (name === SHEETS.homeworks) return ['id','title','subject','assignDate','dueDate','description','attachments','done','grade','personalNotes','comments','recurring','createdAt','updatedAt'];
  if (name === SHEETS.summaries) return ['id','author','subject','title','body','link','quiz','flashcards','comments','createdAt','updatedAt'];
  if (name === SHEETS.events) return ['id','title','start','end','type','description','createdAt','updatedAt'];
  return ['at','action','type','id','title'];
}

function serial_(value) {
  if (Array.isArray(value) || typeof value === 'object') return JSON.stringify(value || []);
  return value == null ? '' : value;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
