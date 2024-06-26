// Accessing the html elements
const square1_1 = document.getElementById("1:1");
const square1_2 = document.getElementById("1:2");
const square1_3 = document.getElementById("1:3");
const square1_4 = document.getElementById("1:4");
const square1_5 = document.getElementById("1:5");
const square1_6 = document.getElementById("1:6");
const square2_1 = document.getElementById("2:1");
const square2_2 = document.getElementById("2:2");
const square2_3 = document.getElementById("2:3");
const square2_4 = document.getElementById("2:4");
const square2_5 = document.getElementById("2:5");
const square2_6 = document.getElementById("2:6");
const square3_1 = document.getElementById("3:1");
const square3_2 = document.getElementById("3:2");
const square3_3 = document.getElementById("3:3");
const square3_4 = document.getElementById("3:4");
const square3_5 = document.getElementById("3:5");
const square3_6 = document.getElementById("3:6");
const square4_1 = document.getElementById("4:1");
const square4_2 = document.getElementById("4:2");
const square4_3 = document.getElementById("4:3");
const square4_4 = document.getElementById("4:4");
const square4_5 = document.getElementById("4:5");
const square4_6 = document.getElementById("4:6");
const square5_1 = document.getElementById("5:1");
const square5_2 = document.getElementById("5:2");
const square5_3 = document.getElementById("5:3");
const square5_4 = document.getElementById("5:4");
const square5_5 = document.getElementById("5:5");
const square5_6 = document.getElementById("5:6");
const square6_1 = document.getElementById("6:1");
const square6_2 = document.getElementById("6:2");
const square6_3 = document.getElementById("6:3");
const square6_4 = document.getElementById("6:4");
const square6_5 = document.getElementById("6:5");
const square6_6 = document.getElementById("6:6");

const startButton = document.getElementById("start_button");
const instructions = document.getElementById("instructions");
const newGameButton = document.getElementById("new_game_button");
const resetButton = document.getElementById("reset_button");
const buttonArray = [startButton, newGameButton, resetButton];
const playArea = document.getElementById("play_area");
const square1Class = document.getElementsByClassName("square1");
const square2Class = document.getElementsByClassName("square2");
const coverLeft = document.getElementById("cover_left");
const coverRight = document.getElementById("cover_right");
const counterTab = document.getElementById("counter");
const counterText = document.getElementById("counter-text");
const clickCount = document.getElementById("clicks");
const graphBoard = document.getElementById("graph_board");
const menu = document.getElementById("menu");
const recordTab = document.getElementById("record");
const recordValue = document.getElementById("record_value");
const rulesButton = document.getElementById("rules_button");
const instructionsText = document
  .getElementById("instructions")
  .getElementsByTagName("p");
const instructionsSpan = document
  .getElementById("instructions")
  .getElementsByTagName("span");
// instructions popup creation
const exitInstructions = document.createElement("div");
exitInstructions.id = "exit_instructions";
exitInstructions.innerHTML = "X";

const blueSquareImage = "url('./Resources/Pictures/blue_square_1.png')";
const brownSquareImage = "url('./Resources/Pictures/blue_square_4.png')";
const blueHighlight = "url('./Resources/Pictures/blue_square_2.png')";
const brownHighlight = "url('./Resources/Pictures/blue_square_5.png')";

const gameBoardArray = [
  square1_1,
  square1_2,
  square1_3,
  square1_4,
  square1_5,
  square1_6,
  square2_1,
  square2_2,
  square2_3,
  square2_4,
  square2_5,
  square2_6,
  square3_1,
  square3_2,
  square3_3,
  square3_4,
  square3_5,
  square3_6,
  square4_1,
  square4_2,
  square4_3,
  square4_4,
  square4_5,
  square4_6,
  square5_1,
  square5_2,
  square5_3,
  square5_4,
  square5_5,
  square5_6,
  square6_1,
  square6_2,
  square6_3,
  square6_4,
  square6_5,
  square6_6,
];

//Board setup arrays
const testSetup = ["1:1", "1:2", "2:1"];
const testSetup2 = [
  "1:3",
  "1:4",
  "1:5",
  "1:6",
  "2:2",
  "2:3",
  "2:4",
  "2:5",
  "2:6",
  "3:1",
  "3:2",
  "3:3",
  "3:4",
  "3:5",
  "3:6",
  "4:1",
  "4:2",
  "4:3",
  "4:4",
  "4:5",
  "4:6",
  "5:1",
  "5:2",
  "5:3",
  "5:4",
  "5:5",
  "5:6",
  "6:1",
  "6:2",
  "6:3",
  "6:4",
  "6:5",
  "6:6",
];
const setup1 = [
  "1:3",
  "2:3",
  "2:4",
  "2:5",
  "3:1",
  "3:2",
  "3:3",
  "3:5",
  "3:6",
  "4:2",
  "4:5",
  "5:1",
  "5:2",
  "5:3",
  "5:6",
  "6:3",
  "6:6",
];
const setup2 = [
  "1:1",
  "1:2",
  "1:4",
  "1:5",
  "2:2",
  "3:1",
  "3:2",
  "3:4",
  "3:5",
  "3:6",
  "4:2",
  "4:3",
  "4:5",
  "5:1",
  "5:2",
  "5:5",
  "6:3",
  "6:5",
];
const setup3 = [
  "1:4",
  "1:6",
  "2:2",
  "3:1",
  "3:4",
  "3:5",
  "4:2",
  "4:5",
  "5:4",
  "5:5",
  "6:2",
  "6:4",
  "6:5",
];
const setup4 = [
  "1:1",
  "1:2",
  "1:3",
  "1:4",
  "1:6",
  "2:3",
  "2:5",
  "2:6",
  "3:1",
  "3:3",
  "3:5",
  "3:6",
  "4:2",
  "4:3",
  "4:4",
  "4:5",
  "5:1",
  "5:2",
  "5:4",
  "5:5",
  "5:6",
  "6:1",
  "6:2",
  "6:4",
  "6:5",
  "6:6",
];
const setup5 = [
  "1:2",
  "1:4",
  "1:5",
  "2:1",
  "2:6",
  "3:1",
  "3:2",
  "3:5",
  "4:1",
  "4:4",
  "4:5",
  "4:6",
  "5:4",
  "5:5",
];
const setup6 = [
  "1:1",
  "1:3",
  "1:4",
  "1:6",
  "2:1",
  "2:2",
  "2:5",
  "3:3",
  "3:5",
  "4:1",
  "4:3",
  "4:5",
  "5:1",
  "5:4",
  "5:5",
  "5:6",
  "6:3",
];
const setup7 = [
  "1:2",
  "2:1",
  "3:1",
  "3:3",
  "3:5",
  "4:6",
  "5:5",
  "5:6",
  "6:1",
  "6:2",
  "6:4",
  "6:5",
];
const setup8 = [
  "1:2",
  "1:3",
  "1:4",
  "1:5",
  "2:3",
  "2:6",
  "3:2",
  "3:3",
  "3:4",
  "4:1",
  "4:2",
  "4:3",
  "4:4",
  "4:6",
  "5:2",
  "5:3",
  "6:4",
];
const setup9 = [
  "1:2",
  "1:4",
  "2:1",
  "2:2",
  "2:5",
  "3:2",
  "3:3",
  "3:5",
  "4:2",
  "4:6",
  "5:1",
  "5:2",
  "5:4",
  "6:2",
  "6:4",
  "6:5",
];
const setup10 = [
  "1:1",
  "1:2",
  "1:6",
  "2:1",
  "2:4",
  "2:5",
  "3:1",
  "3:2",
  "4:3",
  "4:4",
  "4:5",
  "5:2",
  "6:1",
  "6:2",
  "6:5",
];

// Variables
let counter;
let active = false;
let freeze = false;
let lastBoardSetup;
let record = 0;
let frontScreenShowing = true;
let winScreenShowing = false;

/*
A function that start the game when visitor click play
    1. The Play button dissapears
    2. The game board increase slightly in size, 
    2. a counter drops down from the top that start at 0. For each click by the visitor the counter increase with 1.
    2. The gameboard is set up with a random setup of 10 different layouts

On each click on of the the tiles 
    1. a function to check if tile is orange and blue and change it to the opposite
    2. Check which squares are on top, bottom, left and right and run the same function for those
    3. Check if all tiles are the same color
        if yes, play end scene
        if no, game continues

End scene - all tiles are the same color
    The counter is pulled up and dissapears out of view    
    A text appears on top of the board with a backgroun with opacity that ut the gameboard in the background.
        Congratulations! You made it with [insert counter number] amount of clicks. 
        Three buttons underneath with options
            Reset game - restart the game with the same template
            Play a new game - restart the game with a game template
            Exit game - closed the window with the game.

*/
//Functions
// Function that flip the tile to opposite color.
function flipTile(tile) {
  if (tile.className === "square1" || tile.className === "square3") {
    tile.className = "square2";

    if (active) {
      tile.style.transform = "rotateY(180deg)";
      tile.style.transition = "0.5s";
      freeze = true;
      setTimeout(() => {
        tile.style.transform = "";
        tile.style.transition = "";
        freeze = false;
      }, 300);
    }
  } else {
    tile.className = "square1";
    if (active) {
      tile.style.transform = "rotateY(180deg)";
      tile.style.transition = "0.5s";
      freeze = true;
      setTimeout(() => {
        tile.style.transform = "";
        tile.style.transition = "";
        freeze = false;
      }, 300);
    }
  }
}

//Function that change the color of the tile when mouse over.
function highlight(tile) {
  if (active) {
    tile.style.cursor = "pointer";
    if (tile.className === "square1") {
      tile.className = "square3";
    }
    if (tile.className === "square2") {
      tile.className = "square4";
    }
  }
}

//Function that change the color back to the original color once mouse leave.
function deHighlight(tile) {
  if (active) {
    tile.style.cursor = "";
    if (tile.className === "square3") {
      tile.className = "square1";
    }
    if (tile.className === "square4") {
      tile.className = "square2";
    }
  }
}

//Function that add 1 to the count value and update the value on the screen.
function increaseCounter() {
  counter++;
  clickCount.innerHTML = counter;
}

//Function that save the record once the player finish the game, only if current record is 0 or better than previous.
function saveRecord() {
  record = counter;
  recordValue.innerHTML = `${record}`;
}

//Function that set up the look of the board once start button is pressed.
function prepareBoard() {
  coverLeft.style.width = "0px";
  coverRight.style.width = "0px";
  setTimeout(function () {
    coverLeft.remove();
    coverRight.remove();
    counterTab.style.opacity = "1";
    recordTab.style.opacity = "1";
    rulesButton.style.opacity = "1";
  }, 1500);
  startButton.remove();
  instructions.remove();
}

// Function prepare the board for a new game.
function startGame() {
  winScreenShowing = false;
  counter = 0;
  setTimeout(function () {
    active = true;
  }, 1000);
  clickCount.innerHTML = counter;
  clickCount.style.fontSize = "20px";
  clickCount.style.paddingTop = "5px";
  counterTab.style.height = "50px";
  counterText.style.fontSize = "15px";
  counterText.style.height = "25px";
  if (playArea.childElementCount === 1) {
    gameBoardArray.forEach((element) => {
      element.style.transition = "";
      element.style.opacity = "";
      playArea.appendChild(element);
    });
    document.getElementById("win_screen").remove();
    menu.appendChild(resetButton);
    menu.appendChild(rulesButton);
  }
  if (counter) {
    recordValue.innerHTML = record;
  }
}

//Function that run when player has finished the game.
function endGame() {
  active = false;
  clickCount.style.fontSize = "0px";
  clickCount.style.paddingTop = "0px";
  counterTab.style.height = "0px";
  counterText.style.fontSize = "0px";
  counterText.style.height = "0px";
  gameBoardArray.forEach((element) => {
    element.style.transition = "1s";
    element.style.opacity = "0";
  });
  setTimeout(() => {
    showEndScreen();
    gameBoardArray.forEach((element) => {
      element.remove();
    });
    resetButton.remove();
    rulesButton.remove();
  }, 700);
  if (record === 0 || counter < record) {
    saveRecord();
  }
}

//Function that show the endscreen when player has finished the game.
function showEndScreen() {
  winScreenShowing = true;
  const winScreen = document.createElement("div");
  winScreen.id = "win_screen";
  winScreen.innerHTML = `<h2>Congratulations!</h2>
            <p>You finished with <br>
            <span>${counter}</span> <br> Clicks</p>`;
  playArea.appendChild(winScreen);
}

//Function that check if all the squares are in the same color. If true it run the endGame function.
function CheckStatus() {
  if (square1Class.length === 36 || square2Class.length === 36) {
    endGame();
  }
}

//Function decide which board setup to be used by randomizing a value from 1 to 9.
const setupRandomizer = () => {
  let newBoardSetup = Math.floor(Math.random() * 10);
  while (newBoardSetup === lastBoardSetup) {
    newBoardSetup = Math.floor(Math.random() * 10);
  }
  return (lastBoardSetup = newBoardSetup);
};
// function that turn the tiles according to the array returned in the setupRandomizer.
function BoardSetup(boardSetupValue) {
  for (let i = 0; i < gameBoardArray.length; i++) {
    if (gameBoardArray[i].className === "square2") {
      flipTile(gameBoardArray[i]);
    }
  }

  switch (boardSetupValue) {
    case 0:
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (setup1.includes(gameBoardArray[i].id)) {
          flipTile(gameBoardArray[i]);
        }
      }
      break;
    case 1:
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (setup2.includes(gameBoardArray[i].id)) {
          flipTile(gameBoardArray[i]);
        }
      }
      break;
    case 2:
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (setup3.includes(gameBoardArray[i].id)) {
          flipTile(gameBoardArray[i]);
        }
      }
      break;
    case 3:
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (setup4.includes(gameBoardArray[i].id)) {
          flipTile(gameBoardArray[i]);
        }
      }
      break;
    case 4:
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (setup5.includes(gameBoardArray[i].id)) {
          flipTile(gameBoardArray[i]);
        }
      }
      break;
    case 5:
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (setup6.includes(gameBoardArray[i].id)) {
          flipTile(gameBoardArray[i]);
        }
      }
      break;
    case 6:
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (setup7.includes(gameBoardArray[i].id)) {
          flipTile(gameBoardArray[i]);
        }
      }
      break;
    case 7:
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (setup8.includes(gameBoardArray[i].id)) {
          flipTile(gameBoardArray[i]);
        }
      }
      break;
    case 8:
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (setup9.includes(gameBoardArray[i].id)) {
          flipTile(gameBoardArray[i]);
        }
      }
      break;
    case 9:
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (setup10.includes(gameBoardArray[i].id)) {
          flipTile(gameBoardArray[i]);
        }
      }
      break;
    case 10: // Setup for testing win with blue squares screen only
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (testSetup.includes(gameBoardArray[i].id)) {
          flipTileBoard(gameBoardArray[i]);
        }
      }
      return (lastBoardSetup = 10);
      break;
    case 11: // Setup for testing win screen with yellow squares only
      for (let i = 0; i < gameBoardArray.length; i++) {
        if (testSetup2.includes(gameBoardArray[i].id)) {
          flipTileBoard(gameBoardArray[i]);
        }
      }
      break;
  }
}

//Eventlisterners added for each square on the board.
gameBoardArray.forEach((element) => {
  element.addEventListener("mouseover", () => {
    highlight(element);
  });
  element.addEventListener("mouseout", () => {
    deHighlight(element);
  });
  element.addEventListener("click", () => {
    if (active && !freeze) {
      switch (element) {
        case square1_1:
          flipTile(square1_1);
          flipTile(square1_2);
          flipTile(square2_1);
          break;
        case square1_2:
          flipTile(square1_2);
          flipTile(square1_1);
          flipTile(square1_3);
          flipTile(square2_2);
          break;
        case square1_3:
          flipTile(square1_3);
          flipTile(square1_2);
          flipTile(square1_4);
          flipTile(square2_3);
          break;
        case square1_4:
          flipTile(square1_4);
          flipTile(square1_3);
          flipTile(square1_5);
          flipTile(square2_4);
          break;
        case square1_5:
          flipTile(square1_5);
          flipTile(square1_4);
          flipTile(square1_6);
          flipTile(square2_5);
          break;
        case square1_6:
          flipTile(square1_6);
          flipTile(square1_5);
          flipTile(square2_6);
          break;
        case square2_1:
          flipTile(square2_1);
          flipTile(square2_2);
          flipTile(square1_1);
          flipTile(square3_1);
          break;
        case square2_2:
          flipTile(square2_2);
          flipTile(square2_1);
          flipTile(square2_3);
          flipTile(square1_2);
          flipTile(square3_2);
          break;
        case square2_3:
          flipTile(square2_3);
          flipTile(square2_2);
          flipTile(square2_4);
          flipTile(square1_3);
          flipTile(square3_3);
          break;
        case square2_4:
          flipTile(square2_4);
          flipTile(square2_3);
          flipTile(square2_5);
          flipTile(square1_4);
          flipTile(square3_4);
          break;
        case square2_5:
          flipTile(square2_5);
          flipTile(square2_4);
          flipTile(square2_6);
          flipTile(square1_5);
          flipTile(square3_5);
          break;
        case square2_6:
          flipTile(square2_6);
          flipTile(square2_5);
          flipTile(square1_6);
          flipTile(square3_6);
          break;
        case square3_1:
          flipTile(square3_1);
          flipTile(square3_2);
          flipTile(square2_1);
          flipTile(square4_1);
          break;
        case square3_2:
          flipTile(square3_2);
          flipTile(square3_1);
          flipTile(square3_3);
          flipTile(square2_2);
          flipTile(square4_2);
          break;
        case square3_3:
          flipTile(square3_3);
          flipTile(square3_2);
          flipTile(square3_4);
          flipTile(square2_3);
          flipTile(square4_3);
          break;
        case square3_4:
          flipTile(square3_4);
          flipTile(square3_3);
          flipTile(square3_5);
          flipTile(square2_4);
          flipTile(square4_4);
          break;
        case square3_5:
          flipTile(square3_5);
          flipTile(square3_4);
          flipTile(square3_6);
          flipTile(square2_5);
          flipTile(square4_5);
          break;
        case square3_6:
          flipTile(square3_6);
          flipTile(square3_5);
          flipTile(square2_6);
          flipTile(square4_6);
          break;
        case square4_1:
          flipTile(square4_1);
          flipTile(square4_2);
          flipTile(square3_1);
          flipTile(square5_1);
          break;
        case square4_2:
          flipTile(square4_2);
          flipTile(square4_1);
          flipTile(square4_3);
          flipTile(square3_2);
          flipTile(square5_2);
          break;
        case square4_3:
          flipTile(square4_3);
          flipTile(square4_2);
          flipTile(square4_4);
          flipTile(square3_3);
          flipTile(square5_3);
          break;
        case square4_4:
          flipTile(square4_4);
          flipTile(square4_3);
          flipTile(square4_5);
          flipTile(square3_4);
          flipTile(square5_4);
          break;
        case square4_5:
          flipTile(square4_5);
          flipTile(square4_4);
          flipTile(square4_6);
          flipTile(square3_5);
          flipTile(square5_5);
          break;
        case square4_6:
          flipTile(square4_6);
          flipTile(square4_5);
          flipTile(square3_6);
          flipTile(square5_6);
          break;
        case square5_1:
          flipTile(square5_1);
          flipTile(square5_2);
          flipTile(square4_1);
          flipTile(square6_1);
          break;
        case square5_2:
          flipTile(square5_2);
          flipTile(square5_1);
          flipTile(square5_3);
          flipTile(square4_2);
          flipTile(square6_2);
          break;
        case square5_3:
          flipTile(square5_3);
          flipTile(square5_2);
          flipTile(square5_4);
          flipTile(square4_3);
          flipTile(square6_3);
          break;
        case square5_4:
          flipTile(square5_4);
          flipTile(square5_3);
          flipTile(square5_5);
          flipTile(square4_4);
          flipTile(square6_4);
          break;
        case square5_5:
          flipTile(square5_5);
          flipTile(square5_4);
          flipTile(square5_6);
          flipTile(square4_5);
          flipTile(square6_5);
          break;
        case square5_6:
          flipTile(square5_6);
          flipTile(square5_5);
          flipTile(square4_6);
          flipTile(square6_6);
          break;
        case square6_1:
          flipTile(square6_1);
          flipTile(square6_2);
          flipTile(square5_1);
          break;
        case square6_2:
          flipTile(square6_2);
          flipTile(square6_1);
          flipTile(square6_3);
          flipTile(square5_2);
          break;
        case square6_3:
          flipTile(square6_3);
          flipTile(square6_2);
          flipTile(square6_4);
          flipTile(square5_3);
          break;
        case square6_4:
          flipTile(square6_4);
          flipTile(square6_3);
          flipTile(square6_5);
          flipTile(square5_4);
          break;
        case square6_5:
          flipTile(square6_5);
          flipTile(square6_4);
          flipTile(square6_6);
          flipTile(square5_5);
          break;
        case square6_6:
          flipTile(square6_6);
          flipTile(square6_5);
          flipTile(square5_6);
          break;
      }
      increaseCounter();
      CheckStatus();
    }
  });
});

//Eventlisteners added for each button on the board.
buttonArray.forEach((element) => {
  element.addEventListener("mouseover", () => {
    if (active || frontScreenShowing || winScreenShowing) {
      element.style.cursor = "pointer";
      element.style.textShadow = "1px 1px 6px";
      element.style.border = "3px solid darkorange";
      element.style.boxShadow = "2px 2px 6px";
    }
  });
  element.addEventListener("mouseout", () => {
    if (active || frontScreenShowing || winScreenShowing) {
      element.style.cursor = "default";
      element.style.textShadow = "";
      element.style.color = "darkorange";
      element.style.border = "3px solid rgb(81 47 7)";
      element.style.backgroundColor = "rgb(74, 42, 31)";
      element.style.boxShadow = "";
    }
  });
  element.addEventListener("mousedown", () => {
    if (active || frontScreenShowing || winScreenShowing) {
      element.style.color = "rgb(114,74,25)";
      element.style.border = "3px solid rgb(114,74,25)";
      element.style.backgroundColor = "rgb(25,42,42)";
    }
  });
  element.addEventListener("mouseup", () => {
    setTimeout(() => {
      element.style.color = "darkorange";
      element.style.textShadow = "";
      element.style.boxShadow = "";
      element.style.border = "3px solid rgb(81 47 7)";
      element.style.backgroundColor = "rgb(74, 42, 31)";
    }, 100);
  });
});

//Eventlisteners specific for the Startbutton.
startButton.onclick = function () {
  if (!active) {
    prepareBoard();
    startGame();
    frontScreenShowing = false;
    setTimeout(function () {
      active = true;
    }, 700);
    graphBoard.style.top = "-120px";
    setTimeout(() => {
      document.getElementsByTagName("h1")[0].style.transition = "1s";
      document.getElementsByTagName("h1")[0].style.textShadow =
        "3px 3px 6px black";
    }, 500);

    BoardSetup(setupRandomizer());
  }
};

//Eventlisteners specific for the rules.Button
rulesButton.onmouseover = function () {
  rulesButton.style.cursor = "pointer";
  rulesButton.style.textShadow = "1px 1px 6px";
  rulesButton.style.border = "3px solid orange";
  rulesButton.style.boxShadow = "2px 2px 6px";
};
rulesButton.onmouseout = function () {
  rulesButton.style.cursor = "default";
  rulesButton.style.textShadow = "";
  rulesButton.style.color = "darkorange";
  rulesButton.style.border = "3px solid rgb(81 47 7)";
  rulesButton.style.backgroundColor = "rgb(74, 42, 31)";
  rulesButton.style.boxShadow = "";
};
rulesButton.onmousedown = function () {
  rulesButton.style.color = "rgb(114,74,25)";
  rulesButton.style.border = "3px solid rgb(114,74,25)";
  rulesButton.style.backgroundColor = "rgb(25,42,42)";
  if (active) {
    active = false;
    playArea.appendChild(instructions);
    instructions.style.backgroundColor = "lightyellow";
    instructions.style.border = "3px solid darkgoldenrod";
    instructions.style.top = "20%";
    //instructions.style.width ="240px"
    instructionsText[0].style.color = "black";
    instructionsSpan[0].style.color = "black";
    newGameButton.style.opacity = "0.3";
    resetButton.style.opacity = "0.3";
    counterTab.style.opacity = "0.3";
    recordTab.style.opacity = "0.3";
    instructions.insertBefore(exitInstructions, instructions.children[0]);
    gameBoardArray.forEach((element) => {
      element.style.opacity = "0.3";
    });
  } else {
    active = true;
    playArea.removeChild(instructions);
    newGameButton.style.opacity = "";
    resetButton.style.opacity = "";
    counterTab.style.opacity = "1";
    recordTab.style.opacity = "1";
    instructions.insertBefore(exitInstructions, instructions.children[0]);
    gameBoardArray.forEach((element) => {
      element.style.opacity = "";
    });
  }
};
rulesButton.onmouseup = function () {
  setTimeout(() => {
    rulesButton.style.color = "darkorange";
    rulesButton.style.textShadow = "";
    rulesButton.style.border = "3px solid rgb(81 47 7)";
    rulesButton.style.backgroundColor = "rgb(74, 42, 31)";
    rulesButton.style.boxShadow = "";
  }, 100);
};

resetButton.onclick = function () {
  if (active) {
    startGame();
    BoardSetup(lastBoardSetup);
  }
};

//Specifies what happens when player click on the New Game button.
newGameButton.onclick = function () {
  if (playArea.childElementCount !== 37) {
    startGame();
    BoardSetup(setupRandomizer());
  }
};

//Eventlisteners for the X in the corner of the rules popup.
exitInstructions.onmouseover = function () {
  exitInstructions.style.color = "orange";
  exitInstructions.style.border = "2px solid orange";
  exitInstructions.style.fontWeight = "bold";
};

exitInstructions.onmouseout = function () {
  exitInstructions.style.backgroundColor = "";
  exitInstructions.style.color = "darkgoldenrod";
  exitInstructions.style.border = "2px solid darkgoldenrod";
  exitInstructions.style.fontWeight = "";
};

exitInstructions.onmousedown = function () {
  exitInstructions.style.color = "rgb(114,74,25)";
  exitInstructions.style.border = "2px solid rgb(114,74,25)";
  exitInstructions.style.backgroundColor = "rgb(25,42,42)";
  setTimeout(() => {
    active = true;
    playArea.removeChild(instructions);
    newGameButton.style.opacity = "";
    resetButton.style.opacity = "";
    counterTab.style.opacity = "1";
    recordTab.style.opacity = "1";
    instructions.insertBefore(exitInstructions, instructions.children[0]);
    gameBoardArray.forEach((element) => {
      element.style.opacity = "";
      exitInstructions.style.backgroundColor = "";
      exitInstructions.style.color = "darkgoldenrod";
      exitInstructions.style.border = "2px solid darkgoldenrod";
      exitInstructions.style.fontWeight = "";
    });
  }, 100);
};
