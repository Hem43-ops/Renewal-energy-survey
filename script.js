
/* =========================================================
   NEPAL RENEWABLE ENERGY SURVEY
   Main JavaScript File
========================================================= */


/* =========================================================
   1. QUESTIONS
========================================================= */

const questions = [

    // -----------------------------------------
    // SECTION 1 — ABOUT YOU-m
    // -----------------------------------------

    {
        section: "About You",
        question: "What is your age group?",
        type: "choice",
        options: [
            "Below 18",
            "18–22",
            "23–30",
            "31–40",
            "41–50",
            "Above 50"
        ]
    },

    {
        section: "About You",
        question: "What is your gender?",
        type: "choice",
        options: [
            "Male",
            "Female",
            "Prefer not to say",
            "Other"
        ]
    },

    {
        section: "About You",
        question: "Where do you currently live?",
        type: "choice",
        options: [
            "Koshi",
            "Madhesh",
            "Bagmati",
            "Gandaki",
            "Lumbini",
            "Karnali",
            "Sudurpashchim",
            "Outside Nepal"
        ]
    },

    // {
    //     section: "About You",
    //     question: "What best describes you?",
    //     type: "choice",
    //     options: [
    //         "Student",
    //         "Salaried employee",
    //         "Business owner",
    //         "Farmer",
    //         "Self-employed",
    //         "Homemaker",
    //         "Other"
    //     ]
    // },

    {
        section: "About You",
        question: "What is your approximate monthly household income?",
        type: "choice",
        options: [
            "Below NPR 20,000",
            "NPR 20,000–40,000",
            "NPR 40,000–60,000",
            "NPR 60,000–100,000",
            "Above NPR 100,000",
            "Prefer not to say"
        ]
    },


    // -----------------------------------------
    // SECTION 2 — ENERGY HABITS
    // -----------------------------------------

    {
        section: "Energy Habits",
        question: "What is your primary source of electricity at home?",
        type: "choice",
        options: [
            "Nepal Electricity Authority / Grid",
            "Solar",
            "Local hydropower",
            "Generator",
            "Combination of multiple sources",
            "Other"
        ]
    },

    {
        section: "Energy Habits",
        question: "Which renewable-energy technologies have you heard about?",
        type: "multiple",
        options: [
            "Hydropower",
            "Solar energy",
            "Wind energy",
            "Biogas",
            "Biomass",
            "Geothermal energy",
            "Other",
            "I have very little knowledge about renewable energy"
        ]
    },

    {
        section: "Energy Habits",
        question: "Which renewable-energy technology is currently being used in your household or community?",
        type: "multiple",
        options: [
            "Solar panels",
            "Solar water heater",
            "Biogas",
            "Improved biomass stove",
            "Micro-hydropower",
            "None",
            "Don't know"
        ]
    },

    {
        section: "Energy Habits",
        question: "How often do you consciously try to save electricity?",
        type: "scale",
        options: [
            "1 — Never",
            "2",
            "3 — Sometimes",
            "4",
            "5 — Always"
        ]
    },

    {
        section: "Energy Habits",
        question: "Which activities consume the most electricity in your household?",
        type: "multiple",
        options: [
            "Lighting",
            "Fans",
            "Refrigerator",
            "Television",
            "Water heating",
            "Cooking",
            "Air conditioning",
            "Computers / mobile charging",
            "Other"
        ]
    },


    // -----------------------------------------
    // SECTION 3 — AWARENESS & SUSTAINABILITY
    // -----------------------------------------

    {
        section: "Awareness & Sustainability",
        question: "How would you rate your knowledge of renewable energy?",
        type: "scale",
        options: [
            "1 — Very low",
            "2",
            "3 — Average",
            "4",
            "5 — Excellent"
        ]
    },

    {
        section: "Awareness & Sustainability",
        question: "Do you believe Nepal has enough renewable-energy potential to significantly reduce dependence on fossil fuels?",
        type: "choice",
        options: [
            "Definitely yes",
            "Probably yes",
            "Not sure",
            "Probably no",
            "Definitely no"
        ]
    },

    {
        section: "Awareness & Sustainability",
        question: "Which renewable energy source do you think has the greatest potential in Nepal?",
        type: "choice",
        options: [
            "Hydropower 💧",
            "Solar ☀️",
            "Wind 🌬️",
            "Biogas ♻️",
            "Biomass 🌾",
            "Combination of all"
        ]
    },

    // {
    //     // section: "Awareness & Sustainability",
    //     // question: "How important is environmental sustainability when choosing an energy source?",
    //     // type: "scale",
    //     // options: [
    //     //     "1 — Not important",
    //     //     "2",
    //     //     "3 — Moderately important",
    //     //     "4",
    //     //     "5 — Extremely important"
    //     ]
    // },

    {
        section: "Awareness & Sustainability",
        question: "What do you think is Nepal's biggest energy challenge?",
        type: "choice",
        options: [
            "High energy costs",
            "Electricity reliability",
            "Dependence on imported fuel",
            "Lack of renewable-energy infrastructure",
            "Lack of public awareness",
            "High initial investment",
            "Government policy",
            "Other"
        ]
    },


    // -----------------------------------------
    // SECTION 4 — ECONOMICS
    // -----------------------------------------

    {
        section: "Economics of Renewable Energy",
        question: "What do you think is the biggest financial barrier to adopting renewable energy?",
        type: "choice",
        options: [
            "High initial installation cost",
            "Maintenance cost",
            "Lack of financing / loans",
            "Uncertainty about savings",
            "Lack of information",
            "Renewable systems are already affordable",
            "Other"
        ]
    },

    {
        section: "Economics of Renewable Energy",
        question: "Suppose installing a solar system costs NPR 2,00,000 today but could significantly reduce electricity expenses over several years. Would you consider installing it?",
        type: "choice",
        options: [
            "Definitely yes",
            "Probably yes",
            "Maybe",
            "Probably no",
            "Definitely no"
        ]
    },

    // {
    //     section: "Economics of Renewable Energy",
    //     question: "Which factor would influence your decision to purchase a renewable-energy system the MOST?",
    //     type: "choice",
    //     options: [
    //         "Lower electricity bills",
    //         "Lower purchase / installation cost",
    //         "Government subsidy",
    //         "Environmental benefits",
    //         "Reliability",
    //         "Long-term savings",
    //         "Recommendation from friends / family"
    //     ]
    // },

    {
        section: "Economics of Renewable Energy",
        question: "If a renewable-energy system costs more initially but saves money over the long term, which would you prefer?",
        type: "choice",
        options: [
            "Pay more now and save later",
            "Pay less now even if long-term savings are lower",
            "Depends on the exact amount of savings",
            "I would not choose renewable energy"
        ]
    },

    // {
    //     section: "Economics of Renewable Energy",
    //     question: "How much additional money would you be willing to pay for an energy solution that is environmentally friendly and provides long-term savings?",
    //     type: "choice",
    //     options: [
    //         "Nothing extra",
    //         "Up to 5%",
    //         "5–10%",
    //         "10–20%",
    //         "More than 20%",
    //         "Depends on the expected savings"
    //     ]
    // },

    {
        section: "Economics of Renewable Energy",
        question: "If the government provided a 20% subsidy for installing solar panels, how likely would you be to consider installing them?",
        type: "scale",
        options: [
            "1 — Very unlikely",
            "2",
            "3 — Maybe",
            "4",
            "5 — Very likely"
        ]
    },

    {
        section: "Economics of Renewable Energy",
        question: "Which payment option would make renewable energy easiest for your household to adopt?",
        type: "choice",
        options: [
            "One-time payment",
            "Monthly installment",
            "Bank loan",
            "Government subsidy",
            "Pay-as-you-save model",
            "Not interested in adopting renewable energy"
        ]
    },


    // -----------------------------------------
    // SECTION 5 — FUTURE
    // -----------------------------------------

    {
        section: "Nepal's Energy Future",
        question: "Do you think renewable energy will become the dominant source of energy in Nepal within the next 20 years?",
        type: "choice",
        options: [
            "Definitely yes",
            "Probably yes",
            "Not sure",
            "Probably no",
            "Definitely no"
        ]
    },

    {
        section: "Nepal's Energy Future",
        question: "Would you personally consider switching to a renewable-energy solution if it became economically affordable?",
        type: "choice",
        options: [
            "Yes, definitely",
            "Probably",
            "Maybe",
            "Probably not",
            "No"
        ]
    },

    {
        section: "Nepal's Energy Future",
        question: "What should the Nepalese government prioritize to increase renewable-energy adoption?",
        type: "multiple",
        options: [
            "Subsidies",
            "Low-interest loans",
            "Tax benefits",
            "Public awareness",
            "Better infrastructure",
            "Research and development",
            "Renewable-energy education",
            "Private-sector investment",
            "Other"
        ]
    },

    // {
    //     section: "Nepal's Energy Future",
    //     question: "How strongly do you agree with this statement: 'Renewable energy is not only an environmental solution but also an economic opportunity for Nepal.'",
    //     type: "scale",
    //     options: [
    //         "1 — Strongly disagree",
    //         "2",
    //         "3 — Neutral",
    //         "4",
    //         "5 — Strongly agree"
    //     ]
    // },


    // -----------------------------------------
    // SECTION 6 — MIND GAME QUESTIONS
    // -----------------------------------------

    {
        section: "Energy Investment Challenge",
        question: "You have NPR 1,00,000 available for an energy-related investment. Which option would you choose?",
        type: "choice",
        options: [
            "🏦 Keep the money in savings",
            "☀️ Invest in a small solar system",
            "🚗 Invest in an EV-related solution",
            "🏠 Improve energy efficiency at home",
            "💼 Invest in another business",
            "🤔 I would need more information"
        ]
    },

    {
        section: "Energy Investment Challenge",
        question: "You have two options: A) Pay NPR 5,000 today and save NPR 500 every month. B) Pay nothing today but continue paying NPR 700 every month. Which would you choose?",
        type: "choice",
        options: [
            "Option A",
            "Option B",
            "It depends on how long I will use it",
            "I need more information"
        ]
    },


    // -----------------------------------------
    // SECTION 7 — PERSONAL / OPTIONAL
    // -----------------------------------------

    {
        section: "Stay Connected",
        question: "What topics are you personally interested in?",
        type: "multiple",
        optional: true,
        options: [
            "💻 Technology & AI",
            "📈 Business & Entrepreneurship",
            "📊 Finance & Investment",
            "🌱 Environment & Sustainability",
            "⚡ Renewable Energy",
            "🚀 Startups",
            "🎓 Education & Career",
            "💻 Programming",
            "🏋️ Fitness & Lifestyle",
            "🎥 Content Creation",
            "✈️ Travel",
            "Other"
        ]
    },

    {
        section: "Stay Connected",
        question: "Would you be interested in staying connected for future discussions, surveys, projects, or opportunities?",
        type: "choice",
        optional: true,
        options: [
            "Yes 👍",
            "Maybe",
            "No, thank you"
        ]
    },

    {
        section: "Stay Connected",
        question: "If you would like to stay connected, you may provide your WhatsApp number.",
        type: "text",
        optional: true
    },

    {
        section: "Stay Connected",
        question: "Anything else you'd like to share about Nepal's energy future?",
        type: "textarea",
        optional: true
    }
];


/* =========================================================
   2. APPLICATION STATE
========================================================= */

let currentQuestion = 0;

/*
   Stores answers.

   Example:

   answers = {
       0: "18–22",
       1: "Male",
       2: "Lumbini"
   }
*/
const answers = {};


/* =========================================================
   3. GET HTML ELEMENTS
========================================================= */

const welcomeScreen =
    document.getElementById("welcome-screen");

const questionScreen =
    document.getElementById("question-screen");

const thankYouScreen =
    document.getElementById("thank-you-screen");

const startButton =
    document.getElementById("start-btn");

const nextButton =
    document.getElementById("next-btn");

const backButton =
    document.getElementById("back-btn");

const restartButton =
    document.getElementById("restart-btn");

const sectionName =
    document.getElementById("section-name");

const questionCounter =
    document.getElementById("question-counter");

const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question-text");

const optionsContainer =
    document.getElementById("options-container");

const progressFill =
    document.getElementById("progress-fill");


/* =========================================================
   4. START SURVEY
========================================================= */

startButton.addEventListener("click", () => {

    currentQuestion = 0;

    showScreen(questionScreen);

    renderQuestion();

});


/* =========================================================
   5. SHOW SCREEN
========================================================= */

function showScreen(screenToShow) {

    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.remove("active");

    });

    screenToShow.classList.add("active");

}


/* =========================================================
   6. RENDER QUESTION
========================================================= */

function renderQuestion() {

    const question = questions[currentQuestion];

    const totalQuestions = questions.length;

    const questionPosition = currentQuestion + 1;


    /* -----------------------------------------
       QUESTION INFORMATION
    ----------------------------------------- */

    sectionName.textContent =
        question.section;

    questionCounter.textContent =
        `${questionPosition} / ${totalQuestions}`;

    questionNumber.textContent =
        `QUESTION ${String(questionPosition).padStart(2, "0")}`;

    questionText.textContent =
        question.question;


    /* -----------------------------------------
       PROGRESS BAR
    ----------------------------------------- */

    const progress =
        (questionPosition / totalQuestions) * 100;

    progressFill.style.width =
        `${progress}%`;


    /* -----------------------------------------
       CLEAR OLD OPTIONS
    ----------------------------------------- */

    optionsContainer.innerHTML = "";


    /* -----------------------------------------
       TEXT QUESTION
    ----------------------------------------- */

    if (
        question.type === "text" ||
        question.type === "textarea"
    ) {

        createTextInput(question);

    }


    /* -----------------------------------------
       CHOICE / MULTIPLE / SCALE
    ----------------------------------------- */

    else {

        question.options.forEach((option, index) => {

            createOption(
                option,
                index,
                question.type
            );

        });

    }


    /* -----------------------------------------
       BACK BUTTON
    ----------------------------------------- */

    if (currentQuestion === 0) {

        backButton.style.visibility =
            "hidden";

    } else {

        backButton.style.visibility =
            "visible";
    }


    /* -----------------------------------------
       NEXT BUTTON TEXT
    ----------------------------------------- */

    if (currentQuestion === totalQuestions - 1) {

        nextButton.innerHTML =
            `Submit <span>✓</span>`;

    } else {

        nextButton.innerHTML =
            `Next <span>→</span>`;

    }


    /* -----------------------------------------
       RESTORE PREVIOUS ANSWER
    ----------------------------------------- */

    restoreAnswer();

}


/* =========================================================
   7. CREATE OPTION
========================================================= */

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

        selectOption(
            option,
            optionText,
            type
        );

    });


    optionsContainer.appendChild(option);
}


/* =========================================================
   8. SELECT OPTION
========================================================= */

function selectOption(
    selectedOption,
    optionText,
    type
) {

    /* -----------------------------------------
       MULTIPLE CHOICE
    ----------------------------------------- */

    if (type === "multiple") {

        selectedOption.classList.toggle(
            "selected"
        );


        const selectedOptions =
            Array.from(
                optionsContainer.querySelectorAll(
                    ".option.selected"
                )
            ).map(option => {

                return option.querySelector(
                    "span:last-child"
                ).textContent;

            });


        answers[currentQuestion] =
            selectedOptions;


        return;
    }


    /* -----------------------------------------
       SINGLE CHOICE / SCALE
    ----------------------------------------- */

    optionsContainer
        .querySelectorAll(".option")
        .forEach(option => {

            option.classList.remove(
                "selected"
            );

        });


    selectedOption.classList.add(
        "selected"
    );


    answers[currentQuestion] =
        optionText;
}


/* =========================================================
   9. CREATE TEXT INPUT
========================================================= */

function createTextInput(question) {

    let input;


    /* -----------------------------------------
       LONG TEXT
    ----------------------------------------- */

    if (question.type === "textarea") {

        input = document.createElement("textarea");

        input.rows = 6;

        input.placeholder =
            "Write your thoughts here...";

    }


    /* -----------------------------------------
       SHORT TEXT
    ----------------------------------------- */

    else {

        input = document.createElement("input");

        input.type = "text";

        input.placeholder =
            "Enter your WhatsApp number...";

    }


    input.style.width = "100%";

    input.style.padding = "18px";

    input.style.borderRadius = "15px";

    input.style.border =
        "1.5px solid #e5ebe7";

    input.style.fontFamily =
        "Inter, sans-serif";

    input.style.fontSize =
        "15px";

    input.style.outline =
        "none";

    input.style.resize =
        "vertical";


    input.addEventListener("input", () => {

        answers[currentQuestion] =
            input.value;

    });


    optionsContainer.appendChild(input);
}


/* =========================================================
   10. RESTORE ANSWER
========================================================= */

function restoreAnswer() {

    const savedAnswer =
        answers[currentQuestion];


    if (
        savedAnswer === undefined ||
        savedAnswer === ""
    ) {

        return;

    }


    /* -----------------------------------------
       TEXT ANSWER
    ----------------------------------------- */

    if (
        typeof savedAnswer === "string" &&
        (
            questions[currentQuestion].type === "text" ||
            questions[currentQuestion].type === "textarea"
        )
    ) {

        const input =
            optionsContainer.querySelector(
                "input, textarea"
            );

        if (input) {

            input.value =
                savedAnswer;

        }

        return;
    }


    /* -----------------------------------------
       MULTIPLE ANSWER
    ----------------------------------------- */

    if (
        questions[currentQuestion].type ===
        "multiple"
    ) {

        const selectedOptions =
            optionsContainer.querySelectorAll(
                ".option"
            );


        selectedOptions.forEach(option => {

            const text =
                option.querySelector(
                    "span:last-child"
                ).textContent;


            if (
                Array.isArray(savedAnswer) &&
                savedAnswer.includes(text)
            ) {

                option.classList.add(
                    "selected"
                );

            }

        });

        return;
    }


    /* -----------------------------------------
       SINGLE ANSWER
    ----------------------------------------- */

    optionsContainer
        .querySelectorAll(".option")
        .forEach(option => {

            const text =
                option.querySelector(
                    "span:last-child"
                ).textContent;


            if (text === savedAnswer) {

                option.classList.add(
                    "selected"
                );

            }

        });
}


/* =========================================================
   11. NEXT BUTTON
========================================================= */

nextButton.addEventListener("click", () => {

    const question =
        questions[currentQuestion];

    const answer =
        answers[currentQuestion];


    /* -----------------------------------------
       VALIDATION
    ----------------------------------------- */

    if (
        !question.optional &&
        (
            answer === undefined ||
            answer === "" ||
            (
                Array.isArray(answer) &&
                answer.length === 0
            )
        )
    ) {

        showValidationMessage();

        return;
    }


    /* -----------------------------------------
       LAST QUESTION
    ----------------------------------------- */

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        submitSurvey();

        return;
    }


    /* -----------------------------------------
       NEXT QUESTION
    ----------------------------------------- */

    currentQuestion++;

    renderQuestion();

});


/* =========================================================
   12. BACK BUTTON
========================================================= */

backButton.addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();

    }

});


/* =========================================================
   13. VALIDATION MESSAGE
========================================================= */

function showValidationMessage() {

    const originalText =
        nextButton.innerHTML;


    nextButton.innerHTML =
        "Please answer first";


    nextButton.style.background =
        "#dc2626";


    setTimeout(() => {

        nextButton.innerHTML =
            originalText;

        nextButton.style.background =
            "";

    }, 1200);

}


/* =========================================================
   14. SUBMIT SURVEY
========================================================= */


async function submitSurvey() {

    const responseData =
        prepareResponseData();


    /*
     * IMPORTANT:
     * Replace the URL below with YOUR
     * Google Apps Script Web App URL.
     */

    const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzbkQAh7-EFLuIJEJs2bUBu60YS4TSI2KZgqJzPLQRNGDMlRpjUEp_0rXG_kusT_g/exec";


    /* -----------------------------------------
       Disable button while submitting
    ----------------------------------------- */
 nextButton.disabled = true;

    nextButton.innerHTML =
        "Submitting...";


    try {

        /* -----------------------------------------
           SEND DATA TO GOOGLE APPS SCRIPT
        ----------------------------------------- */

        await fetch(
            GOOGLE_SCRIPT_URL,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "text/plain;charset=utf-8"
                },

                body: JSON.stringify(
                    responseData
                )
            }
        );


        /* -----------------------------------------
           SUCCESS
        ----------------------------------------- */

        console.log(
            "Survey submitted successfully!"
        );

        console.log(
            responseData
        );


        showScreen(
            thankYouScreen
        );


    } catch (error) {

        /* -----------------------------------------
           ERROR
        ----------------------------------------- */

        console.error(
            "Submission error:",
            error
        );


        alert(
            "Something went wrong while submitting your response. Please try again."
        );


        nextButton.disabled = false;

        nextButton.innerHTML =
            "Submit <span>✓</span>";

    }

}



/* =========================================================
   15. PREPARE RESPONSE DATA
========================================================= */

function prepareResponseData() {

    const response = {

        timestamp:
            new Date().toISOString()

    };


    questions.forEach(
        (question, index) => {

            response[
                `Q${index + 1}`
            ] =
                answers[index] ?? "";

        }
    );


    return response;
}


/* =========================================================
   16. RESTART SURVEY
========================================================= */

restartButton.addEventListener(
    "click",
    () => {

        currentQuestion = 0;


        /* Clear all answers */

        Object.keys(answers)
            .forEach(key => {

                delete answers[key];

            });


        showScreen(welcomeScreen);

    }
);


/* =========================================================
   17. PREVENT ACCIDENTAL PAGE REFRESH
========================================================= */

window.addEventListener(
    "beforeunload",
    (event) => {

        /*
           We don't force a warning because this
           survey is short and user-friendly.
        */

    }
);

