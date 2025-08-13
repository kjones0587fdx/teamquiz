# CSS Help Desk Knowledge Quiz

This project is a self-contained, single-page web application designed to test knowledge of CSS (Customer Support Services) help desk operations. It includes questions about IT teams, their responsible applications, and situational troubleshooting scenarios.

## Features

*   **Multiple Quiz Modes**: Choose from three different quiz modes:
    *   **Teams & Apps**: Focuses on questions about IT team responsibilities and the applications they manage.
    *   **Situational**: Presents real-world scenarios to test troubleshooting and problem-solving skills.
    *   **Combo Quiz**: A mix of questions from both categories.
*   **Timed Quizzes**: Each quiz is timed, encouraging quick and accurate responses.
*   **Score Tracking**: Keep track of your correct and incorrect answers as you go through the quiz.
*   **Final Score and Review**: At the end of the quiz, you'll see your final score and have the option to review all the questions, your answers, and the correct rationales.
*   **Copy Score**: Easily copy your score to the clipboard to share your results.
*   **Responsive Design**: The quiz is designed to work on various screen sizes, from desktops to mobile devices.

## How to Use

To use the quiz, simply open the `index.html` file in any modern web browser. No internet connection is required after the initial page load.

1.  Clone or download this repository.
2.  Navigate to the project directory.
3.  Open `index.html` in your preferred web browser (e.g., Chrome, Firefox, Edge).

## Project Structure

The project is now organized into separate files for better maintainability:

*   `index.html`: The main HTML file for the structure of the quiz.
*   `css/style.css`: Contains all the custom styles for the application.
*   `js/questions.js`: Stores all the quiz questions and answers. **This is the file to edit if you want to add or change questions.**
*   `js/script.js`: Holds the core JavaScript logic for the quiz functionality.

## Technologies Used

*   **HTML**: The structure of the quiz.
*   **Tailwind CSS**: For modern and responsive styling.
*   **Vanilla JavaScript**: For all the quiz logic, including question handling, scoring, and timers.

## Contributing

Contributions are welcome! If you want to add more questions or improve the quiz, you can do so by following these steps:

1.  Open the `js/questions.js` file in a text editor.
2.  You will find two JavaScript arrays: `teamAppQuestions` and `situationalQuestions`.
3.  To add a new question, add a new object to the appropriate array. Follow the existing format:

```javascript
{
  question: "Your question text here?",
  answerOptions: [
    { text: "Answer option 1", rationale: "Rationale for this answer.", isCorrect: true },
    { text: "Answer option 2", rationale: "Rationale for this answer.", isCorrect: false },
    // Add more options as needed
  ]
}
```

*   `question`: The question you want to ask.
*   `answerOptions`: An array of possible answers.
    *   `text`: The answer text to be displayed on the button.
    *   `rationale`: An explanation of why the answer is correct or incorrect. This is shown after the user answers.
    *   `isCorrect`: A boolean value (`true` or `false`) indicating if this is a correct answer.

4.  Save the file, and your new question will be included in the quiz.
