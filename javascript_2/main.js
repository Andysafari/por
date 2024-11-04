alert("hello")   
// Define quiz data
const QUESTIONS = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    }
];
let currentQuestionIndex = 0;

// 1. Get Elements by ID, Class Name, and Tag Name
const title = document.getElementById("title"); // Get by ID
const description = document.getElementsByClassName("description")[0]; // Get by Class Name
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const buttons = document.getElementsByTagName("button"); // Get by Tag Name

// 2. Start Quiz function
startButton.onclick = function() {
    startQuiz();
};

// Function to start the quiz
function startQuiz() {
    // Update UI
    title.textContent = "Quiz Game: Answer the Questions!";
    description.textContent = "Good luck!";
    startButton.style.display = "none"; // Hide start button
    quizContainer.style.display = "block"; // Show quiz container
    
    // Create and set a custom attribute
    const startedAttribute = document.createAttribute("data-started");
    startedAttribute.value = "true";
    quizContainer.setAttributeNode(startedAttribute); // Attach the attribute

    // Apply additional styling via the DOM
    title.style.color = "navy";
    title.style.fontSize = "2em";
    buttons[0].style.backgroundColor = "lightgreen"; // Style using tag name access

    // Load the first question
    loadQuestion();
}

// Function to load a question
function loadQuestion() {
    // Get current question
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    // Clear previous answers
    answersContainer.innerHTML = "";
    
    // Display answers and add event listeners
    currentQuestion.answers.forEach(answer => {
        const answerElement = document.createElement("div");
        answerElement.classList.add("answer");
        answerElement.textContent = answer;
        
        // Add onclick event to each answer
        answerElement.onclick = function() {
            checkAnswer(answer);
        };
        
        // Append answer to container
        answersContainer.appendChild(answerElement);
    });
}

// Function to check answer
function checkAnswer(selectedAnswer) {
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    
    // Provide feedback
    if (selectedAnswer === currentQuestion.correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect! Try again.";
        feedback.style.color = "red";
    }
    
    // Move to next question after a delay
    setTimeout(() => {
        feedback.textContent = ""; // Clear feedback
        currentQuestionIndex++;
        
        if (currentQuestionIndex < QUESTIONS.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 2000); // Delay of 2 seconds
}

// Function to end the quiz
function endQuiz() {
    quizContainer.style.display = "none"; // Hide quiz
    title.textContent = "Quiz Completed!";
    description.textContent = "Thanks for playing!";
    startButton.style.display = "block"; // Show start button again to restart
    startButton.textContent = "Restart Quiz";
    currentQuestionIndex = 0; // Reset for potential restart
}
