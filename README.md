# 🌱 Nepal Renewable Energy Consumption & Sustainability Survey

An interactive web-based questionnaire developed for an **Engineering Economics research assignment** on:

> **Renewable Energy Consumption and Sustainability in Nepal**

The project collects primary survey data about people's awareness, energy consumption habits, economic preferences, and willingness to adopt renewable-energy solutions.

---

## 📌 Project Overview

This project replaces a traditional static questionnaire with an interactive, animated survey interface.

Respondents answer one question at a time through a modern web interface. Their responses are automatically submitted to **Google Sheets** through **Google Apps Script**, creating a structured dataset for further research and statistical analysis.

### Research Topic

**Renewable Energy Consumption and Sustainability in Nepal**

### Research Objectives

1. To examine the awareness and current use of renewable energy among people in Nepal.
2. To analyze the economic factors influencing renewable-energy adoption, including cost, savings, affordability, subsidies, and financing.
3. To understand people's attitudes toward sustainable energy and their willingness to adopt renewable-energy solutions in the future.

---

## ✨ Features

* 🌱 Interactive welcome screen
* ⚡ One-question-at-a-time survey interface
* 📊 Animated progress bar
* 🎯 Interactive answer selection
* 🔄 Next and Back navigation
* 📱 Responsive design for mobile and desktop
* 💰 Engineering Economics-based questions
* 🧠 Interactive energy investment decision questions
* 🤝 Optional contact and interest questions
* 📋 Automatic response collection
* 📊 Google Sheets integration
* ☁️ Google Apps Script backend
* 🎉 Animated completion screen

---

## 🧩 Project Structure

```text
nepal-renewable-energy-survey/
│
├── index.html
│   └── Main survey interface
│
├── style.css
│   └── Design, animations, layout and responsive styles
│
├── script.js
│   └── Questions, navigation, validation and data submission
│
└── README.md
    └── Project documentation
```

The Google Apps Script backend is maintained separately in Google Apps Script.

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Google Fonts

### Backend

* Google Apps Script

### Data Storage

* Google Sheets

### Hosting

* GitHub Pages

---

## 🔄 How the System Works

```text
                 👤 Respondent
                       │
                       ▼
             ┌──────────────────┐
             │  Interactive Web │
             │      Survey      │
             └────────┬─────────┘
                      │
                      ▼
             ┌──────────────────┐
             │   JavaScript     │
             │ Collects Answers │
             └────────┬─────────┘
                      │
                 HTTP POST
                      │
                      ▼
             ┌──────────────────┐
             │ Google Apps      │
             │     Script       │
             └────────┬─────────┘
                      │
                      ▼
             ┌──────────────────┐
             │  Google Sheets   │
             │ Research Dataset │
             └──────────────────┘
```

---

## 📋 Questionnaire Design

The questionnaire contains approximately **32 questions** divided into several sections.

### Section 1 — About You

Collects basic demographic information such as:

* Age group
* Gender
* Location
* Occupation
* Household income

### Section 2 — Energy Habits

Explores:

* Primary electricity source
* Awareness of renewable technologies
* Current renewable-energy usage
* Electricity-saving habits
* Major household electricity-consuming activities

### Section 3 — Awareness & Sustainability

Examines:

* Renewable-energy knowledge
* Perception of Nepal's renewable-energy potential
* Preferred renewable-energy sources
* Importance of sustainability
* Perceived energy challenges

### Section 4 — Economics of Renewable Energy

Focuses on:

* Initial installation cost
* Long-term savings
* Government subsidies
* Financing
* Payment preferences
* Willingness to pay
* Economic barriers

### Section 5 — Nepal's Energy Future

Examines respondents' expectations regarding:

* Future renewable-energy adoption
* Government priorities
* Personal willingness to switch to renewable energy
* Economic opportunities from renewable energy

### Section 6 — Energy Investment Challenge

Contains scenario-based questions designed to explore economic decision-making.

### Section 7 — Stay Connected

Contains optional questions about:

* Personal interests
* Future research/project participation
* Optional WhatsApp contact
* Additional opinions

---

## 📊 Data Collection

Responses are automatically stored in a Google Sheet.

Each respondent generates a new row containing:

```text
Timestamp
Q1
Q2
Q3
...
Q32
```

Multiple-choice answers are stored together using a separator:

```text
Hydropower | Solar energy | Biogas
```

This makes the dataset easier to process later using:

* Excel
* Python
* Pandas
* Statistical analysis tools
* Data visualization tools

---

## 🔬 Planned Research Analysis

The collected dataset can be used to investigate relationships such as:

### Research Question 1

> Does household income influence willingness to adopt renewable energy?

### Research Question 2

> Does renewable-energy awareness influence willingness to invest?

### Research Question 3

> Does government subsidy influence renewable-energy adoption intention?

### Research Question 4

> What are the major economic barriers to renewable-energy adoption in Nepal?

### Research Question 5

> Which renewable-energy source is perceived to have the greatest potential in Nepal?

---

## 📈 Potential Data Visualizations

The collected data can later be visualized using:

* Bar charts
* Pie charts
* Histograms
* Likert-scale charts
* Cross-tabulations
* Correlation analysis
* Comparative charts
* Demographic analysis

Example:

```text
Household Income
       │
       ▼
Willingness to Adopt Renewable Energy
       │
       ▼
Economic Analysis
```

---

## 🚀 Deployment

The frontend can be hosted using **GitHub Pages**.

The backend is deployed as a **Google Apps Script Web App**.

The deployed architecture is:

```text
GitHub Pages
     │
     │
     ▼
index.html
style.css
script.js
     │
     │ POST
     ▼
Google Apps Script Web App
     │
     ▼
Google Sheets
```

---

## ⚙️ Local Setup

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Move into the project:

```bash
cd nepal-renewable-energy-survey
```

Open:

```text
index.html
```

in a browser.

---

## 🔐 Privacy

The survey is primarily intended for academic research.

Questions involving personal contact information, such as WhatsApp number, are optional.

Respondents should be informed about how their information will be used before submitting the survey.

Do not store sensitive credentials, passwords, private API keys, or Google account credentials inside the frontend files.

---

## 📚 Academic Purpose

This project was developed as part of an **Engineering Economics research assignment** involving:

* Topic selection
* Research objectives
* Questionnaire design
* Primary data collection
* Economic decision analysis
* Renewable-energy sustainability research

The collected data will be used as primary data for subsequent research and analysis.

---

## 🌱 Future Improvements

Possible future improvements include:

* [ ] Add question-specific animations
* [ ] Add dark mode
* [ ] Add Nepal-themed visual elements
* [ ] Add response validation
* [ ] Replace Q1–Q32 with descriptive column names
* [ ] Create an automatic research dashboard
* [ ] Add data-analysis scripts using Python
* [ ] Add statistical hypothesis testing
* [ ] Add downloadable research reports
* [ ] Improve accessibility
* [ ] Add multilingual support (English/Nepali)

---

## 👨‍💻 Project Status

**Status:** 🚧 Active Development

The current version supports:

> **Interactive Survey → Google Apps Script → Google Sheets**

Further development will focus on improving the questionnaire, data organization, visualization, and research analysis.

---

## 📄 License

This project is intended primarily for **academic and educational purposes**.
