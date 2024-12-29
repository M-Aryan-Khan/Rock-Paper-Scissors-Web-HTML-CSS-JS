let options = document.querySelectorAll(".imgTC");
let player = document.querySelector("#left img");
let robot = document.querySelector("#right img");
let playerScore = 0;
let robotScore = 0;
let pScore = document.getElementById("pScore");
let rScore = document.getElementById("rScore");
options.forEach(option => {
    option.addEventListener("click", () => {
        player.classList.add("shakePlayer");
        robot.classList.add("shakePlayer");
        setTimeout(() => {
            player.classList.remove("shakePlayer");
            robot.classList.remove("shakePlayer");
            let op = option.getAttribute("id");
            const choice = ["rock", "paper", "scissor"];
            let arrayNo = Math.floor(3 * Math.sin(Math.PI * Math.random() / 3));
            let computerChoice = choice[arrayNo];
            if (op === "imgTR") {
                player.src = "./images/rockP1.png";
                if (computerChoice === "paper") {
                    robotScore++;
                    addGlowRobo();
                }
                else if (computerChoice === "scissor") {
                    playerScore++;
                    addGlowPlayer()
                }
            }
            else if (op === "imgTP") {
                player.src = "./images/paperP1.png";
                if (computerChoice === "rock") {
                    playerScore++;
                    addGlowPlayer();
                }
                else if (computerChoice === "scissor") {
                    robotScore++;
                    addGlowRobo();
                }
            }
            else {
                player.src = "./images/scissorP1.png";
                if (computerChoice === "paper") {
                    playerScore++;
                    addGlowPlayer();
                }
                else if (computerChoice === "rock") {
                    robotScore++;
                    addGlowRobo();
                }
            }
            robot.src = "./images/" + computerChoice + "P2.png";
            pScore.innerText = playerScore;
            rScore.innerText = robotScore;
            if (playerScore === 3) {
                options.forEach(btn => btn.disabled = true);
                setTimeout(() => {
                    displayMessageAndRefresh("YOU WIN! :)", 3000, 1);
                }, 2500);
            }
            else if (robotScore === 3) {
                options.forEach(btn => btn.disabled = true);
                setTimeout(() => {
                    displayMessageAndRefresh("YOU LOSE! :(", 3000, 2);
                }, 2500);
            }
        }, 900);
    })
});
function addGlowPlayer() {
    var heading = document.getElementById("pScore");
    heading.classList.add("glow-effect");
    setTimeout(function () {
        heading.classList.remove("glow-effect");
    }, 1000);
}
function addGlowRobo() {
    var heading = document.getElementById("rScore");
    heading.classList.add("glow-effect");
    setTimeout(function () {
        heading.classList.remove("glow-effect");
    }, 1000);
}
function displayMessageAndRefresh(message, refreshDelay, check) {
    var messageElement = document.createElement("div");
    messageElement.id = "popup";
    messageElement.innerText = message;
    messageElement.style.fontSize = "24px";
    messageElement.style.textAlign = "center";
    messageElement.style.marginTop = "50px";
    if (check == 2) {
        messageElement.style.backgroundColor = "red";
        messageElement.style.color = "white";
    }
    else{
        messageElement.style.backgroundColor = "green";
    }
    document.body.innerHTML = '';
    document.body.appendChild(messageElement);
    setTimeout(function () {
        location.reload();
    }, refreshDelay);
}