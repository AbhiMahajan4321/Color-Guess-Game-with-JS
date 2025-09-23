const colorCodeContainer = document.querySelector("#color-code");
const optionContainer = document.querySelector("#options-container");
const myScore = document.querySelector("#score");
const myTries = document.querySelector("#tries");

let randomColor = null;
let score = 0;
let tries = 0;

function resetGame() {
    score = 0;
    tries = 0;
    myScore.textContent = score;
    myTries.textContent = tries;

    window.localStorage.setItem('score', score);
    window.localStorage.setItem('tries', tries);
}

function generateRandomNumberBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function incScore() {
    score += 1;
    myScore.textContent = score;
    window.localStorage.setItem('score', score);
    startGame();
}

function validateResult(ele) {
    const selectedColor = ele.target.style.backgroundColor;

    if (selectedColor === randomColor) incScore();

    else {
        tries += 1;
        myTries.textContent = tries;
        window.localStorage.setItem('tries', tries);
    }
}

function generateRandomColorRGB() {
    const red = generateRandomNumberBetween(0, 255);
    const green = generateRandomNumberBetween(0, 255);
    const blue = generateRandomNumberBetween(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function startGame() {
    score = Number(window.localStorage.getItem('score')) ?? null;
    myScore.textContent = score;

    optionContainer.textContent = '';

    tries = Number(window.localStorage.getItem('tries')) ?? null;
    myTries.textContent = tries;

    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;

    const ansIndex = generateRandomNumberBetween(0, 5);

    for (let i = 0; i < 6; i++) {
        const div = document.createElement("div");
        div.addEventListener('click', validateResult);

        div.style.backgroundColor =
            i === ansIndex ? randomColor : generateRandomColorRGB();
        optionContainer.append(div);
    }
}

window.addEventListener("load", () => startGame());