🚀 TradingView Auto Publisher (n8n + Playwright)

An automated system that reads trading ideas from files and publishes them to TradingView automatically using browser automation.

This project uses n8n for workflow orchestration and Playwright (Node.js) for browser automation with a saved TradingView login session.

📌 What This Project Does

✅ Opens TradingView automatically

✅ Uses a saved login session (no login every time)

✅ Opens the Publish dialog using keyboard shortcut (Alt + P)

✅ Types title & description automatically

✅ Publishes trading ideas

✅ Runs fully through an n8n workflow

🛠 Tech Stack

Node.js (v18+ recommended)

Playwright – Browser automation

n8n – Workflow orchestration

TradingView – Target platform

📂 Project Structure
Trading-View-Auto-Publisher/
│
├── n8n/
│   └── tradingview_auto_publish_workflow.json
│
├── storage/
│   └── state.json        # Saved TradingView login session (ignored in git)
│
├── tradingview_post.js   # Auto publish script
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

🔐 Login Session Handling

This project uses a saved TradingView browser session stored in:

storage/state.json


This allows Playwright to:

Skip login every time

Act like a real logged-in user

Avoid unnecessary authentication steps

⚠ Note:
state.json is intentionally ignored via .gitignore for security reasons.

✍ Auto Publish TradingView Idea

Run the publishing script:

node tradingview_post.js

What the script does:

Opens TradingView chart page

Loads saved login session

Triggers Publish dialog using Alt + P

Types title & description automatically

Publishes the idea

🔄 n8n Workflow Integration

This project is designed to run inside n8n using the Execute Command node.

Workflow Logic:

Read idea files (Google Drive / Local)

Extract text content

Normalize and format text

Loop over ideas

Execute:

node tradingview_post.js


✔ Successfully tested with multiple ideas

📥 Import n8n Workflow

The complete workflow is available in the repo:

n8n/tradingview_auto_publish_workflow.json

Import Steps:

Open n8n

Click Import from File

Select the JSON workflow file

Update file paths if required

Execute the workflow

📸 Output Confirmation

Successful execution logs look like:

Opening TradingView...
Opening Publish dialog (Alt + P)...
Typing title...
Typing description...
Publishing idea...
POST SUBMITTED


Exit code:

exitCode: 0
stderr: [empty]

⚠ Important Notes

TradingView may occasionally show CAPTCHA

Add delays to avoid bot detection

Use responsibly (personal or demo purposes only)

🌟 Future Enhancements

⏱ Human-like random delays

📸 Screenshot after publishing

🧠 AI-generated idea content

☁ Cloud deployment

👤 Author

Tharuna
AI Associate Engineer | Automation & Web Enthusiast

⭐ Like this project?

Give it a ⭐ on GitHub and feel free to fork and improve it!git status
