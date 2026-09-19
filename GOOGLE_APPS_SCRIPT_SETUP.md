# GOOGLE APPS SCRIPT SETUP

## Overview

This document explains how to set up the Google Apps Script backend for the AST website contact form migration from Supabase to Google Sheets + Apps Script.

The final architecture is:

```
AST WEBSITE (React + Vite)
      │
      │ POST
      ▼
  Google Apps Script Web App
      │
  ┌─────┴─────┐
  ▼           ▼
Google Sheet   Email
Lead Storage   Notification
```

## Setup Steps

### 1. Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "AST Website Leads"
3. Ensure there is a tab named **"Sheet3"** (rename or create it if needed)
4. In **Sheet3**, add a header row with the following columns (in exact order):
   - A1 = Timestamp
   - B1 = Name
   - C1 = Email
   - D1 = Phone
   - E1 = Company
   - F1 = Service
   - G1 = Budget
   - H1 = Timeline
   - I1 = Message
   - J1 = Source

**Important**: Do NOT use "Type" column. The form does not send a "type" field.

### 2. Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default `myFunction` code and replace it with the following:

```javascript
/**
 * Receives POST request from the AST website contact form.
 * Validates data, appends row to Google Sheet (Sheet3), and sends email notification.
 *
 * POST form-encoded payload expected (URLSearchParams):
 * {
 *   "name": "...",
 *   "email": "...",
 *   "phone": "...",
 *   "company": "...",
 *   "service": "...",
 *   "budget": "...",
 *   "timeline": "...",
 *   "message": "...",
 *   "source": "website"
 * }
 */

const SPREADSHEET_ID = 'YOUR_GOOGLE_SHEET_ID'; // Replace with your sheet ID
const SHEET_NAME = 'Sheet3'; // MUST be "Sheet3" - explicitly target this tab
const NOTIFICATION_EMAIL = 'muhammadzaman.dev@gmail.com'; // Replace with notification email

function doPost(e) {
  try {
    // Use e.parameter for form-encoded data (URLSearchParams)
    // This prevents CORS preflight issues
    if (!e || !e.parameter) {
      throw new Error('No form parameters received.');
    }

    const data = e.parameter;

    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const phone = String(data.phone || '').trim();
    const company = String(data.company || '').trim(); // optional
    const service = String(data.service || '').trim(); // optional
    const budget = String(data.budget || '').trim(); // optional
    const timeline = String(data.timeline || '').trim(); // optional
    const message = String(data.message || '').trim();
    const source = String(data.source || 'website').trim();

    // Validate required fields only
    if (!name || !email || !message) {
      return ContentService
        .createOutput(JSON.stringify({
          success: false,
          error: 'Missing required fields: name, email, and message are required.'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Add timestamp
    const timestamp = new Date();

    // Open spreadsheet by ID and explicitly get Sheet3
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(`Google Sheet tab not found: ${SHEET_NAME}. Ensure "Sheet3" exists.`);
    }

    // Append row to Sheet3 - columns must match header row exactly:
    // A=Timestamp, B=Name, C=Email, D=Phone, E=Company, F=Service, G=Budget, H=Timeline, I=Message, J=Source
    const row = [
      timestamp,        // A: Timestamp
      name,             // B: Name
      email,            // C: Email
      phone,            // D: Phone
      company,          // E: Company (optional - empty string if not provided)
      service,          // F: Service (optional)
      budget,           // G: Budget (optional)
      timeline,         // H: Timeline (optional)
      message,          // I: Message
      source            // J: Source
    ];

    sheet.appendRow(row);

    // Send email notification (non-blocking)
    try {
      sendEmail(name, email, phone, company, service, budget, timeline, message, source, timestamp.toISOString());
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails - sheet write succeeded
    }

    // Return success response
    return ContentService
      .createOutput(JSON.stringify({
        success: true,
        result: 'success',
        message: 'Submission received successfully.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error('Contact submission failed:', error);
    return ContentService
      .createOutput(JSON.stringify({
        success: false,
        result: 'error',
        error: error && error.message ? error.message : 'Unable to process submission.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Sends email notification for new contact submission.
 */
function sendEmail(name, email, phone, company, service, budget, timeline, message, source, timestamp) {
  const subject = 'New AST Website Inquiry';
  const body = [
    'New AST Website Inquiry',
    '',
    'Name:', name,
    '', 'Email:', email,
    '', 'Phone:', phone || 'Not provided',
    '', 'Company:', company || 'Not provided',
    '', 'Service:', service || 'Not specified',
    '', 'Budget:', budget || 'Not specified',
    '', 'Timeline:', timeline || 'Not specified',
    '', 'Message:', message,
    '', 'Source:', source || 'website',
    '', 'Timestamp:', timestamp
  ].join('\n');

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: subject,
    body: body
  });
}

/**
 * Test function - run manually in Apps Script editor to verify Sheet3 write works.
 * Does NOT affect production.
 */
function testSheetWrite() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error(`Sheet not found: ${SHEET_NAME}. Ensure "Sheet3" exists.`);
  }

  sheet.appendRow([
    new Date(),
    'AST Test',
    'test@example.com',
    '0000000000',
    'Test Company',
    'UI/UX Design & Brand System',
    '$3k - $5k',
    'Immediate (< 2 Weeks)',
    'Google Sheets integration test',
    'website'
  ]);
}
```

### 3. Set Spreadsheet ID

1. Open your Google Sheet
2. Copy the spreadsheet ID from the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
3. Replace `YOUR_GOOGLE_SHEET_ID` in the Apps Script code with your actual spreadsheet ID

### 4. Deploy as Web App (or Update Existing)

1. In the Apps Script editor, click "Deploy" → "Manage deployments"
2. If this is a new deployment:
   - Click "New deployment"
   - Select "Web app" as the deployment type
3. If updating existing:
   - Click the pencil/edit icon on the existing Web App deployment
   - Select "New version" in the version dropdown
4. Set "Execute as" to "Me" (or "Admin if domain is trusted")
5. Set "Who has access" to "Anyone" (or "Your domain if configured")
6. Click "Deploy" / "Save"
7. Copy the deployed URL (keep the same /exec URL if updating)
8. **Important**: The first deployment will show a dialog asking to authorize scopes. Click "Review Permissions" and approve.

### 5. Configure Vite Environment

1. Add the deployed Web App URL to your `.env` file:
   ```
   VITE_GOOGLE_APPS_SCRIPT_URL=https://your-deployed-url/exec
   ```
2. Remove any Supabase-related environment variables:
   ```
   VITE_SUPABASE_URL= (remove)
   VITE_SUPABASE_ANON_KEY= (remove)
   ```

### 6. Test the Form

1. Run `npm run dev` to start the development server
2. Go to the Contact page (`/contact`)
3. Fill out the form with valid data
4. Submit the form
5. Verify:
   - The form shows a success state
   - A new row appears in the Google Sheet
   - An email notification is sent to the configured email address
6. Test error cases:
   - Missing required fields (name, email, message)
   - Invalid email format
   - Duplicate submissions

## Important Notes

- **Do not put Google account passwords, Gmail passwords, or private API keys in the React frontend.** The public frontend should only know the Apps Script Web App endpoint.
- **The Apps Script handles access to the Google Sheet and email service.** The frontend only sends a POST request to the endpoint.
- **CORS**: The Google Apps Script Web App deployed as "Anyone" should automatically handle CORS. If you encounter CORS issues, ensure the deployment allows access from your domain.
- **Rate limiting**: The current implementation has basic spam protection through validation in both the React frontend and Apps Script. If needed, add a honeypot field or reCAPTCHA.
- **Response handling**: The frontend fetch uses `mode: 'cors'` (default) and expects a JSON response with `{ success: true/false, message: "..." }` structure.
- **Form reset**: After successful submission, the Contact.jsx component resets the form state and shows a success message.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Form shows error but data was sent | Check the Apps Script logs (View → Logs) for any errors |
| Email not received | Verify the notification email is correct in the Apps Script code, check spam folder |
| Sheet3 not updating | Verify SPREADSHEET_ID is correct and the sheet tab named "Sheet3" exists exactly |
| Data appears in wrong sheet | Old code used `getActiveSheet()` - ensure new code uses `getSheetByName("Sheet3")` |
| Build fails | Ensure `VITE_GOOGLE_APPS_SCRIPT_URL` is set correctly in `.env` |
| CORS error | The Web App deployment should handle this. Try deploying with "Anyone" access. |
| "Sheet not found" error | Ensure the spreadsheet has a tab named exactly "Sheet3" (case-sensitive) |

## Diagnosis: Wrong Sheet Problem

**If previous submissions went to the wrong sheet:**
The old implementation used `SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()` which writes to whichever tab is currently active/last viewed. This causes data to land in Sheet1, Sheet2, or whichever tab was last opened.

**Fix applied:**
- New code explicitly uses `SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Sheet3")`
- This guarantees data goes to Sheet3 regardless of which tab is active
- Verify old test submissions in Sheet1/Sheet2 and manually move them if needed

## Security

- The Apps Script code does not expose private credentials in the frontend
- The spreadsheet ID is the only configuration value that needs to be in the `.env` file
- Input validation is performed both in the React frontend and Apps Script
- Email notifications are sent to a single configured address
- The implementation does not store any passwords or API keys in source code