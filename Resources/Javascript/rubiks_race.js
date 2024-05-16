let goalBoardTileArr = []; // The array to add created goalboard tile objects into
let P1BoardTileObj = {}; // The board object to add created tile objects for player1
let P2BoardTileObj = {}; // The board object to add created tile objects for player2
let player1;
let player2;
let menuSelection = 1;
const p2DoneButton = document.getElementById("player-two-fin-button");
const p1DoneButton = document.getElementById("player-one-fin-button");
const startButton = document.getElementById("start-option");
const p1Won = document.getElementById("P1-won");
const p1Lost = document.getElementById("P1-lost");
const p2Won = document.getElementById("P2-won");
const p2Lost = document.getElementById("P2-lost");
let goalBoard = document.getElementById("goal-pattern");
let p1Board = document.getElementById("player-one-board");
let p2Board = document.getElementById("player-two-board");
let inGame = false;
let gamePaused = false;
let infoOpen = false;
let playerOneScore = 0;
let playerTwoScore = 0;

class Tile {
  constructor(id, color, parent, cssClass, left, top) {
    this._element = document.createElement("div");
    this._element.id = id;
    this._element.className = cssClass;
    this._element.style.left = left;
    this._element.style.top = top;
    this._element.style.backgroundColor = color;
    parent.appendChild(this._element);
  }

  getXPos() {
    let xPos = this._element.style.left;
    return Number(xPos.slice(0, xPos.length - 2));
  }

  getYPos() {
    let yPos = this._element.style.top;
    return Number(yPos.slice(0, yPos.length - 2));
  }

  checkIfFree() {
    const targetPosition = {
      left: this.getXPos(),
      top: this.getYPos(),
      id: this._element.id.slice(0, 2),
    };
    const posUp = `div[id^="${targetPosition.id}"][style*="top: ${
      targetPosition.top - 65
    }px;"][style*="left: ${targetPosition.left}px;"]`;
    const posDown = `div[id^="${targetPosition.id}"][style*="top: ${
      targetPosition.top + 65
    }px;"][style*="left: ${targetPosition.left}px;"]`;
    const posLeft = `div[id^="${targetPosition.id}"][style*="top: ${
      targetPosition.top
    }px;"][style*="left: ${targetPosition.left - 65}px;"]`;
    const posRight = `div[id^="${targetPosition.id}"][style*="top: ${
      targetPosition.top
    }px;"][style*="left: ${targetPosition.left + 65}px;"]`;
    const element1 = document.querySelector(posUp);
    const element2 = document.querySelector(posDown);
    const element3 = document.querySelector(posLeft);
    const element4 = document.querySelector(posRight);
    //console.log(element1, element2, element3, element4);
    if (!element1 && this.getYPos() > 5) {
      return "up";
    } else if (!element2 && this.getYPos() < 265) {
      return "down";
    } else if (!element3 && this.getXPos() > 5) {
      return "left";
    } else if (!element4 && this.getXPos() < 265) {
      return "right";
    } else {
      console.log("no direction is free");
    }
  }

  moveLeft = () => {
    if (this.getXPos() > 5) {
      let lMove = this.getXPos() - 65;
      this._element.style.left = lMove + "px";
    }
  };

  moveRight = () => {
    if (this.getXPos() < 265) {
      let rMove = this.getXPos() + 65;
      this._element.style.left = rMove + "px";
    }
  };

  moveUp = () => {
    if (this.getYPos() > 5) {
      let uMove = this.getYPos() - 65;
      this._element.style.top = uMove + "px";
    }
  };

  moveDown = () => {
    if (this.getYPos() < 265) {
      let dMove = this.getYPos() + 65;
      this._element.style.top = dMove + "px";
    }
  };
}

class PlayerMarker {
  constructor(id, parent, cssClass) {
    this._element = document.createElement("div");
    this._element.id = id;
    this._element.className = cssClass;
    this._element.style.left = "133px";
    this._element.style.top = "133px";
    parent.appendChild(this._element);
    this.isLarge = false; // Will be true if the player marker is over the Done button
  }

  getXPos() {
    let xPos = this._element.style.left;
    return Number(xPos.slice(0, xPos.length - 2));
  }

  getYPos() {
    let yPos = this._element.style.top;
    return Number(yPos.slice(0, yPos.length - 2));
  }

  changeSizeSetting = () => {
    if (this.getYPos() === 350) {
      this.isLarge = true;
    } else {
      this.isLarge = false;
    }
  };

  setStartPosition = () => {
    this._element.style.left = "133px";
    this._element.style.top = "133px";
    this._element.style.width = "64px";
    this._element.style.height = "64px";
    this.isLarge = false;
  };

  moveLeft = () => {
    if (this.isLarge) {
      console.log("Player marker can't move left");
    } else {
      if (this.getXPos() > 3) {
        let lMove = this.getXPos() - 65;
        this._element.style.left = lMove + "px";
      }
    }
  };

  moveRight = () => {
    if (this.isLarge) {
      console.log("Player marker can't move right");
    } else {
      if (this.getXPos() < 263) {
        let rMove = this.getXPos() + 65;
        this._element.style.left = rMove + "px";
      }
    }
  };

  moveUp = () => {
    if (this.getYPos() > 3 && this.getYPos() < 265) {
      let uMove = this.getYPos() - 65;
      this._element.style.top = uMove + "px";
    } else if (this.getYPos() === 350) {
      let dMove = this.getYPos() - 87;
      this._element.style.top = dMove + "px";
      document.getElementById(this._element.id).style.width = "64px";
      document.getElementById(this._element.id).style.height = "64px";
      document.getElementById(this._element.id).style.left = "133px";
      this.changeSizeSetting();
    }
  };

  moveDown = () => {
    if (this.getYPos() < 263) {
      let dMove = this.getYPos() + 65;
      this._element.style.top = dMove + "px";
    } else if (this.getYPos() === 263) {
      let dMove = this.getYPos() + 87;
      this._element.style.top = dMove + "px";
      document.getElementById(this._element.id).style.width = "350px";
      document.getElementById(this._element.id).style.height = "30px";
      document.getElementById(this._element.id).style.left = "-10px";
      this.changeSizeSetting();
    }
  };

  moveTile = () => {
    let target = {
      left: this.getXPos() + 2,
      top: this.getYPos() + 2,
      id: this._element.id.slice(0, 2),
    };
    const posSelect = `div[id^="${target.id}"][style*="top: ${target.top}px;"][style*="left: ${target.left}px;"]`;
    const element = document.querySelector(posSelect).id;
    let direction;
    if (element) {
      if (target.id === "P1") {
        direction = P1BoardTileObj[element].checkIfFree();
        direction === "up"
          ? P1BoardTileObj[element].moveUp()
          : direction === "down"
          ? P1BoardTileObj[element].moveDown()
          : direction === "left"
          ? P1BoardTileObj[element].moveLeft()
          : direction === "right"
          ? P1BoardTileObj[element].moveRight()
          : element;
      } else {
        direction = P2BoardTileObj[element].checkIfFree();
        direction === "up"
          ? P2BoardTileObj[element].moveUp()
          : direction === "down"
          ? P2BoardTileObj[element].moveDown()
          : direction === "left"
          ? P2BoardTileObj[element].moveLeft()
          : direction === "right"
          ? P2BoardTileObj[element].moveRight()
          : element;
      }
    }
  };
}

//Update the player score and prints the new score on the screen
const updateScore = (player) => {
  if (player === player1) {
    playerOneScore++;
  } else {
    playerTwoScore++;
  }
  document.getElementById("player-one-score").innerHTML = playerOneScore;
  document.getElementById("player-two-score").innerHTML = playerTwoScore;
};

const resetScore = () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  document.getElementById("player-one-score").innerHTML = playerOneScore;
  document.getElementById("player-two-score").innerHTML = playerTwoScore;
};

//Function that checks each tile color from the player board against the goal board and return true if all tiles matches.
const checkIfWon = (player) => {
  let boardId;
  if (player === player1) {
    boardId = "P1";
  } else if (player === player2) {
    boardId = "P2";
  } else {
    console.log("Error! No player value sent");
  }

  for (let i = 0; i < 9; i++) {
    let goalColor = goalBoardTileArr[i]._element.style.backgroundColor;
    let currentTile;
    let tileColor;

    //set the X and Y positions for the 9 middle squares of the player board.
    if (i >= 0 && i < 3) {
      xPosition = setPositionTile(i + 6)[0];
      yPosition = setPositionTile(i + 6)[1];
    } else if (i === 3) {
      xPosition = setPositionTile(i + 8)[0];
      yPosition = setPositionTile(i + 8)[1];
    } else if (i === 4) {
      xPosition = "135px";
      yPosition = "135px";
    } else if (i === 5) {
      xPosition = setPositionTile(i + 7)[0];
      yPosition = setPositionTile(i + 7)[1];
    } else {
      xPosition = setPositionTile(i + 9)[0];
      yPosition = setPositionTile(i + 9)[1];
    }

    //Look for an element at the the positions and boardID stated above
    currentTile = `div[id^="${boardId}"][style*="top: ${yPosition};"][style*="left: ${xPosition};"]`;
    console.log(currentTile);
    tileColor = document.querySelector(currentTile);

    if (tileColor === null) {
      //check if one of the tiles are missing and if so break the loop and return false.
      return false;
    } else {
      tileColor = tileColor.style.backgroundColor;
      console.log(tileColor, goalColor);
      console.log(i);
      if (tileColor !== goalColor) {
        return false;
      }
    }
  }
  console.log("All good!");
  document.getElementById("continue-option").className =
    "menu-options inactive";
  return boardId;
};

//Creating player one and two player markers
player1 = new PlayerMarker("P1-marker", p1Board, "P1-marker");
P1BoardTileObj.player = player1;

player2 = new PlayerMarker("P2-marker", p2Board, "P2-marker");
P2BoardTileObj.player = player2;

//object keeping the controls and what action they perform
const controls = {
  ArrowUp: { active: false, action: player2.moveUp }, //Up
  ArrowDown: { active: false, action: player2.moveDown }, //Down
  ArrowLeft: { active: false, action: player2.moveLeft }, //Left
  ArrowRight: { active: false, action: player2.moveRight }, //Right
  Enter: { active: false, action: player2.moveTile, action2: checkIfWon }, //Move Tile
  w: { active: false, action: player1.moveUp }, //Up
  s: { active: false, action: player1.moveDown }, //Down
  a: { active: false, action: player1.moveLeft }, //Left
  d: { active: false, action: player1.moveRight }, //Right
  q: { active: false, action: player1.moveTile, action2: checkIfWon }, //Move Tile
  Escape: { active: false },
};

//Randomises a tile color
const randCol = () => {
  let rand = Math.floor(Math.random() * 6);
  switch (rand) {
    case 0:
      return "red";
      break;
    case 1:
      return "blue";
      break;
    case 2:
      return "orange";
      break;
    case 3:
      return "yellow";
      break;
    case 4:
      return "green";
      break;
    case 5:
      return "white";
      break;
  }
};

//creates a new tile element
const createNewTile = (
  id,
  color,
  board,
  boardColorArr,
  cssClass,
  xPosition,
  yPosition
) => {
  let currentColorArr = boardColorArr.filter((current) => current === color);
  while (currentColorArr.length >= 4) {
    //check if there is already 4 colors on the board, and if so randomises another colors
    color = randCol();
    currentColorArr = boardColorArr.filter((current) => current === color);
  }
  boardColorArr.push(color);
  return new Tile(id, color, board, cssClass, xPosition, yPosition);
};

//Give the coordinates for the player squares
const setPositionTile = (iteration) => {
  let xPosition;
  let yPosition;

  switch (iteration) {
    case 0:
      xPosition = "5px";
      yPosition = "5px";
      break;
    case 1:
      xPosition = "70px";
      yPosition = "5px";
      break;
    case 2:
      xPosition = "135px";
      yPosition = "5px";
      break;
    case 3:
      xPosition = "200px";
      yPosition = "5px";
      break;
    case 4:
      xPosition = "265px";
      yPosition = "5px";
      break;
    case 5:
      xPosition = "5px";
      yPosition = "70px";
      break;
    case 6:
      xPosition = "70px";
      yPosition = "70px";
      break;
    case 7:
      xPosition = "135px";
      yPosition = "70px";
      break;
    case 8:
      xPosition = "200px";
      yPosition = "70px";
      break;
    case 9:
      xPosition = "265px";
      yPosition = "70px";
      break;
    case 10:
      xPosition = "5px";
      yPosition = "135px";
      break;
    case 11:
      xPosition = "70px";
      yPosition = "135px";
      break;
    //white spot will be xPosition = "145px", yPosition = "145px";
    case 12:
      xPosition = "200px";
      yPosition = "135px";
      break;
    case 13:
      xPosition = "265px";
      yPosition = "135px";
      break;
    case 14:
      xPosition = "5px";
      yPosition = "200px";
      break;
    case 15:
      xPosition = "70px";
      yPosition = "200px";
      break;
    case 16:
      xPosition = "135px";
      yPosition = "200px";
      break;
    case 17:
      xPosition = "200px";
      yPosition = "200px";
      break;
    case 18:
      xPosition = "265px";
      yPosition = "200px";
      break;
    case 19:
      xPosition = "5px";
      yPosition = "265px";
      break;
    case 20:
      xPosition = "70px";
      yPosition = "265px";
      break;
    case 21:
      xPosition = "135px";
      yPosition = "265px";
      break;
    case 22:
      xPosition = "200px";
      yPosition = "265px";
      break;
    case 23:
      xPosition = "265px";
      yPosition = "265px";
      break;
  }
  return [xPosition, yPosition];
};

//Give the coordinates for the goal squares
const setPositionGoal = (iteration) => {
  let xPosition;
  let yPosition;

  switch (iteration) {
    case 1:
      xPosition = "5px";
      yPosition = "5px";
      break;
    case 2:
      xPosition = "35px";
      yPosition = "5px";
      break;
    case 3:
      xPosition = "65px";
      yPosition = "5px";
      break;
    case 4:
      xPosition = "5px";
      yPosition = "35px";
      break;
    case 5:
      xPosition = "35px";
      yPosition = "35px";
      break;
    case 6:
      xPosition = "65px";
      yPosition = "35px";
      break;
    case 7:
      xPosition = "5px";
      yPosition = "65px";
      break;
    case 8:
      xPosition = "35px";
      yPosition = "65px";
      break;
    case 9:
      xPosition = "65px";
      yPosition = "65px";
      break;
  }

  return [xPosition, yPosition];
};

//Function that removes the tiles from the player and goal boards
const clearBoard = (p1Arr, p2Arr, goalArr) => {
  player1.setStartPosition();
  player2.setStartPosition();
  p1Won.style.display = "none";
  p1Lost.style.display = "none";
  p2Won.style.display = "none";
  p2Lost.style.display = "none";
  goalBoardTileArr = [];
  p1DoneButton.className = "fin-button";
  p2DoneButton.className = "fin-button";

  if (goalBoard.childElementCount > 0) {
    for (let i = 0; i < 24; i++) {
      if (p1Board.lastChild.id === "P1-marker") {
        console.log("Can't remove player marker");
      } else {
        p1Board.removeChild(p1Board.lastChild);
      }
    }

    for (let i = 0; i < 24; i++) {
      if (p2Board.lastChild.id === "P2-marker") {
        console.log("Can't remove player marker");
      } else {
        p2Board.removeChild(p2Board.lastChild);
      }
    }

    for (let i = 0; i < 9; i++) {
      goalBoard.removeChild(goalBoard.lastChild);
    }
  }
};

//Function that set up the board before every new gameround.
const goalBoardSetUp = () => {
  let colorArr = [];
  clearBoard(p1Board, p2Board, goalBoardTileArr);

  //A loop that create a tile object with unique id and pushes it into the GoalBoardArray.
  for (let i = 1; i <= 9; i++) {
    const newTile = createNewTile(
      "g" + i,
      randCol(),
      goalBoard,
      colorArr,
      "tile",
      setPositionGoal(i)[0],
      setPositionGoal(i)[1]
    );
    goalBoardTileArr.push(newTile);
  }
  colorArr = []; //reset the color array to be used in the next foor loop
  // Loop creating tiles for player 1 board
  for (let i = 0; i <= 23; i++) {
    let newTile = createNewTile(
      "P1-" + i,
      randCol(),
      p1Board,
      colorArr,
      "big-tile",
      setPositionTile(i)[0],
      setPositionTile(i)[1]
    );
    P1BoardTileObj["P1-" + i] = newTile;
  }
  colorArr = []; //reset the color array to be used in the next foor loop
  // Loop creating tiles for player 2 board
  for (let i = 0; i <= 23; i++) {
    const newTile = createNewTile(
      "P2-" + i,
      randCol(),
      p2Board,
      colorArr,
      "big-tile",
      setPositionTile(i)[0],
      setPositionTile(i)[1]
    );
    P2BoardTileObj["P2-" + i] = newTile;
  }
  p1Board.style.backgroundColor = "transparent";
  p2Board.style.backgroundColor = "transparent";
  goalBoard.style.backgroundColor = "transparent";
};

// function that update the position of the player depending on if a key is pressed.
function updateGame() {
  const menuOption0 = document.getElementById("continue-option");
  const menuOption1 = document.getElementById("start-option");
  const menuOption2 = document.getElementById("rules-option");
  const menuOption3 = document.getElementById("controls-option");
  const menuOption4 = document.getElementById("reset-score");
  const menuOption5 = document.getElementById("exit-option");
  const paused1 = document.getElementById("paused1");
  const paused2 = document.getElementById("paused2");
  const idle = "menu-options";
  const hover = "menu-options-hover";

  if (inGame) {
    if (controls.ArrowUp.active) {
      controls.ArrowUp.action();
    }
    if (controls.ArrowDown.active) {
      controls.ArrowDown.action();
    }
    if (controls.ArrowLeft.active) {
      controls.ArrowLeft.action();
    }
    if (controls.ArrowRight.active) {
      controls.ArrowRight.action();
    }
    if (controls.Enter.active) {
      if (player2.getYPos() === 350) {
        controls.Enter.action2(player2);
        if (checkIfWon(player2) === "P2") {
          inGame = false;
          p2Won.style.display = "flex";
          p1Lost.style.display = "flex";
          updateScore(player2);
          menuSelection = 1;
          menuOption1.className = hover;
        }
      } else {
        controls.Enter.action();
      }
    }
    if (controls.w.active) {
      controls.w.action();
    }
    if (controls.a.active) {
      controls.a.action();
    }
    if (controls.s.active) {
      controls.s.action();
    }
    if (controls.d.active) {
      controls.d.action();
    }
    if (controls.q.active) {
      if (player1.getYPos() === 350) {
        controls.q.action2(player1);
        if (checkIfWon(player1) === "P1") {
          inGame = false;
          p1Won.style.display = "flex";
          p2Lost.style.display = "flex";
          updateScore(player1);
          menuSelection = 1;
          menuOption1.className = hover;
        }
      } else {
        controls.q.action();
      }
    }
    if (controls.Escape.active) {
      menuOption0.style.removeProperty(menuOption0.style.color);
      menuOption0.className = hover;
      menuSelection = 0;
      inGame = false;
      gamePaused = true;
      paused1.style.display = "flex";
      paused2.style.display = "flex";
    }
    if (player1.getYPos() === 350) {
      p1DoneButton.className = "fin-button-highlight";
    } else {
      p1DoneButton.className = "fin-button";
    }
    if (player2.getYPos() === 350) {
      p2DoneButton.className = "fin-button-highlight";
    } else {
      p2DoneButton.className = "fin-button";
    }
  } else if (!inGame) {
    if (gamePaused) {
      if (controls.ArrowUp.active) {
        if (menuSelection > 0 && !infoOpen) {
          menuSelection--;
          console.log(menuSelection);
        }
      }
      if (controls.ArrowDown.active) {
        if (menuSelection < 5 && !infoOpen) {
          menuSelection++;
          console.log(menuSelection);
        }
      }
    } else if (!gamePaused) {
      if (controls.ArrowUp.active) {
        if (menuSelection > 1 && !infoOpen) {
          menuSelection--;
          console.log(menuSelection);
        }
      }
      if (controls.ArrowDown.active) {
        if (menuSelection < 5 && !infoOpen) {
          menuSelection++;
          console.log(menuSelection);
        }
      }
    }

    if (controls.Enter.active) {
      if (menuSelection === 1) {
        goalBoardSetUp();
        inGame = true;
        gamePaused = false;
        menuSelection = 6;
        paused1.style.display = "none";
        paused2.style.display = "none";
        document.getElementById("continue-option").className =
          "menu-options inactive";
      } else if (menuSelection === 2) {
        if (infoOpen) {
          document.getElementById("rules-info").style.display = "none";
          infoOpen = false;
        } else {
          document.getElementById("rules-info").style.display = "block";
          infoOpen = true;
        }
      } else if (menuSelection === 3) {
        if (infoOpen) {
          document.getElementById("controls-info").style.display = "none";
          infoOpen = false;
        } else {
          document.getElementById("controls-info").style.display = "block";
          infoOpen = true;
        }
      } else if (menuSelection === 0) {
        inGame = true;
        gamePaused = false;
        menuSelection = 5;
        menuOption0.className = idle;
        paused1.style.display = "none";
        paused2.style.display = "none";
      } else if (menuSelection === 4) {
        resetScore();
      }
    }

    switch (menuSelection) {
      case 0:
        if (gamePaused) {
          menuOption0.className = hover;
        }
        menuOption1.className = idle;
        menuOption2.className = idle;
        menuOption3.className = idle;
        menuOption4.className = idle;
        menuOption5.className = idle;
        console.log("alternativ1");
        break;
      case 1:
        if (gamePaused) {
          menuOption0.className = idle;
        }
        menuOption1.className = hover;
        menuOption2.className = idle;
        menuOption3.className = idle;
        menuOption4.className = idle;
        menuOption5.className = idle;
        console.log("alternativ1");
        break;
      case 2:
        if (gamePaused) {
          menuOption0.className = idle;
        }
        menuOption1.className = idle;
        menuOption2.className = hover;
        menuOption3.className = idle;
        menuOption4.className = idle;
        menuOption5.className = idle;
        console.log("alternativ2");
        break;
      case 3:
        if (gamePaused) {
          menuOption0.className = idle;
        }
        menuOption1.className = idle;
        menuOption2.className = idle;
        menuOption3.className = hover;
        menuOption4.className = idle;
        menuOption5.className = idle;
        console.log("alternativ3");
        break;
      case 4:
        if (gamePaused) {
          menuOption0.className = idle;
        }
        menuOption1.className = idle;
        menuOption2.className = idle;
        menuOption3.className = idle;
        menuOption4.className = hover;
        menuOption5.className = idle;
        console.log("alternativ4");
        break;
      case 5:
        menuOption1.className = idle;
        menuOption2.className = idle;
        menuOption3.className = idle;
        menuOption4.className = idle;
        menuOption5.className = hover;
        console.log("alternativ5");
        break;
      case 6:
        if (gamePaused) {
          menuOption0.className = idle;
        }
        menuOption1.className = idle;
        menuOption2.className = idle;
        menuOption3.className = idle;
        menuOption4.className = idle;
        console.log("alternativ6");
        break;
    }
  }
}

//Eventlisteners for the keys setting active to true when pressed
document.addEventListener("keydown", (event) => {
  controls[event.key].active = true;
  updateGame();
});
//Eventlisteners for the keys setting active to false when key up
document.addEventListener("keyup", (event) => {
  controls[event.key].active = false;
});
