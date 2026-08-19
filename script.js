const questions = [
    {
        section: "Quick Intro",
        question: "Which age group are you in?",
        type: "choice",
        options: ["Below 18", "18–22", "23–30", "31–40", "41–50", "Above 50"]
    },
    {
        section: "Quick Intro",
        question: "Where do you live?",
        type: "choice",
        options: [
            "Koshi", "Madhesh", "Bagmati", "Gandaki",
            "Lumbini", "Karnali", "Sudurpashchim", "Outside Nepal"
        ]
    },

    {
        section: "Your Energy Life",
        question: "What powers your home most of the time?",
        type: "choice",
        options: [
            "⚡ National electricity grid",
            "☀️ Solar energy",
            "💧 Local hydropower",
            "🔋 A mix of sources",
            "Other"
        ]
    },
    {
        section: "Your Energy Life",
        question: "Which clean-energy solutions have you seen or used around you? Choose all that apply.",
        type: "multiple",
        options: [
            "☀️ Solar panels",
            "🔥 Biogas",
            "💧 Micro-hydropower",
            "🍳 Improved cooking stove",
            "🌞 Solar water heater",
            "I have not seen any"
        ]
    },
    {
        section: "Your Energy Life",
        question: "How often do you try to save electricity at home?",
        type: "scale",
        options: [
            "1 — Never 😅",
            "2 — Rarely",
            "3 — Sometimes",
            "4 — Often",
            "5 — Always 🌱"
        ]
    },

    {
        section: "Your Opinion",
        question: "How familiar are you with renewable energy?",
        type: "scale",
        options: [
            "1 — Not familiar yet",
            "2 — A little",
            "3 — Somewhat familiar",
            "4 — Quite familiar",
            "5 — Very familiar"
        ]
    },
    {
        section: "Your Opinion",
        question: "Which source could help Nepal the most in the future?",
        type: "choice",
        options: [
            "💧 Hydropower",
            "☀️ Solar",
            "🌬️ Wind",
            "♻️ Biogas",
            "🌾 Biomass",
            "✨ A mix of all sources"
        ]
    },
    {
        section: "Your Opinion",
        question: "What is Nepal’s biggest energy challenge, in your view?",
        type: "choice",
        options: [
            "High energy costs",
            "Unreliable electricity supply",
            "Dependence on imported fuel",
            "High cost of clean-energy systems",
            "Lack of information or awareness",
            "Government policy and infrastructure",
            "Other"
        ]
    },

    {
        section: "The Solar Challenge",
        question: "If solar panels could lower your bills over time, how interested would you be?",
        type: "scale",
        options: [
            "1 — Not interested",
            "2 — Slightly interested",
            "3 — Maybe",
            "4 — Interested",
            "5 — Very interested ☀️"
        ]
    },
    {
        section: "The Solar Challenge",
        question: "What would make clean energy easier for your household to adopt?",
        type: "choice",
        options: [
            "Lower installation price",
            "Government subsidy",
            "Easy monthly installments",
            "Low-interest bank loan",
            "Clear information about savings",
            "Better reliability",
            "I am not interested right now"
        ]
    },
    {
        section: "The Solar Challenge",
        question: "Imagine you have NPR 1,00,000 for a smarter energy future. What would you choose?",
        type: "choice",
        options: [
            "☀️ Install a small solar system",
            "🏠 Make my home more energy-efficient",
            "🚗 Invest in an EV-related solution",
            "🏦 Keep it in savings",
            "💼 Invest in a business",
            "🤔 I would need more information"
        ]
    },

    {
        section: "Nepal’s Future",
        question: "What should Nepal prioritize first to grow renewable energy?",
        type: "multiple",
        options: [
            "More subsidies",
            "Affordable loans",
            "Better infrastructure",
            "Public awareness",
            "Renewable-energy education",
            "More private investment",
            "Research and innovation"
        ]
    },

    {
        section: "Your Voice",
        question: "In one sentence, what would improve Nepal’s energy future?",
        type: "textarea",
        optional: true
    },
    {
        section: "Stay Connected",
        question: "Would you like to join future surveys or discussions?",
        type: "choice",
        optional: true,
        options: ["Yes 👍", "Maybe", "No, thank you"]
    },

    {
    section: "Quick Intro",
    question: "What best describes your current role?",
    type: "choice",
    options: [
        "Student",
        "Employed",
        "Business owner",
        "Farmer",
        "Self-employed",
        "Homemaker",
        "Other"
    ]
},
{
    section: "Your Energy Life",
    question: "Which activity uses the most electricity in your home?",
    type: "choice",
    options: [
        "Lighting",
        "Cooking",
        "Water heating",
        "Refrigerator",
        "TV and entertainment",
        "Fans or air conditioning",
        "Charging phones and computers",
        "Not sure"
    ]
},
{
    section: "Your Opinion",
    question: "Do you think renewable energy can reduce Nepal’s dependence on imported fuel?",
    type: "choice",
    options: [
        "Definitely yes",
        "Probably yes",
        "Not sure",
        "Probably no",
        "Definitely no"
    ]
}
];