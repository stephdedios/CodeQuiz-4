var scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) || [];
var printScore = document.querySelector("#printScore");
var clearScore = document.querySelector("#clearScore");

// LOADS SCRORE BOARD
window.addEventListener("load", function () {
  showHighScores();
});

// FUNCTION TO DISPLAY HIGH SCORES
function showHighScores() {
  scoreBoard = scoresSorted(scoreBoard, "score");

  for (var i = 0; i < scoreBoard.length; i++) {
    console.log(scoreBoard[i].score);
    var list = document.createElement("li"); //creates new p
    var words = document.createTextNode(
      scoreBoard[i].userName + ": " + scoreBoard[i].score
    );
    list.appendChild(words);
    printScore.appendChild(list);
  }
}

// USED TO SORT SCORES
function scoresSorted(array, key) {
  return array.sort(function (a, b) {
    if (a.score < b.score) {
      return 1;
    }
    return -1;
  });
}

// CLEARS ALL SCORES
clearScore.addEventListener("click", function () {
  localStorage.removeItem("scoreBoard");
  window.location.reload();
});
