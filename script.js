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
// doorImage1.addEventListener("click", door1Clicked);
// doorImage2.addEventListener("click", door2Clicked);
// doorImage3.addEventListener("click", door3Clicked);

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
}
// Calling the function
winDoorGenerator();
console.log(winner);
console.log(openDoor1, openDoor2, openDoor3);

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
      instructions.style.display = "block";
      instructions.innerHTML = "You switched to door #3";

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
      instructions.style.display = "block";
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
    }
  };

  switchChoiceNo.onclick = () => {
    row2.style.display = "none";
    instructions.style.display = "block";
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
      instructions.style.display = "block";
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
      instructions.style.display = "block";
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
    instructions.style.display = "block";
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
      instructions.style.display = "block";
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
      instructions.style.display = "block";
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
    instructions.style.display = "block";
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
};
const switchAndLose = () => {
  body.style.display = "none";
  SwitchAndLose.style.display = "block";
};
const noSwitchAndWin = () => {
  body.style.display = "none";
  NoSwitchAndWin.style.display = "block";
};
const noSwitchAndLose = () => {
  body.style.display = "none";
  NoSwitchAndLose.style.display = "block";
};
