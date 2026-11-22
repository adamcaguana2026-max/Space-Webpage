
if (document.body) {
    document.body.style.backgroundImage = "url('luna.JPEG')";
}

function checkAnswer(questionNumber, answer) {
    const resultElement = document.getElementById("result" + questionNumber);
    if (!resultElement) return;

    if (questionNumber === 1) {
        resultElement.textContent = answer === "Mars" ? "Correct!" : "Incorrect! Try again!";
    } else if (questionNumber === 2) {
        resultElement.textContent = answer === "0 moons" ? "Correct!" : "Incorrect! Try again!";
    } else if (questionNumber === 3) {
        resultElement.textContent = answer === "True" ? "Correct!" : "Incorrect! Try again!";
    } else if (questionNumber === 4) {
        resultElement.textContent = answer === "Jupiter" ? "Correct!" : "Incorrect! Try again!";
    }
}
function checkDropdownAnswer() {
    const answer = document.getElementById("planetAnswer").value;
    const result = document.getElementById("dropdownResult");
    if (!result) return;
    result.textContent = answer === "Venus" ? "Correct!" : "Incorrect! Try again!";
}

function checkTextAnswer() {
    const answer = document.getElementById("textAnswer").value;
    const result = document.getElementById("textResult");
    if (!result) return;
    result.textContent = answer === "5" ? "Correct!" : "Incorrect! Try again!";
}

function convertToKm() {
    const auInput = document.getElementById("auInput");
    const result = document.getElementById("auResult");
    if (!auInput || !result) return;

    const auValue = Number(auInput.value);
    if (Number.isNaN(auValue)) {
        result.textContent = "Please enter a number in AU.";
        return;
    }

    const kmValue = auValue * 149597870.7;
    result.textContent = auValue + " AU = " + kmValue.toFixed(2) + " km";
}