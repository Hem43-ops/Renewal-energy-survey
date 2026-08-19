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

// -----------------------------
// Application state
// -----------------------------
let currentQuestion = 0;
const answers = {};

// -----------------------------
// DOM elements
// -----------------------------
const welcomeScreen = document.getElementById("welcome-screen");
const questionScreen = document.getElementById("question-screen");
const thankYouScreen = document.getElementById("thank-you-screen");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");
const restartButton = document.getElementById("restart-btn");

const sectionName = document.getElementById("section-name");
const questionCounter = document.getElementById("question-counter");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressFill = document.getElementById("progress-fill");

// -----------------------------
// Start survey
// -----------------------------
startButton.addEventListener("click", () => {
    currentQuestion = 0;
    showScreen(questionScreen);
    renderQuestion();
});

// -----------------------------
// Show one screen and hide others
// -----------------------------
function showScreen(screenToShow) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    screenToShow.classList.add("active");
}

// -----------------------------
// Render current question
// -----------------------------
function renderQuestion() {
    const question = questions[currentQuestion];
    const totalQuestions = questions.length;
    const questionPosition = currentQuestion + 1;

    // Clear the previous question before creating the new one.
    optionsContainer.innerHTML = "";

    // Question information
    sectionName.textContent = question.section;
    questionCounter.textContent =
        `${questionPosition} / ${totalQuestions}`;
    questionNumber.textContent =
        `QUESTION ${String(questionPosition).padStart(2, "0")}`;
    questionText.textContent = question.question;

    // Progress bar
    const progress = (questionPosition / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;

    // Create the appropriate input.
    if (question.type === "text" || question.type === "textarea") {
        createTextInput(question);
    } else {
        question.options.forEach((optionText, index) => {
            createOption(optionText, index, question.type);
        });
    }

    // Back button
    backButton.style.visibility =
        currentQuestion === 0 ? "hidden" : "visible";

    // Next / Submit button
    if (currentQuestion === totalQuestions - 1) {
        nextButton.innerHTML = `Submit <span>✓</span>`;
    } else {
        nextButton.innerHTML = `Next <span>→</span>`;
    }

    restoreAnswer();
}

// -----------------------------
// Create a choice/scale option
// -----------------------------
function createOption(optionText, index, type) {
    const option = document.createElement("button");

    option.type = "button";
    option.className = "option";
    option.dataset.index = index;
    option.innerHTML = `
        <span class="option-circle"></span>
        <span>${optionText}</span>
    `;

    option.addEventListener("click", () => {
        selectOption(option, optionText, type);
    });

    optionsContainer.appendChild(option);
}

// -----------------------------
// Select an option
// -----------------------------
function selectOption(selectedOption, optionText, type) {
    // Multiple-choice question
    if (type === "multiple") {
        selectedOption.classList.toggle("selected");

        const selectedOptions = Array.from(
            optionsContainer.querySelectorAll(".option.selected")
        ).map(option => {
            return option.querySelector("span:last-child").textContent;
        });

        answers[currentQuestion] = selectedOptions;
        return;
    }

    // Single-choice / scale question
    optionsContainer
        .querySelectorAll(".option")
        .forEach(option => {
            option.classList.remove("selected");
        });

    selectedOption.classList.add("selected");
    answers[currentQuestion] = optionText;
}

// -----------------------------
// Create text / textarea input
// -----------------------------
function createTextInput(question) {
    let input;

    if (question.type === "textarea") {
        input = document.createElement("textarea");
        input.rows = 6;
        input.placeholder = "Write your thoughts here...";
    } else {
        input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter your WhatsApp number...";
    }

    input.style.width = "100%";
    input.style.padding = "18px";
    input.style.borderRadius = "15px";
    input.style.border = "1.5px solid #e5ebe7";
    input.style.fontFamily = "Inter, sans-serif";
    input.style.fontSize = "15px";
    input.style.outline = "none";
    input.style.resize = "vertical";
    input.style.boxSizing = "border-box";

    input.addEventListener("input", () => {
        answers[currentQuestion] = input.value;
    });

    optionsContainer.appendChild(input);
}

// -----------------------------
// Restore a previously saved answer
// -----------------------------
function restoreAnswer() {
    const savedAnswer = answers[currentQuestion];

    if (savedAnswer === undefined || savedAnswer === "") {
        return;
    }

    const question = questions[currentQuestion];

    // Text / textarea answer
    if (
        typeof savedAnswer === "string" &&
        (question.type === "text" || question.type === "textarea")
    ) {
        const input = optionsContainer.querySelector("input, textarea");

        if (input) {
            input.value = savedAnswer;
        }

        return;
    }

    // Multiple-choice answer
    if (question.type === "multiple") {
        const options = optionsContainer.querySelectorAll(".option");

        options.forEach(option => {
            const text = option.querySelector("span:last-child").textContent;

            if (Array.isArray(savedAnswer) && savedAnswer.includes(text)) {
                option.classList.add("selected");
            }
        });

        return;
    }

    // Single-choice / scale answer
    optionsContainer.querySelectorAll(".option").forEach(option => {
        const text = option.querySelector("span:last-child").textContent;

        if (text === savedAnswer) {
            option.classList.add("selected");
        }
    });
}

// -----------------------------
// Next button
// -----------------------------
nextButton.addEventListener("click", () => {
    const question = questions[currentQuestion];
    const answer = answers[currentQuestion];

    // Required-question validation
    const isEmptyMultipleAnswer =
        Array.isArray(answer) && answer.length === 0;

    if (
        !question.optional &&
        (answer === undefined || answer === "" || isEmptyMultipleAnswer)
    ) {
        showValidationMessage();
        return;
    }

    // Last question
    if (currentQuestion === questions.length - 1) {
        submitSurvey();
        return;
    }

    // Move to next question
    currentQuestion++;
    renderQuestion();
});

// -----------------------------
// Back button
// -----------------------------
backButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
});

// -----------------------------
// Validation message
// -----------------------------
function showValidationMessage() {
    const originalText = nextButton.innerHTML;
    const originalBackground = nextButton.style.background;

    nextButton.innerHTML = "Please answer first";
    nextButton.style.background = "#dc2626";

    setTimeout(() => {
        nextButton.innerHTML = originalText;
        nextButton.style.background = originalBackground;
    }, 1200);
}

// -----------------------------
// Submit survey
// -----------------------------
function submitSurvey() {
    const responseData = prepareResponseData();

    console.log("SURVEY RESPONSE:", responseData);

    // At this stage the survey is only preparing/logging the data.
    // Google Apps Script submission can be connected here.
    showScreen(thankYouScreen);
}

// -----------------------------
// Prepare response data
// -----------------------------
function prepareResponseData() {
    const response = {
        timestamp: new Date().toISOString()
    };

    questions.forEach((question, index) => {
        response[`Q${index + 1}`] = answers[index] ?? "";
    });

    return response;
}

// -----------------------------
// Restart survey
// -----------------------------
restartButton.addEventListener("click", () => {
    currentQuestion = 0;

    Object.keys(answers).forEach(key => {
        delete answers[key];
    });

    showScreen(welcomeScreen);
});

// -----------------------------
// Optional: warn only if you later
// decide that unfinished answers
// should be protected from refresh.
// -----------------------------
// window.addEventListener("beforeunload", (event) => {
//     event.preventDefault();
//     event.returnValue = "";
// });
