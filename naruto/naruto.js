const naruto = document.getElementById("naruto");
const baka = document.getElementById("baka");
let score = document.getElementById("score");

//declaring variable for score
let interval = null;
let playerScore = 0;


//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (naruto.classList != "jump") {
    naruto.classList.add("jump")
    }
    setTimeout(function() {
        naruto.classList.remove("jump")
    }, 300)
    let playerScore = 0;
    interval = setInterval(scoreCounter, 200);
}
let isAlive = setInterval( function() {
    let narutoTop = parseInt(window.getComputedStyle(naruto).getPropertyValue("top"));
    let bakaLeft = parseInt(window.getComputedStyle(baka).getPropertyValue("left"));

    if (bakaLeft < 50 && bakaLeft >0 && narutoTop >= 140) {
        alert("gameover!!")
        playerScore = 0;
    }
}, 10)
