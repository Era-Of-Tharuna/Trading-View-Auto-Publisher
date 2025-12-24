# 🚀 TradingView Auto Publisher (n8n + Playwright)

An automated system that **reads trading ideas from files and publishes them to TradingView automatically** using browser automation.

This project uses **n8n** for workflow orchestration and **Playwright (Node.js)** for browser automation with a saved TradingView login session.

---

## 📌 What This Project Does

* ✅ Opens TradingView automatically
* ✅ Uses a **saved login session** (no login every time)
* ✅ Opens the **Publish dialog using keyboard shortcut (Alt + P)**
* ✅ Types title & description automatically
* ✅ Publishes trading ideas
* ✅ Runs fully through an **n8n workflow**

---

## 🛠 Tech Stack

* **Node.js** (v18+ recommended)
* **Playwright** (Browser automation)
* **n8n** (Workflow automation)
* **TradingView** (Target platform)

---

## 📂 Project Structure

```
tradingview-bot/
│
├── storage/
│   └── state.json        # Saved TradingView login session
│
├── tradingview_login.js  # One-time login & session save script
├── tradingview_post.js   # Auto publish script
├── package.json
└── README.md
```

---

## 🔐 Step 1: Save TradingView Login Session (One-Time)

Run this once to store your login session:

```bash
node tradingview_login.js
```

### Instructions:

1. Browser will open
2. Login manually to TradingView
3. **DO NOT close browser** for 2 minutes
4. Session will be saved to `storage/state.json`

✔ After this, login is automatic forever (until logout).

---

## ✍ Step 2: Auto Publish TradingView Idea

Run the publishing script:

```bash
node tradingview_post.js
```

### What it does:

* Opens TradingView chart page
* Loads saved login session
* Triggers **Publish dialog (Alt + P)**
* Types title & description
* Submits the idea

---

## 🔄 n8n Workflow Integration

This project is designed to run inside **n8n** using the **Execute Command** node.

### Workflow Steps:

1. Read idea files (Google Drive / Local)
2. Extract text
3. Normalize content
4. Loop over ideas
5. Execute `node tradingview_post.js`

✔ Successfully tested with multiple ideas

---

## 📸 Output Confirmation

Successful execution logs look like:

```
Opening TradingView...
Opening Publish dialog (Alt + P)...
Typing title...
Typing description...
Publishing idea...
POST SUBMITTED
```

And exit code:

```
exitCode: 0
stderr: [empty]
```

---

## ⚠ Important Notes

* TradingView may occasionally show CAPTCHA
* Add delays to avoid bot detection
* Use responsibly (personal or demo purposes)

---

## 🌟 Future Enhancements

* ⏱ Random human-like delays
* 📸 Screenshot after publish
* 🧠 AI-generated idea content
* ☁ Cloud deployment

---

## 👤 Author

**Tharuna**
AI Associate Engineer | Automation & Web Enthusiast

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork & improve it!
