// test.js

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to randomize questions and answers
function randomizeQuestionsAndAnswers(questions) {
    // Shuffle the order of questions
    shuffleArray(questions);

    // Shuffle the order of answers for each question
    questions.forEach(question => {
        const answers = question.answers;
        shuffleArray(answers);
    });

    return questions;
}

// Example usage
const questions = [
    { question: 'Question 1', answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D'] },
    { question: 'Question 2', answers: ['Option X', 'Option Y', 'Option Z'] },
    // Add more questions as needed
];

const randomizedQuestions = randomizeQuestionsAndAnswers(questions);

console.log(randomizedQuestions);