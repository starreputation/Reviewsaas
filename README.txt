SETUP GUIDE

1. Create a Google Sheet
Columns:
Date | Rating | Mobile | Email | Feedback

Sheet name must be: Sheet1

2. Open Extensions → Apps Script
Paste the code from apps-script.gs

3. Deploy
Deploy → New Deployment → Web App
Execute as: Me
Access: Anyone

Copy Web App URL

4. Open script.js
Paste URL in:

const API_URL="PASTE_GOOGLE_SCRIPT_URL"

5. Add your Google Place ID:

const PLACE_ID="YOUR_PLACE_ID"

6. Upload all files to GitHub repository.

7. Enable GitHub Pages:
Settings → Pages → Deploy from main branch

Your system will be live.