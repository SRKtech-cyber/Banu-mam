document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const questions = [
        {
            lesson: "What is the value of sin 30°?",
            options: ["1/2", "1", "√3/2"],
            answer: "1/2"
        },
        {
            lesson: "Which of the following is a property of similar triangles?",
            options: ["Their corresponding angles are equal.", "Their areas are equal.", "Their perimeters are equal."],
            answer: "Their corresponding angles are equal."
        },
        {
            lesson: "What is the sum of the interior angles of a triangle?",
            options: ["180°", "90°", "120°"],
            answer: "180°"
        }
    ];

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text">${q.lesson}</p>
            ${q.options.map(option => `
                <button onclick="checkAnswer('${q.answer}', '${option}')">${option}</button>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
});

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        alert('Correct! Well done.');
    } else {
        alert('Try again!');
    }
}
