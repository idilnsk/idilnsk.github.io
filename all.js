function showAnswer() {
  const questionContainer = this.parentElement;

  //const answer = "This is the answer."; // Replace with the actual answer

  // Create the answer element
  const answerElement = document.createElement("div");
  answerElement.className = "answer-container";
  answerElement.textContent = answer;

  // Append the answer element after the button
  questionContainer.appendChild(answerElement);

  // Update the button text
  this.textContent = "Hide Answer";

  // Remove the onclick event to prevent creating duplicate answer elements
  this.removeEventListener("click", showAnswer);
}

const showAnswerButtons = document.getElementsByClassName("show-answer-button");
Array.from(showAnswerButtons).forEach((button) => {
  button.addEventListener("click", function () {
    const questionContainer = this.parentElement;
    const answerContainer =
      questionContainer.querySelector(".answer-container");

    if (answerContainer.style.display === "none") {
      answerContainer.style.display = "block";
      this.textContent = "Hide Answer";
    } else {
      answerContainer.style.display = "none";
      this.textContent = "Show Answer";
    }
  });
});

const question1Answer = "answer to question 1";
const question2Answer = "answer to question 2";
const question3Answer = "answer to question 3";
const question4Answer = "answer to question 4";

const question1Button = document.getElementById("question1Button");
question1Button?.addEventListener("click", function () {
  showAnswer.call(this, question1Answer);
});
const question2Button = document.getElementById("question2Button");
question2Button?.addEventListener("click", function () {
  showAnswer.call(this, question2Answer);
});
const question3Button = document.getElementById("question3Button");
question3Button?.addEventListener("click", function () {
  showAnswer.call(this, question3Answer);
});
const question4Button = document.getElementById("question4Button");
question4Button?.addEventListener("click", function () {
  showAnswer.call(this, question4Answer);
});

//----- form -------

const form = document.querySelector('[data-js="form"]');
const questionList = document.getElementById("questionList");

function addNewQuestion(question, answer, tags) {
  const newQuestion = document.createElement("div");
  newQuestion.classList.add("question");

  const questionText = document.createElement("p");
  questionText.textContent = `Question:${question}`;
  newQuestion.appendChild(questionText);

  const answerText = document.createElement("p");
  answerText.textContent = `answer:${answer}`;
  newQuestion.appendChild(answerText);

  const tagsText = document.createElement("p");
  tagsText.textContent = `Tags:${tags}`;
  newQuestion.appendChild(tagsText);

  questionList.appendChild(newQuestion);
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const question = document.getElementById("yourQuestion").value;
  const answer = document.getElementById("yourAnswer").value;
  const tags = document.getElementById("nTag").value;

  addNewQuestion(question, answer, tags);

  form.reset();
});

const yourQuestion = document.getElementById("yourQuestion");
const questionCounter = document.getElementById("questionCounter");

const yourAnswer = document.getElementById("yourAnswer");
const answerCounter = document.getElementById("answerCounter");

function updateCharacterCount(text, counter) {
  const remainingCharacters = text.maxLength - text.value.length;
  counter.textContent = `${remainingCharacters} characters remaining`;
}

yourQuestion?.addEventListener("input", () => {
  updateCharacterCount(yourQuestion, questionCounter);
});
yourAnswer?.addEventListener("input", () => {
  updateCharacterCount(yourAnswer, answerCounter);
});
//------------form
/*
const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("submit");
  const formElements = e.target.elements;
  // console.log("formElements", formElements);
  const userQuestion = formElements.yourQuestion.value;
  // console.log(userQuestion)
  const userAnswer = formElements.yourAnswer.value;
  // console.log(userAnswer)
  const userTag = formElements.nTag.value;
  // console.log(userTag)
  const newSection = document.createElement("section");
  // newSection.classList.add("body","product");
  newMain.append(newSection);
  // test.append(newSection);
  newSection.innerHTML = `
    <div class="container">
    <p
      class="bookmark-tag"
      id="question1Bookmark"
      onclick="toggleBookmarkColor(this)"
    ></p>
    <p class="question">${userQuestion}</p>
    <button
      class="show-answer-button"
      button
      id="question1Button"
      onclick="toggleAnswer(this)"
    >
      Show Answer
    </button>
    <div class="answer-container" style="display: none">
      <p class="answer-text">${userAnswer}</p>
    </div>
    <ul class="tags">
      <p>${userTag}</p>
    </ul>
  </div>`;
});

let text = document.getElementById("userQuestion");
let text_2 = document.getElementById("userAnswer");
text.addEventListener("input", (evt) => {
  characterCounter(evt.target.value);
});
// text_2.addEventListener("input",(evt) => {
//     characterCounter(evt.target.value)
// })
function characterCounter(x) {
  let b = 150 - x.length;
  let counterBox;
  if (x === text) {
    counterBox = document.querySelector("p");
  } else {
    counterBox = document.getElementById("text_2");
  }
  counterBox.textContent = `${b} characters left`;

  if (counterBox.textContent == `${b} characters left`) {
    //     counterBox.textContent ==``;
    // }else{
    // counterBox.textContent = `${b} character left`;
  }
  return counterBox;
}
*/
//------------------
function toggleBookmarkColor(element) {
  element.classList.toggle("bookmarked");
}

const bodyElement = document.body;
const mainSection = document.getElementById("mainSection");
const toggleMode = document.getElementById("darkModeToggle");
if (toggleMode) {
  toggleMode.addEventListener("click", () => {
    console.log("You switched modes");
    bodyElement.classList.toggle("dark-mode");
    mainSection.classList.toggle("dark-mode");
  });
}
