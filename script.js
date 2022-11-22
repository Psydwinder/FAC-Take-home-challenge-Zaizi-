// Selectors
const body = document.getElementById("body");
const instructions = document.getElementById("instructions");
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const decisions = document.getElementById("decisions");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const switchChoiceYes = document.getElementById("btn-1");
const switchChoiceNo = document.getElementById("btn-2");
const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const SwitchAndWin = document.getElementById("switchWin");
const SwitchAndLose = document.getElementById("switchLose");
const NoSwitchAndWin = document.getElementById("stickWin");
const NoSwitchAndLose = document.getElementById("stickLose");

const winPath = "images/doorWin.png"; // Image of Car
const losePath = "images/doorLose.png"; // Image of Goat

let openDoor1, openDoor2, openDoor3, winner; // Variables for shuffling the doors

//Event listeners
document.addEventListener("DOMContentLoaded", hideEl);
doorImage1.addEventListener("click", door1Clicked);
doorImage2.addEventListener("click", door2Clicked);
doorImage3.addEventListener("click", door3Clicked);

// Hiding unnecessary elements
function hideEl() {
  d1.hidden = true;
  d2.hidden = true;
  d3.hidden = true;
  instructions.hidden = false;
  row2.hidden = true;
  results.hidden = true;
}

// Function to randomly shuffle the doors
function winDoorGenerator() {
  winner = Math.floor(Math.random() * 3) + 1;
  if (winner === 1) {
    openDoor1 = winPath;
    openDoor2 = losePath;
    openDoor3 = losePath;
  } else if (winner === 2) {
    openDoor2 = winPath;
    openDoor1 = losePath;
    openDoor3 = losePath;
  } else {
    openDoor3 = winPath;
    openDoor2 = losePath;
    openDoor1 = losePath;
  }
}
// Calling the function
winDoorGenerator();
console.log(winner);

function door1Clicked() {
  doorImage1.classList.add("selected");
  instructions.style.display = "none";
  d1.hidden = false;
  decisions.style.display = "flex";

  if (openDoor2 === losePath) {
    setTimeout(() => {
      doorImage2.src = openDoor2;
    }, 3000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 4000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 4000);
  } else if (openDoor3 === losePath) {
    setTimeout(() => {
      doorImage3.src = openDoor3;
    }, 3000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 4000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 4000);
  }
}

function door2Clicked() {
  doorImage2.classList.add("selected");
  instructions.style.display = "none";
  d2.hidden = false;
  decisions.style.display = "flex";

  if (openDoor1 === losePath) {
    setTimeout(() => {
      doorImage1.src = openDoor1;
    }, 3000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 4000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 4000);
  } else if (openDoor3 === losePath) {
    setTimeout(() => {
      doorImage3.src = openDoor3;
    }, 3000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 4000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 4000);
  }
}

function door3Clicked() {
  doorImage3.classList.add("selected");
  instructions.style.display = "none";
  d3.hidden = false;
  decisions.style.display = "flex";

  if (openDoor2 === losePath) {
    setTimeout(() => {
      doorImage2.src = openDoor2;
    }, 3000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 4000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 4000);
  } else if (openDoor1 === losePath) {
    setTimeout(() => {
      doorImage1.src = openDoor1;
    }, 3000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 4000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 4000);
  }
}
