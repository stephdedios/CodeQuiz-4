var startQuiz = document.querySelector(".startQuizBtn");
var optionBtn = document.querySelectorAll(".optionBtn");

var currentIndex = 0;
let score = 0;

startQuiz.addEventListener("click", function (quizTime) {
  quizTime.stopPropagation();
  //   startTimer();

  document.getElementById("greetingBox").style.display = "none";
  document.getElementById("activeQuizBox").style.display = "block";

  displayQuestions();
});

function displayQuestions() {
  var question = quizQuestions[currentIndex];

  document.querySelector("#question").innerHTML = question.question;
  document.querySelector("#optionA").innerHTML = question.options[0];
  document.querySelector("#optionB").innerHTML = question.options[1];
  document.querySelector("#optionC").innerHTML = question.options[2];
  document.querySelector("#optionD").innerHTML = question.options[3];
}

for (var i = 0; i < optionBtn.length; i++) {
  optionBtn[i].addEventListener("click", function userAnswer(quizTime) {
    quizTime.stopPropagation();

    if (quizTime.currentTarget === question[currentIndex].answer) {
      score++;
      console.log(score);
      document.querySelector("#verifyAnswer").innerHTML = "correct";
    } else {
      document.querySelector("#verifyAnswer").innerHTML = "wrong";
      secondsLeft = secondsLeft - 15;
    }
    currentIndex++;

    if (currentIndex < 5) {
      displayQuestions();
    }
  });
}
