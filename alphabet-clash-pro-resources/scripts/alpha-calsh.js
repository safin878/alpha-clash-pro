function continueGame() {
  const alphabet = getARandomAlphabet();
  console.log("Your random alphabet is", alphabet);
  // Display the number
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}
document.addEventListener("keyup", function (event) {
  const playerPressed = event.key;
  console.log("Player Pressed Key", playerPressed);
  // expected key
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);
  // Condition checking
  if (playerPressed === expectedAlphabet) {
    console.log("You got a point");
    continueGame();
  } else {
    console.log("You missed : you lost a point");
  }

  const background = document.getElementById(expectedAlphabet);
  background.classList.remove("bg-[#FFA500]");
});

function play() {
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");
  const playGround = document.getElementById("play-ground");
  playGround.classList.remove("hidden");
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
