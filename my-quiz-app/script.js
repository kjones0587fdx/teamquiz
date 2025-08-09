const questions = [
    {
        question: "Which IT team is responsible for the 'SAD' and 'PSD' applications?",
        answerOptions: [
            { text: "A-Team", rationale: "The A-Team is responsible for both the Service Area Design (SAD) and Planned Sort Date (PSD) applications.", isCorrect: true },
            { text: "Cargo Commandos", rationale: "Cargo Commandos handle the Recipient Portal and related applications.", isCorrect: false },
            { text: "Delivery Dragons", rationale: "Delivery Dragons are responsible for WAMT and DSW.", isCorrect: false },
            { text: "Cross the Streams", rationale: "Cross the Streams handles DDS and EDD.", isCorrect: false }
        ]
    },
    {
        question: "The 'FRO - FedEx Route Optimization' application is the responsibility of which team?",
        answerOptions: [
            { text: "Scrumbags", rationale: "Scrumbags are responsible for the FLM Manifest and PTD.", isCorrect: false },
            { text: "Managed Services", rationale: "Managed Services handles applications like VAS/VAS UI.", isCorrect: false },
            { text: "RouteSmart", rationale: "RouteSmart is the team responsible for the FRO (FedEx Route Optimization) application.", isCorrect: true },
            { text: "FORGE", rationale: "FORGE is responsible for applications such as Manifest Preview and Telescope.", isCorrect: false }
        ]
    },
    {
        question: "What is the primary application for the Edgelords IT team?",
        answerOptions: [
            { text: "WAP", rationale: "WAP is an application managed by the Edgelords team.", isCorrect: true },
            { text: "DDS", rationale: "DDS is managed by the Cross the Streams team.", isCorrect: false },
            { text: "SAD", rationale: "SAD is managed by the A-Team.", isCorrect: false },
            { text: "FLM Utilities", rationale: "FLM Utilities is managed by the Cargo Commandos team.", isCorrect: false }
        ]
    },
    {
        question: "Which of the following applications is managed by the Cross the Streams IT team?",
        answerOptions: [
            { text: "Active Package", rationale: "Active Package is managed by the '404: Address Not Found' team.", isCorrect: false },
            { text: "SCS", rationale: "SCS (Shipment Calendar Service) is a key application for the Cross the Streams team.", isCorrect: true },
            { text: "EOFPL", rationale: "EOFPL is managed by the Edgelords team.", isCorrect: false },
            { text: "VDS", rationale: "VDS (Vision Data Store) is managed by the '404: Address Not Found' team.", isCorrect: false }
        ]
    },
    {
        question: "The Null Pointers team is responsible for which application?",
        answerOptions: [
            { text: "EOSR", rationale: "The Null Pointers team is responsible for the EOSR application.", isCorrect: true },
            { text: "TBT-SORT", rationale: "TBT-SORT is handled by the Runs with Scissors team.", isCorrect: false },
            { text: "SEFS 1.0", rationale: "SEFS 1.0 is handled by the Made to Code team.", isCorrect: false },
            { text: "Shrug", rationale: "Shrug is the name of a team, not an application they are responsible for.", isCorrect: false }
        ]
    },
    {
        question: "What application is managed by the `No Comment` IT team?",
        answerOptions: [
            { text: "FMA", rationale: "FMA is managed by the Shipyard team.", isCorrect: false },
            { text: "eYMS", rationale: "The No Comment team is responsible for the eYMS application.", isCorrect: true },
            { text: "DMT", rationale: "DMT is managed by the Elite Squadron team.", isCorrect: false },
            { text: "MIView", rationale: "MIView is managed by the EIT team.", isCorrect: false }
        ]
    },
    {
        question: "If multiple stations report packages are missing from driver manifests, the bridge call may include which of the following teams?",
        answerOptions: [
            { text: "A-Team and Cargo Commandos", rationale: "A-Team is for PSD issues, and Cargo Commandos handle the Recipient Portal.", isCorrect: false },
            { text: "Shipyard and No Comment", rationale: "Shipyard handles USSC issues, and No Comment handles eYMS.", isCorrect: false },
            { text: "PLA, Team 404, and FORGE", rationale: "For manifest issues, the TSS Lead may request the on-calls for PLA, Team 404, and FORGE.", isCorrect: true },
            { text: "Made to Code and The Commoners", rationale: "These teams are responsible for SEFS 1.0 and CLS, respectively.", isCorrect: false }
        ]
    },
    {
        question: "The 'DDS' and 'EDD' applications are managed by which team?",
        answerOptions: [
            { text: "Cargo Commandos", rationale: "Cargo Commandos handle the Recipient Portal and RDB.", isCorrect: false },
            { text: "Cross the Streams", rationale: "The Cross the Streams team is responsible for the DDS (Delivery Determination Service) and EDD (Estimated Delivery Date) applications.", isCorrect: true },
            { text: "DnA", rationale: "DnA is responsible for EDD calculation, but Cross the Streams is the main team for the EDD application.", isCorrect: false },
            { text: "Mile Movers", rationale: "Mile Movers handle applications like Trip Adapter and Execute Conveyance.", isCorrect: false }
        ]
    },
    {
        question: "Which team is responsible for the 'Recipient Portal'?",
        answerOptions: [
            { text: "Delivery Dragons", rationale: "Delivery Dragons are responsible for WAMT and DSW.", isCorrect: false },
            { text: "Cargo Commandos", rationale: "Cargo Commandos is the team responsible for the Recipient Portal.", isCorrect: true },
            { text: "A-Team", rationale: "A-Team is responsible for SAD and PSD.", isCorrect: false },
            { text: "PLA", rationale: "PLA is responsible for Preload Assist.", isCorrect: false }
        ]
    },
    {
        question: "The 'DMT' (Dock Maintenance Tool) is the responsibility of which team?",
        answerOptions: [
            { text: "No Comment", rationale: "No Comment is responsible for eYMS.", isCorrect: false },
            { text: "Shipyard", rationale: "Shipyard is responsible for FMA and Door Manager.", isCorrect: false },
            { text: "Elite Squadron", rationale: "The Elite Squadron team is responsible for the DMT (Dock Maintenance Tool) application.", isCorrect: true },
            { text: "Made to Code", rationale: "Made to Code is responsible for SEFS 1.0, SAPI, and EONRO.", isCorrect: false }
        ]
    },
    {
        question: "Which team is responsible for issues pertaining to 'USSC' systems?",
        answerOptions: [
            { text: "No Comment", rationale: "No Comment handles eYMS issues.", isCorrect: false },
            { text: "Shipyard", rationale: "The Shipyard team is the point of contact for USSC system issues.", isCorrect: true },
            { text: "FORGE", rationale: "FORGE is responsible for applications like Manifest Preview and Telescope.", isCorrect: false },
            { text: "Runnin' on Dunkin'", rationale: "Runnin' on Dunkin' is responsible for the Vision Monitoring Application.", isCorrect: false }
        ]
    },
    {
        question: "The 'eYMS' application is managed by which of the following teams?",
        answerOptions: [
            { text: "Elite Squadron", rationale: "Elite Squadron is responsible for DMT.", isCorrect: false },
            { text: "Shipyard", rationale: "Shipyard is responsible for FMA and Door Manager.", isCorrect: false },
            { text: "No Comment", rationale: "The No Comment team is responsible for the eYMS application.", isCorrect: true },
            { text: "Runnin' on Dunkin'", rationale: "Runnin' on Dunkin' is responsible for the Vision Monitoring Application.", isCorrect: false }
        ]
    },
    {
        question: "Which of these applications is the responsibility of the 'Delivery Dragons' team?",
        answerOptions: [
            { text: "PLA - Preload Assist", rationale: "This is the responsibility of the PLA team.", isCorrect: false },
            { text: "DSW - Daily Service Worksheet", rationale: "The DSW application is managed by the Delivery Dragons team.", isCorrect: true },
            { text: "SAD - Service Area Design", rationale: "This is the responsibility of the A-Team.", isCorrect: false },
            { text: "RDB - Recipient Database", rationale: "This is the responsibility of the Cargo Commandos.", isCorrect: false }
        ]
    },
    {
        question: "What IT team is responsible for the 'VDS - Vision Data Store' application?",
        answerOptions: [
            { text: "Cargo Commandos", rationale: "Cargo Commandos manage the Recipient Portal and RDB.", isCorrect: false },
            { text: "Delivery Dragons", rationale: "Delivery Dragons manage WAMT and DSW.", isCorrect: false },
            { text: "Team 404", rationale: "Team 404 is responsible for the VDS (Vision Data Store) and Active Package applications.", isCorrect: true },
            { text: "A-Team", rationale: "A-Team is responsible for SAD and PSD.", isCorrect: false }
        ]
    },
    {
        question: "Which team is responsible for the 'FLM Manifest' and 'PTD' applications?",
        answerOptions: [
            { text: "FORGE", rationale: "FORGE is responsible for applications like Manifest Preview and PSP.", isCorrect: false },
            { text: "Scrumbags", rationale: "The Scrumbags team is responsible for the FLM Manifest and PTD (Prepare to Depart) applications.", isCorrect: true },
            { text: "Mile Movers", rationale: "Mile Movers handle applications like Trip Adapter and Execute Conveyance.", isCorrect: false },
            { text: "Null Pointers", rationale: "Null Pointers is responsible for the EOSR application.", isCorrect: false }
        ]
    },
    {
        question: "The 'PLA - Preload Assist' and 'Preload Active Flag Tool' applications are the responsibility of which team?",
        answerOptions: [
            { text: "Team 404", rationale: "Team 404 is responsible for Active Package and VDS.", isCorrect: false },
            { text: "Delivery Dragons", rationale: "Delivery Dragons are responsible for WAMT and DSW.", isCorrect: false },
            { text: "PLA", rationale: "The PLA team is responsible for the PLA - Preload Assist and Preload Active Flag Tool.", isCorrect: true },
            { text: "A-Team", rationale: "A-Team is responsible for SAD and PSD.", isCorrect: false }
        ]
    },
    {
        question: "Which team is responsible for the 'MIView' and 'Reservoir' applications?",
        answerOptions: [
            { text: "EIT", rationale: "The EIT team is responsible for MIView and Reservoir.", isCorrect: true },
            { text: "Cloud Dojo", rationale: "Cloud Dojo is responsible for Internal Cloud Environments.", isCorrect: false },
            { text: "DnA", rationale: "DnA is responsible for EDD Calculation.", isCorrect: false },
            { text: "Shrug", rationale: "Shrug is responsible for EOSRO and SSCSO.", isCorrect: false }
        ]
    },
    {
        question: "Which of these is an application managed by the 'FORGE' team?",
        answerOptions: [
            { text: "PULSAR", rationale: "PULSAR is an application managed by the FORGE team.", isCorrect: true },
            { text: "Trip Adapter", rationale: "Trip Adapter is managed by the Mile Movers team.", isCorrect: false },
            { text: "SAD", rationale: "SAD is managed by the A-Team.", isCorrect: false },
            { text: "CLS", rationale: "CLS is managed by The Commoners.", isCorrect: false }
        ]
    },
    {
        question: "The 'CRS' application is the responsibility of which team?",
        answerOptions: [
            { text: "Cargo Commandos", rationale: "Cargo Commandos handle the Recipient Portal and RDB.", isCorrect: false },
            { text: "The Commoners", rationale: "The Commoners are responsible for the CRS application.", isCorrect: true },
            { text: "Made to Code", rationale: "Made to Code is responsible for SEFS 1.0, SAPI, and EONRO.", isCorrect: false },
            { text: "Runs with Scissors", rationale: "Runs with Scissors is responsible for TBT-SORT and SHAP.", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is an application of the 'Mile Movers' team?",
        answerOptions: [
            { text: "PSD", rationale: "PSD is the responsibility of the A-Team.", isCorrect: false },
            { text: "Trip Adapter", rationale: "The Trip Adapter is a key application for the Mile Movers team.", isCorrect: true },
            { text: "eYMS", rationale: "eYMS is the responsibility of the No Comment team.", isCorrect: false },
            { text: "FLM Manifest", rationale: "FLM Manifest is the responsibility of the Scrumbags team.", isCorrect: false }
        ]
    },
    {
        question: "The 'Vision Monitoring Application' is the responsibility of which team?",
        answerOptions: [
            { text: "Runnin' on Dunkin'", rationale: "The Runnin' on Dunkin' team is responsible for the Vision Monitoring Application.", isCorrect: true },
            { text: "Made to Code", rationale: "Made to Code is responsible for SEFS 1.0, SAPI, and EONRO.", isCorrect: false },
            { text: "Null Pointers", rationale: "Null Pointers is responsible for the EOSR application.", isCorrect: false },
            { text: "Shrug", rationale: "Shrug is responsible for EOSRO and SSCSO.", isCorrect: false }
        ]
    },
    {
        question: "Which team is responsible for the 'APS - Automated Pickup System'?",
        answerOptions: [
            { text: "A-Team", rationale: "A-Team is responsible for SAD and PSD.", isCorrect: false },
            { text: "PLA", rationale: "PLA is responsible for Preload Assist.", isCorrect: false },
            { text: "APS Team", rationale: "The APS Team is responsible for the APS (Automated Pickup System) and related applications.", isCorrect: true },
            { text: "Made to Code", rationale: "Made to Code is responsible for SEFS 1.0, SAPI, and EONRO.", isCorrect: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const rationaleText = document.getElementById('rationale-text');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    nextButton.classList.add('hide');
    feedbackContainer.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    currentQuestion.answerOptions.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.isCorrect) {
            button.dataset.isCorrect = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    feedbackContainer.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.isCorrect === 'true';

    // Disable all buttons
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        button.classList.add('disabled');
        const correspondingAnswer = questions[currentQuestionIndex].answerOptions.find(ans => ans.text === button.innerText);
        if (correspondingAnswer.isCorrect) {
            button.classList.add('correct');
        } else if (button === selectedButton) {
            button.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        score++;
        feedbackText.innerText = 'Correct! ✅';
    } else {
        feedbackText.innerText = 'Incorrect! ❌';
    }

    const rationale = questions[currentQuestionIndex].answerOptions.find(ans => ans.text === selectedButton.innerText).rationale;
    rationaleText.innerText = rationale;
    feedbackContainer.classList.remove('hide');
    nextButton.classList.remove('hide');
}

function showScore() {
    quizContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreText.innerText = `You scored ${score} out of ${questions.length}!`;
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    handleNextButton();
});

restartButton.addEventListener('click', () => {
    startQuiz();
});

startQuiz();