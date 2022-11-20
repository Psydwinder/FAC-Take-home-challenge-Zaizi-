// Selectors
const body = document.getElementById("body");
const instructions = document.getElementById("instructions");
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
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

// Image of Car
const winPath = "https://image.flaticon.com/icons/svg/3118/3118467.svg";
// Image of Goat
const losePath = "https://image.flaticon.com/icons/svg/836/836069.svg";

// Variables for shuffling the doors
let openDoor1, openDoor2, openDoor3, winner;

// Hiding unnecessary elements
row2.hidden = true;
SwitchAndWin.hidden = true;
SwitchAndLose.hidden = true;
NoSwitchAndWin.hidden = true;
NoSwitchAndLose.hidden = true;
d1.hidden = true;
d2.hidden = true;
d3.hidden = true;
