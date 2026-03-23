# PaisaClear — Know where your salary goes

> AI-powered bank statement analyser for Indians. Upload your PDF, get a plain-language breakdown of every rupee spent.

![Status](https://img.shields.io/badge/status-MVP%20Beta-gold) ![License](https://img.shields.io/badge/license-MIT-blue) ![Hosted](https://img.shields.io/badge/hosted%20on-Vercel-black)

---

## What it does

Most Indians have no idea where their salary disappears each month. Transactions are scattered across UPI apps, cards, wallets, and subscriptions — with no single, simple view.

PaisaClear fixes that. Upload your bank statement PDF or CSV, and within seconds you get:

- **Total income vs expenses** — clear summary in plain numbers
- **Category breakdown** — Food, UPI Transfers, Shopping, Transport, Subscriptions and more
- **AI plain-language summary** — written like a financial advisor, not a spreadsheet
- **Spending insights** — specific patterns and actionable suggestions
- **Weekly spending chart** — see which week you overspent

No login. No bank sync. No data stored anywhere.

---

## Demo

Upload any Indian bank statement (SBI, HDFC, ICICI, Axis, Kotak, PNB, Yes Bank) and see your spending breakdown instantly.

**Live app:** [paisaclear.vercel.app](https://paisaclear.vercel.app)

---

## How it works

```
User uploads PDF/CSV
        ↓
File is read locally in the browser (never sent to any server)
        ↓
Anthropic Claude API analyses the transactions
        ↓
Structured JSON returned with categories, insights, summary
        ↓
Dashboard rendered instantly
```

Everything runs client-side. Your bank statement never touches any server except the Anthropic API for analysis.

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML, CSS, JavaScript |
| AI Analysis | Anthropic Claude API (claude-sonnet) |
| Hosting | Vercel (free tier) |
| Fonts | Playfair Display + Outfit (Google Fonts) |
| Payments (coming) | Razorpay |

No framework. No build step. No dependencies. One HTML file.

---

## Run locally

No setup needed. Just open the file:

```bash
git clone https://github.com/yourusername/paisaclear.git
cd paisaclear
open index.html
```

Or drag `index.html` into any browser.

> **Note:** The Anthropic API call requires a valid API key configured on the backend. The app falls back to demo data if the API is unavailable.

---

## Project structure

```
paisaclear/
│
├── index.html          # Entire app — single file
└── README.md           # This file
```

---

## Roadmap

- [x] PDF + CSV upload
- [x] AI transaction categorisation
- [x] Plain-language spending summary
- [x] Category breakdown with visual bars
- [x] Weekly spending pattern chart
- [ ] Razorpay paywall (₹49/month)
- [ ] Month-over-month comparison
- [ ] Email report delivery
- [ ] WhatsApp bot version
- [ ] Setu Account Aggregator integration

---

## The problem (ITCH framework score)

| Dimension | Score |
|---|---|
| Severity | 8/10 |
| TAM | 10/10 |
| Whitespace | 8/10 |
| Frequency | 8/10 |
| **ITCH Score** | **90.5/100** |

Every salaried Indian with a smartphone is a potential user. 500M+ UPI users. No single app gives a unified, plain-language view of spending.

---

## Contributing

This is an early MVP. If you find bugs or have suggestions, open an issue or reach out directly.

---

## License

MIT — free to use, modify, and distribute.

---

* Hosted on Vercel · Made for India*
