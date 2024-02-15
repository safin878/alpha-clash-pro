function continueGame() {
  const alphabet = getARandomAlphabet();
  // console.log("Your random alphabet is", alphabet);
  // Display the number
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}
document.addEventListener("keyup", function (event) {
  const playerPressed = event.key;
  // console.log("Player Pressed Key", playerPressed);
  if (playerPressed === "Escape") {
    gameOver();
  }
  // expected key
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabet);
  // Condition checking
  if (playerPressed === expectedAlphabet) {
    // console.log("You got a point");
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;

    // console.log(currentScore);
    continueGame();
  } else {
    // console.log("You missed : you lost a point");
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;
    if (newLife === 0) {
      gameOver();
    }
  }

  const background = document.getElementById(expectedAlphabet);
  background.classList.remove("bg-[#FFA500]");
});

function play() {
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");
  const playGround = document.getElementById("play-ground");
  playGround.classList.remove("hidden");
  hideElementById("final-score");

  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame();
}
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#FFA500]");
}
function getARandomAlphabet() {
  const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetsString.split("");
  // console.log(alphabets);

  // Random number
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  // console.log(index, alphabet);
  return alphabet;
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function gameOver() {
  const homeSection = document.getElementById("play-ground");
  homeSection.classList.add("hidden");
  const playGround = document.getElementById("final-score");
  playGround.classList.remove("hidden");
  const lastScore = getTextElementValueById("current-score");
  console.log(lastScore);
  setTextElementValueById("last-score", lastScore);
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
