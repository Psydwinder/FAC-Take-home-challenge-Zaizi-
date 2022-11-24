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

let openDoor1, openDoor2, openDoor3, winner;

//Event listeners
document.addEventListener("DOMContentLoaded", hideEl);


// Hiding unnecessary elements
function hideEl() {
  d1.hidden = true;
  d2.hidden = true;
  d3.hidden = true;
  instructions.hidden = false;
  row2.hidden = true;
  SwitchAndWin.style.display = "none";
  SwitchAndLose.style.display = "none";
  NoSwitchAndWin.style.display = "none";
  NoSwitchAndLose.style.display = "none";
}

let count = 0;
let switchWins = 0;
let stickWins = 0;
let switchCounter= 0;
let stickCounter = 0;

// Function to randomly shuffle the doors
function winDoorGenerator() {
  winner = Math.floor(Math.random() * 3) + 1;
  if (winner === 1) {
    openDoor1 = winPath;
    openDoor2 = losePath;
    openDoor3 = losePath;
  } else if (winner === 2) {
    openDoor1 = losePath;
    openDoor2 = winPath;
    openDoor3 = losePath;
  } else if (winner === 3) {
    openDoor1 = losePath;
    openDoor2 = losePath;
    openDoor3 = winPath;
  }
  console.log(`Total games played: ${count}`);
  console.log(`Switch wins: ${switchWins}`);
  console.log(`Stick wins: ${stickWins}`);
  console.log(`The winning door is: ${winner}`);
  
}
// Calling the function
winDoorGenerator();


doorImage1.onclick = () => {
  doorImage1.classList.add("selected");
  instructions.style.display = "none";
  d1.hidden = false;
  decisions.style.display = "flex";

  if (openDoor2 === losePath) {
    setTimeout(() => {
      doorImage2.src = "images/doorLose.png";
    }, 2000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 3000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 3000);
  } else if (openDoor3 === losePath) {
    setTimeout(() => {
      doorImage3.src = "images/doorLose.png";
    }, 2000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 3000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 3000);
  }

  switchChoiceYes.onclick = () => {
    if (openDoor2 === losePath) {
      row2.style.display = "none";
      instructions.style.display = "flex";
      instructions.innerHTML = "You switched to door #3";

      setTimeout(() => {
        doorImage3.src = openDoor3;
      }, 2000);

      //Conditions to display the result page
      if (openDoor3 === losePath) {
        setTimeout(() => {
          switchAndLose();
        }, 3500);
        ;
      } else {
        setTimeout(() => {
          switchAndWin();
        }, 3500);
        ;
      }
    } else if (openDoor3 === losePath) {
      row2.style.display = "none";
      instructions.style.display = "flex";
      instructions.innerHTML = "You switched to door #2";

      // Opening the chosen door
      setTimeout(() => {
        doorImage2.src = openDoor2;
      }, 2000);
      //Conditions to display the result page
      if (openDoor2 === losePath) {
        setTimeout(() => {
          switchAndLose();
        }, 3500);
        ;
      } else {
        setTimeout(() => {
          switchAndWin();
        }, 3500);
        ;
      }
    }
  };

  switchChoiceNo.onclick = () => {
    row2.style.display = "none";
    instructions.style.display = "flex";
    instructions.innerHTML = "Your choice is still door #1";

    // Opening the chosen door
    setTimeout(() => {
      doorImage1.src = openDoor1;
    }, 2000);

    // Conditions to display the result page
    if (openDoor1 === losePath) {
      setTimeout(() => {
        noSwitchAndLose();
      }, 3000);
    } else {
      setTimeout(() => {
        noSwitchAndWin();
      }, 3000);
    }
  };
};

doorImage2.onclick = () => {
  doorImage2.classList.add("selected");
  instructions.style.display = "none";
  d2.hidden = false;
  decisions.style.display = "flex";

  if (openDoor1 === losePath) {
    setTimeout(() => {
      doorImage1.src = "images/doorLose.png";
    }, 2000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 3000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 3000);
  } else if (openDoor3 === losePath) {
    setTimeout(() => {
      doorImage3.src = "images/doorLose.png";
    }, 2000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 3000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 3000);
  }
  switchChoiceYes.onclick = () => {
    if (openDoor1 === losePath) {
      row2.style.display = "none";
      instructions.style.display = "flex";
      instructions.innerHTML = "You switched to door #3";

      // Opening the chosen door
      setTimeout(() => {
        doorImage3.src = openDoor3;
      }, 2000);

      //Conditions to display the result page
      if (openDoor3 === losePath) {
        setTimeout(() => {
          switchAndLose();
        }, 3500);
      } else {
        setTimeout(() => {
          switchAndWin();
        }, 3500);
      }
    } else if (openDoor3 === losePath) {
      row2.style.display = "none";
      instructions.style.display = "flex";
      instructions.innerHTML = "You switched to door #1";

      // Opening the chosen door
      setTimeout(() => {
        doorImage1.src = openDoor1;
      }, 2000);
      //Conditions to display the result page
      if (openDoor1 === losePath) {
        setTimeout(() => {
          switchAndLose();
        }, 3500);
      } else {
        setTimeout(() => {
          switchAndWin();
        }, 3500);
      }
    }
  };

  switchChoiceNo.onclick = () => {
    row2.style.display = "none";
    instructions.style.display = "flex";
    instructions.innerHTML = "Your choice is still door #2";

    // Opening the chosen door
    setTimeout(() => {
      doorImage2.src = openDoor2;
    }, 2000);

    // Conditions to display the result page
    if (openDoor2 === losePath) {
      setTimeout(() => {
        noSwitchAndLose();
      }, 3000);
    } else {
      setTimeout(() => {
        noSwitchAndWin();
      }, 3000);
    }
  };
};

doorImage3.onclick = () => {
  doorImage3.classList.add("selected");
  instructions.style.display = "none";
  d3.hidden = false;
  decisions.style.display = "flex";

  if (openDoor1 === losePath) {
    setTimeout(() => {
      doorImage1.src = "images/doorLose.png";
    }, 2000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 3000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 3000);
  } else if (openDoor2 === losePath) {
    setTimeout(() => {
      doorImage2.src = "images/doorLose.png";
    }, 2000);
    setTimeout(() => {
      row2.style.display = "block";
    }, 3000);
    setTimeout(() => {
      decisions.style.display = "none";
    }, 3000);
  }
  switchChoiceYes.onclick = () => {
    if (openDoor1 === losePath) {
      row2.style.display = "none";
      instructions.style.display = "flex";
      instructions.innerHTML = "You switched to door #2";

      // Opening the chosen door
      setTimeout(() => {
        doorImage2.src = openDoor2;
      }, 2000);

      //Conditions to display the result page
      if (openDoor2 === losePath) {
        setTimeout(() => {
          switchAndLose();
        }, 3500);
      } else {
        setTimeout(() => {
          switchAndWin();
        }, 3500);
      }
    } else if (openDoor2 === losePath) {
      row2.style.display = "none";
      instructions.style.display = "flex";
      instructions.innerHTML = "You switched to door #1";

      // Opening the chosen door
      setTimeout(() => {
        doorImage1.src = openDoor1;
      }, 2000);
      //Conditions to display the result page
      if (openDoor1 === losePath) {
        setTimeout(() => {
          switchAndLose();
        }, 3500);
      } else {
        setTimeout(() => {
          switchAndWin();
        }, 3500);
      }
    }
  };

  switchChoiceNo.onclick = () => {
    row2.style.display = "none";
    instructions.style.display = "flex";
    instructions.innerHTML = "Your choice is still door #3";

    // Opening the chosen door
    setTimeout(() => {
      doorImage3.src = openDoor3;
    }, 2000);

    // Conditions to display the result page
    if (openDoor3 === losePath) {
      setTimeout(() => {
        noSwitchAndLose();
      }, 3000);
    } else {
      setTimeout(() => {
        noSwitchAndWin();
      }, 3000);
    }
  };
};

const switchAndWin = () => {
  body.style.display = "none";
  SwitchAndWin.style.display = "block";
  count += 1
  switchWins +=1
  switchCounter +=1
};
const switchAndLose = () => {
  body.style.display = "none";
  SwitchAndLose.style.display = "block";
  count += 1
  switchCounter += 1;
};
const noSwitchAndWin = () => {
  body.style.display = "none";
  NoSwitchAndWin.style.display = "block";
  count += 1
  stickWins +=1
  stickCounter +=1;
};
const noSwitchAndLose = () => {
  body.style.display = "none";
  NoSwitchAndLose.style.display = "block";
  count += 1
  stickCounter += 1;
};

function playAgain (){
  hideEl();
  winDoorGenerator();
  body.style.display = "block";
  instructions.style.display = "flex";
  instructions.innerHTML = "Please select a door";
  doorImage1.classList.remove("selected");
  doorImage2.classList.remove("selected");
  doorImage3.classList.remove("selected");
  doorImage1.src = "images/doorClosed.png"
  doorImage2.src = "images/doorClosed.png"
  doorImage3.src = "images/doorClosed.png"
  calcStats();

}

//Calculated the stats for a playthrough of the game that gets logged when the play again button is clicked
function calcStats(){
  document.getElementById("totalPlayed").innerHTML = count;
  document.getElementById("switchWins").innerHTML = switchWins;
  document.getElementById("stickWins").innerHTML = stickWins;
  
  const switchPercentageContent = document.getElementById("switchWinPercentage");
  const stickPercentageContent = document.getElementById("stickWinPercentage");


  let switchPercentage = 0;
  let stickPercentage = 0;


  if (switchWins === 0 && stickWins === 0){
    switchPercentageContent.innerHTML = "0%"
    stickPercentageContent.innerHTML = "0%"
  } else if (switchWins > 0 && stickWins === 0){
    switchPercentage = Math.round((switchWins/switchCounter)*100);
    switchPercentageContent.innerHTML = `${switchPercentage}%`
    stickPercentageContent.innerHTML = "0%"
} else if (switchWins === 0 && stickWins > 0){
    stickPercentage = Math.round((stickWins/stickCounter)*100);
    stickPercentageContent.innerHTML = `${stickPercentage}%`
    switchPercentageContent.innerHTML = "0%"
} else if (switchWins > 0 && stickWins > 0){
    stickPercentage = Math.round((stickWins/stickCounter)*100);
    stickPercentageContent.innerHTML = `${stickPercentage}%`
    switchPercentage = Math.round((switchWins/switchCounter)*100);
    switchPercentageContent.innerHTML = `${switchPercentage}%`
}
}