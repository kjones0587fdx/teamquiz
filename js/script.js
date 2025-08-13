 // --- TAILWIND UTILITY CLASSES FOR JS ---
        const answerBtnClasses = "btn bg-slate-700 border-2 border-slate-600 rounded-lg p-4 text-left w-full font-medium hover:bg-slate-600 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
        const actionBtnClasses = "action-btn bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-800";
        const secondaryBtnClasses = "secondary-btn bg-slate-600 text-slate-100 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-slate-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-800";

//--- SCRIPT LOGIC ---
        const DEFAULT_QUIZ_SIZE = 20;
        let currentQuizSize = DEFAULT_QUIZ_SIZE;

        let selectedQuestions = [];
        let userAnswers = [];
        let currentQuestionIndex = 0;
        let correctCount = 0;
        let incorrectCount = 0;
        let quizStartTime;
        let quizTimeInterval;

        const startScreen = document.getElementById('start-screen');
        const quizContainer = document.getElementById('quiz-container');
        const resultContainer = document.getElementById('result-container');
        
        const questionCounterElement = document.getElementById('question-counter');
        const correctCountElement = document.getElementById('correct-count');
        const incorrectCountElement = document.getElementById('incorrect-count');
        const timerElement = document.getElementById('timer');
        
        const questionElement = document.getElementById('question');
        const answerButtonsElement = document.getElementById('answer-buttons');
        const nextButton = document.getElementById('next-btn');
        const feedbackContainer = document.getElementById('feedback-container');
        const feedbackText = document.getElementById('feedback-text');
        const rationaleText = document.getElementById('rationale-text');
        const restartQuizInProgressBtn = document.getElementById('restart-quiz-in-progress-btn');
        
        const finalScoreText = document.getElementById('final-score-text');
        const finalTimeText = document.getElementById('final-time-text');
        const reviewQuestionsButton = document.getElementById('review-questions-btn');
        const reviewListContainer = document.getElementById('review-list-container');
        const reviewList = document.getElementById('review-list');
        const shareButton = document.getElementById('share-btn');
        const toastNotification = document.getElementById('toast-notification');
        
        const startTeamsBtn = document.getElementById('start-teams-btn');
        const startSituationalBtn = document.getElementById('start-situational-btn');
        const startComboBtn = document.getElementById('start-combo-btn');
        const restartButton = document.getElementById('restart-btn');

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        
        function startTimer() {
            quizStartTime = Date.now();
            quizTimeInterval = setInterval(() => {
                const elapsedTime = Date.now() - quizStartTime;
                const minutes = Math.floor(elapsedTime / (1000 * 60));
                const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
                timerElement.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }, 1000);
        }

        function stopTimer() {
            clearInterval(quizTimeInterval);
            const elapsedTime = Date.now() - quizStartTime;
            const minutes = Math.floor(elapsedTime / (1000 * 60));
            const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
            return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        
        function initializeQuiz(quizType) {
            let questionPool = [];
            if (quizType === 'teams') {
                questionPool = teamAppQuestions;
            } else if (quizType === 'situational') {
                questionPool = situationalQuestions;
            } else {
                questionPool = [...teamAppQuestions, ...situationalQuestions];
            }
            
            currentQuizSize = Math.min(questionPool.length, DEFAULT_QUIZ_SIZE);
            
            shuffleArray(questionPool);
            selectedQuestions = questionPool.slice(0, currentQuizSize);
            
            userAnswers = [];
            currentQuestionIndex = 0;
            correctCount = 0;
            incorrectCount = 0;
            
            startScreen.classList.add('hidden');
            resultContainer.classList.add('hidden');
            quizContainer.classList.remove('hidden');
            nextButton.classList.add('hidden');
            feedbackContainer.classList.add('hidden');

            updateTracker();
            startTimer();
            showQuestion();
        }

        function showQuestion() {
            resetState();
            let currentQuestion = selectedQuestions[currentQuestionIndex];
            questionElement.innerText = currentQuestion.question;

            shuffleArray(currentQuestion.answerOptions);

            currentQuestion.answerOptions.forEach(answer => {
                const button = document.createElement('button');
                button.innerText = answer.text;
                button.className = answerBtnClasses;
                if (answer.isCorrect) {
                    button.dataset.isCorrect = true;
                }
                button.addEventListener('click', selectAnswer);
                answerButtonsElement.appendChild(button);
            });
        }
        
        function resetState() {
            nextButton.classList.add('hidden');
            feedbackContainer.classList.add('hidden');
            answerButtonsElement.innerHTML = '';
        }

        function selectAnswer(e) {
            const selectedButton = e.target;
            const isCorrect = selectedButton.dataset.isCorrect === 'true';

            // Safely get the clicked answer object and its rationale
            const userAnswerText = selectedButton.innerText;
            const clickedAnswerObject = selectedQuestions[currentQuestionIndex].answerOptions.find(ans => ans.text === userAnswerText);
            const rationale = clickedAnswerObject ? clickedAnswerObject.rationale : "No rationale available.";

            // Get all correct answers for the review
            const allCorrectAnswers = selectedQuestions[currentQuestionIndex].answerOptions.filter(ans => ans.isCorrect);
            const allCorrectAnswersText = allCorrectAnswers.map(ans => ans.text).join(' / ');

            userAnswers.push({
                question: selectedQuestions[currentQuestionIndex].question,
                userAnswer: userAnswerText,
                correctAnswer: allCorrectAnswersText, // Store all correct answers
                isCorrect: isCorrect,
                rationale: rationale
            });

            Array.from(answerButtonsElement.children).forEach(button => {
                button.disabled = true;
                if (button.dataset.isCorrect === 'true') {
                    button.classList.add('correct');
                } else if (button === selectedButton) {
                    button.classList.add('incorrect');
                }
            });

            if (isCorrect) {
                correctCount++;
                feedbackText.innerText = 'Correct! ✅';
                feedbackText.className = 'font-bold text-lg text-green-400';
            } else {
                incorrectCount++;
                feedbackText.innerText = 'Incorrect! ❌';
                 feedbackText.className = 'font-bold text-lg text-red-400';
            }
            updateTracker();

            rationaleText.innerText = `Rationale: ${rationale}`;
            feedbackContainer.classList.remove('hidden');
            nextButton.innerText = currentQuestionIndex === currentQuizSize - 1 ? 'Show Results' : 'Next';
            nextButton.classList.remove('hidden');
        }
        
        function updateTracker() {
            questionCounterElement.innerText = `Question ${currentQuestionIndex + 1} of ${currentQuizSize}`;
            correctCountElement.innerText = correctCount;
            incorrectCountElement.innerText = incorrectCount;
        }

        function showScore() {
            const finalTime = stopTimer();
            quizContainer.classList.add('hidden');
            resultContainer.classList.remove('hidden');
            finalScoreText.innerText = `You scored ${correctCount} out of ${currentQuizSize}!`;
            finalTimeText.innerText = `Total time: ${finalTime}`;
            reviewListContainer.classList.add('hidden');
            reviewQuestionsButton.innerText = "Review Questions";
            reviewList.innerHTML = '';
        }

        function handleNextButton() {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuizSize) {
                updateTracker();
                showQuestion();
            } else {
                showScore();
            }
        }
        
        function toggleReview() {
            if (reviewListContainer.classList.contains('hidden')) {
                reviewList.innerHTML = '';
                userAnswers.forEach((answer, index) => {
                    const listItem = document.createElement('li');
                    listItem.className = 'bg-slate-700/80 p-4 rounded-lg';
                    
                    const statusIcon = answer.isCorrect ? '✅' : '❌';
                    const statusClass = answer.isCorrect ? 'text-green-400' : 'text-red-400';
                    
                    listItem.innerHTML = `
                        <p class="font-bold text-slate-200">${index + 1}. ${answer.question}</p>
                        <p class="mt-2">Your Answer: <span class="font-semibold ${statusClass}">${statusIcon} ${answer.userAnswer}</span></p>
                        ${!answer.isCorrect ? `<p>Correct Answer(s): <span class="font-semibold text-green-400">✅ ${answer.correctAnswer}</span></p>` : ''}
                        <p class="mt-2 text-slate-400 text-sm"><em>Rationale: ${answer.rationale}</em></p>
                    `;
                    reviewList.appendChild(listItem);
                });
                reviewListContainer.classList.remove('hidden');
                reviewQuestionsButton.innerText = "Hide Review";
            } else {
                reviewListContainer.classList.add('hidden');
                reviewQuestionsButton.innerText = "Review Questions";
            }
        }
        
        function showToast() {
            toastNotification.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toastNotification.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        function shareScore() {
            const scoreText = `I just took the CSS Help Desk Knowledge Quiz and scored ${correctCount} out of ${currentQuizSize} in ${finalTimeText.innerText.replace('Total time: ', '')}!`;
            // Use the legacy 'execCommand' for compatibility within this environment
            const textArea = document.createElement("textarea");
            textArea.value = scoreText;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                showToast();
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }
            document.body.removeChild(textArea);
        }

        // --- ADD CSS CLASSES and EVENT LISTENERS ---
        document.querySelectorAll('.action-btn').forEach(btn => btn.className = actionBtnClasses);
        document.querySelectorAll('.secondary-btn').forEach(btn => btn.className = secondaryBtnClasses);

        startTeamsBtn.addEventListener('click', () => initializeQuiz('teams'));
        startSituationalBtn.addEventListener('click', () => initializeQuiz('situational'));
        startComboBtn.addEventListener('click', () => initializeQuiz('combo'));

        nextButton.addEventListener('click', handleNextButton);

        restartButton.addEventListener('click', () => {
            startScreen.classList.remove('hidden');
            resultContainer.classList.add('hidden');
        });
        
        restartQuizInProgressBtn.addEventListener('click', () => {
            stopTimer();
            startScreen.classList.remove('hidden');
            quizContainer.classList.add('hidden');
        });

        reviewQuestionsButton.addEventListener('click', toggleReview);
        shareButton.addEventListener('click', shareScore);
