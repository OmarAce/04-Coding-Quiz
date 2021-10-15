// High Scores Javascript

// Variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Clear Scores
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " - Points: " + allScores[i].score;
        scores.appendChild(createLi);

    }
}
// Move Back to Quiz
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});