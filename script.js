const section1Questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1 },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], correct: 2 },
    { question: "What color is the sky?", options: ["Blue", "Green", "Red", "Yellow"], correct: 0 },
    { question: "Which is a programming language?", options: ["HTML", "CSS", "JavaScript", "JPEG"], correct: 2 },
    { question: "How many days in a week?", options: ["5", "6", "7", "8"], correct: 2 },
  ];
  
  const section2Questions = [
    { question: "What is 3 * 3?", options: ["6", "9", "12", "15"], correct: 1 },
    { question: "Which is not a planet?", options: ["Mars", "Venus", "Sun", "Earth"], correct: 2 },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], correct: 1 },
    { question: "Which is a mammal?", options: ["Shark", "Whale", "Snake", "Fish"], correct: 1 },
    { question: "Which is a search engine?", options: ["Google", "YouTube", "Wikipedia", "Gmail"], correct: 0 },
  ];
  
  let selectedQuestions = [];
  
  document.getElementById("section1").addEventListener("click", () => {
    selectedQuestions = section1Questions;
    startQuiz();
  });
  
  document.getElementById("section2").addEventListener("click", () => {
    selectedQuestions = section2Questions;
    startQuiz();
  });
  
  function startQuiz() {
    document.querySelector(".section-choice").classList.add("hidden");
    const quizSection = document.getElementById("quiz-section");
    quizSection.classList.remove("hidden");
    const quizQuestionsDiv = document.getElementById("quiz-questions");
  
    quizQuestionsDiv.innerHTML = selectedQuestions.map((q, index) => `
      <div class="question">
        <p>${q.question}</p>
        ${q.options.map((option, i) => `
          <label>
            <input type="radio" name="question${index}" value="${i}"> ${option}
          </label>
        `).join('')}
      </div>
    `).join('');
  }
  
  document.getElementById("quiz-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const userAnswers = Array.from(document.querySelectorAll("input[type=radio]:checked")).map(input => parseInt(input.value));
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = '';
  
    let correctCount = 0;
    selectedQuestions.forEach((q, index) => {
      if (userAnswers[index] === q.correct) {
        correctCount++;
      } else {
        resultDiv.innerHTML += `<p class="feedback">Question ${index + 1}: Incorrect. Correct answer is: ${q.options[q.correct]}</p>`;
      }
    });
  
    resultDiv.innerHTML += `<p>You scored ${correctCount} out of ${selectedQuestions.length}.</p>`;
    resultDiv.classList.remove("hidden");
  });
  