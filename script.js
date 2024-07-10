// retrieves the player's choice, generates the computer's choice and displays the result
function playerChoice(choice) {
    const choices = ["✊🏻", "🖐🏻", "✌🏻"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    const result = determineWinner(choice, computerChoice);
    
    displayResult(choice, computerChoice, result);
}

// battle result
function determineWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "Égalité ! 😐";
    } else if (
        (playerChoice === "✊🏻" && computerChoice === "✌🏻") ||
        (playerChoice === "🖐🏻" && computerChoice === "✊🏻") ||
        (playerChoice === "✌🏻" && computerChoice === "🖐🏻")
    ) {
        return "Tu as gagné ! 🥳";
    } else {
        return "Tu as perdu ! 😭";
    }
}

// display result
function displayResult(playerChoice, computerChoice, result) {
    const resultElement = document.getElementById("result");
    let colorFont = "";

    if (result === "Tu as gagné ! 🥳"){
        colorFont = "win";
    } else if (result === "Tu as perdu ! 😭") {
        colorFont = "lose";
    } else {
        colorFont = "egal";
    }
    
    resultElement.innerHTML = `
        <span id="player1">${playerChoice}</span> <span id="player2">${computerChoice}</span>
        <p class=${colorFont}>${result}</p>
    `;
} 