// Accessing the html elements
const square1_1 = document.getElementById("1:1");
const square1_2 = document.getElementById("1:2");
const square1_3 = document.getElementById("1:3");
const square1_4 = document.getElementById("1:4");
const square1_5 = document.getElementById("1:5");
const square1_6 = document.getElementById("1:6");
const square1_7 = document.getElementById("1:7");
const square1_8 = document.getElementById("1:8");
const square2_1 = document.getElementById("2:1");
const square2_2 = document.getElementById("2:2");
const square2_3 = document.getElementById("2:3");
const square2_4 = document.getElementById("2:4");
const square2_5 = document.getElementById("2:5");
const square2_6 = document.getElementById("2:6");
const square2_7 = document.getElementById("2:7");
const square2_8 = document.getElementById("2:8");
const square3_1 = document.getElementById("3:1");
const square3_2 = document.getElementById("3:2");
const square3_3 = document.getElementById("3:3");
const square3_4 = document.getElementById("3:4");
const square3_5 = document.getElementById("3:5");
const square3_6 = document.getElementById("3:6");
const square3_7 = document.getElementById("3:7");
const square3_8 = document.getElementById("3:8");
const square4_1 = document.getElementById("4:1");
const square4_2 = document.getElementById("4:2");
const square4_3 = document.getElementById("4:3");
const square4_4 = document.getElementById("4:4");
const square4_5 = document.getElementById("4:5");
const square4_6 = document.getElementById("4:6");
const square4_7 = document.getElementById("4:7");
const square4_8 = document.getElementById("4:8");
const square5_1 = document.getElementById("5:1");
const square5_2 = document.getElementById("5:2");
const square5_3 = document.getElementById("5:3");
const square5_4 = document.getElementById("5:4");
const square5_5 = document.getElementById("5:5");
const square5_6 = document.getElementById("5:6");
const square5_7 = document.getElementById("5:7");
const square5_8 = document.getElementById("5:8");
const square6_1 = document.getElementById("6:1");
const square6_2 = document.getElementById("6:2");
const square6_3 = document.getElementById("6:3");
const square6_4 = document.getElementById("6:4");
const square6_5 = document.getElementById("6:5");
const square6_6 = document.getElementById("6:6");
const square6_7 = document.getElementById("6:7");
const square6_8 = document.getElementById("6:8");
const square7_1 = document.getElementById("7:1");
const square7_2 = document.getElementById("7:2");
const square7_3 = document.getElementById("7:3");
const square7_4 = document.getElementById("7:4");
const square7_5 = document.getElementById("7:5");
const square7_6 = document.getElementById("7:6");
const square7_7 = document.getElementById("7:7");
const square7_8 = document.getElementById("7:8");
const square8_1 = document.getElementById("8:1");
const square8_2 = document.getElementById("8:2");
const square8_3 = document.getElementById("8:3");
const square8_4 = document.getElementById("8:4");
const square8_5 = document.getElementById("8:5");
const square8_6 = document.getElementById("8:6");
const square8_7 = document.getElementById("8:7");
const square8_8 = document.getElementById("8:8");

const startButton = document.getElementById("startButton");
const NewGameButton = document.getElementById("newGameButton");
const resetButton = document.getElementById("resetButton");
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

const blueSquareImage = "url('./Resources/Pictures/blue_square_1.png')";
const brownSquareImage = "url('./Resources/Pictures/blue_square_4.png')";
const blueHighlight = "url('./Resources/Pictures/blue_square_2.png')";
const brownHighlight = "url('./Resources/Pictures/blue_square_5.png')";

const gameBoardArray  = [square1_1, square1_2, square1_3, square1_4, square1_5, square1_6,
    square2_1, square2_2, square2_3, square2_4, square2_5, square2_6, 
    square3_1, square3_2, square3_3, square3_4, square3_5, square3_6,
    square4_1, square4_2, square4_3, square4_4, square4_5, square4_6,
    square5_1, square5_2, square5_3, square5_4, square5_5, square5_6,
    square6_1, square6_2, square6_3, square6_4, square6_5, square6_6];

//Board setup arrays
const testSetup = ["1:1", "1:2", "2:1"];
const setup1 = ["1:3", "2:3", "2:4", "2:5", "3:1", "3:2", "3:3", "3:5", "3:6", "4:2", "4:5", "5:1", "5:2", "5:3", "5:6", "6:3", "6:6"]
const setup2 = ["1:1","1:2","1:4","1:5","2:2","3:1","3:2","3:4","3:5","3:6","4:2","4:3","4:5","5:1","5:2","5:5","6:3","6:5"];
const setup3 = ["1:4","1:6","2:2","3:1","3:4","3:5","4:2","4:5","5:4","5:5","6:2","6:4","6:5"];
const setup4 = ["1:1","1:2","1:3","1:4","1:6","2:3","2:5","2:6","3:1","3:3","3:5","3:6","4:2","4:3","4:4","4:5","5:1","5:2","5:4","5:5","5:6","6:1","6:2","6:4","6:5","6:6"];
const setup5 = ["1:2","1:4","1:5","2:1","2:6","3:1","3:2","3:5","4:1","4:4","4:5","4:6","5:4","5:5"];
const setup6 = ["1:1","1:3","1:4","1:6","2:1","2:2","2:5","3:3","3:5","4:1","4:3","4:5","5:1","5:4","5:5","5:6","6:3"];
const setup7 = ["1:2","2:1","3:1","3:3","3:5","4:6","5:5","5:6","6:1","6:2","6:4","6:5"];
const setup8 = ["1:2","1:3","1:4","1:5","2:3","2:6","3:2","3:3","3:4","4:1","4:2","4:3","4:4","4:6","5:2","5:3","6:4"];
const setup9 = ["1:2","1:4","2:1","2:2","2:5","3:2","3:3","3:5","4:2","4:6","5:1","5:2","5:4","6:2","6:4","6:5"];
const setup10 = ["1:1","1:2","1:6","2:1","2:4","2:5","3:1","3:2","4:3","4:4","4:5","5:2","6:1","6:2","6:5"];

// Variables
let counter;
let active = false;
let lastBoardSetup;
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
// Function that flip the tile to opposite color
function flipTile(tile){
    if (tile.className === "square1" || tile.className === "square3") {
        tile.className = "square2";
    }
    else {
        tile.className = "square1";
    }
}

function highlight(tile){
    if(active){
        if(tile.className === "square1"){
            tile.className = "square3";
        }
        if(tile.className === "square2"){
            tile.className = "square4";
        }
    }
}

function deHighlight(tile){
    if(active){
        if(tile.className === "square3"){
            tile.className = "square1";
        }
       if((tile.className === "square4")){
            tile.className = "square2";
        }
    }
}

function increaseCounter() {
    counter++;
    clickCount.innerHTML = counter
    
}

function prepareBoard(){

    coverLeft.style.width = "0px";
    coverRight.style.width = "0px";
    counterTab.style.height ="50px";
    counterText.style.fontSize ="15px";
    startButton.remove();
    clickCount.style.fontSize = "20px";
    clickCount.style.paddingTop = "5px";
}

function startGame(){
    counter = 0;
    active = true;
    clickCount.innerHTML = counter
    counterTab.style.height ="50px";
    counterText.style.fontSize ="15px";
    setTimeout(function(){
        clickCount.style.fontSize = "20px";
        clickCount.style.paddingTop = "5px";
    }, 200);
    if(playArea.childElementCount === 5){
        gameBoardArray.forEach(element =>{
            playArea.appendChild(element)})
            document.getElementById("win_screen").remove();
            menu.appendChild(resetButton);
    }

}

function endGame(){
    active = false;
    clickCount.style.fontSize = "0px";
    clickCount.style.paddingTop = "0px";
    counterTab.style.height ="0px";
    counterText.style.fontSize ="0px";
    gameBoardArray.forEach(element =>{
        element.remove()
    });
    resetButton.remove();
    showEndScreen();
   

};


   
function showEndScreen(){
    const winScreen= document.createElement("div"); 
    winScreen.id = "win_screen";
    winScreen.innerHTML = `<h2>Congratulations!</h2>
            <p>You finished with <br>
            <span>${counter}</span> <br> Clicks</p>`;
    playArea.appendChild(winScreen);
    
}


function CheckStatus(){
    if(square1Class.length === 36){
        endGame();
    }

}

const setupRandomizer = () => {
    let newBoardSetup = Math.floor(Math.random()*10);
    while(newBoardSetup === lastBoardSetup){
       newBoardSetup = Math.floor(Math.random()*10)
    }
        return lastBoardSetup = newBoardSetup;
    
}

function BoardSetup(boardSetupValue){
    for(let i = 0; i < gameBoardArray.length; i++){
        if(gameBoardArray[i].className === "square2"){
            flipTile(gameBoardArray[i]);
        }
    }

    switch(boardSetupValue){
        case 0:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup1.includes(gameBoardArray[i].id)){
                    flipTile(gameBoardArray[i]);
                }
            }
        break;
        case 1:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup2.includes(gameBoardArray[i].id)){
                    flipTile(gameBoardArray[i]);
                }
            }
        break;
        case 2:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup3.includes(gameBoardArray[i].id)){
                    flipTile(gameBoardArray[i]);
                }
            }
        break;
        case 3:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup4.includes(gameBoardArray[i].id)){
                    flipTile(gameBoardArray[i]);
                }
            }
        break;
        case 4:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup5.includes(gameBoardArray[i].id)){
                    flipTile(gameBoardArray[i]);
                }
            }
        break;
        case 5:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup6.includes(gameBoardArray[i].id)){
                    flipTile(gameBoardArray[i]);
                }
            }
        break;
        case 6:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup7.includes(gameBoardArray[i].id)){
                    flipTile(gameBoardArray[i]);
                }
            }
        break;
        case 7:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup8.includes(gameBoardArray[i].id)){
                    flipTile(gameBoardArray[i]);
                }
            }
        break;
        case 8:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup9.includes(gameBoardArray[i].id)){
                    flipTile(gameBoardArray[i]);
                }
            }
        break;
        case 9:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup10.includes(gameBoardArray[i].id)){
                    flipTile(gameBoardArray[i]);
                }
            }
        break;
        case 10: // Setup for testing win screen only
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(testSetup.includes(gameBoardArray[i].id)){
                    flipTile(gameBoardArray[i]);
                }
            }
        break;
    }    
}


//What happens on click on game tiles
square1_1.onclick = function () {
    if(active){
    flipTile(square1_1);
    flipTile(square1_2);
    flipTile(square2_1);
    increaseCounter();
    CheckStatus();
    }
    
}
square1_2.onclick = function () {
    if(active){
    flipTile(square1_2);
    flipTile(square1_1);
    flipTile(square1_3);
    flipTile(square2_2);
    increaseCounter();
    CheckStatus();
    }
}
square1_3.onclick = function () {
    if(active){
    flipTile(square1_3);
    flipTile(square1_2);
    flipTile(square1_4);
    flipTile(square2_3);
    increaseCounter();
    CheckStatus();
    CheckStatus();
    }
}
square1_4.onclick = function () {
    if(active){
    flipTile(square1_4);
    flipTile(square1_3);
    flipTile(square1_5);
    flipTile(square2_4);
    increaseCounter();
    CheckStatus();
    }
}
square1_5.onclick = function () {
    if(active){
    flipTile(square1_5);
    flipTile(square1_4);
    flipTile(square1_6);
    flipTile(square2_5);
    increaseCounter();
    CheckStatus();
    }
}
square1_6.onclick = function () {
    if(active){
    flipTile(square1_6);
    flipTile(square1_5);
    flipTile(square2_6);
    increaseCounter();
    CheckStatus();
    }
}

square2_1.onclick = function () {
    if(active){
    flipTile(square2_1);
    flipTile(square2_2);
    flipTile(square1_1);
    flipTile(square3_1);
    increaseCounter();
    CheckStatus();
    }
}
square2_2.onclick = function () {
    if(active){
    flipTile(square2_2);
    flipTile(square2_1);
    flipTile(square2_3);
    flipTile(square1_2);
    flipTile(square3_2);
    increaseCounter();
    CheckStatus();
    }
}
square2_3.onclick = function () {
    if(active){
    flipTile(square2_3);
    flipTile(square2_2);
    flipTile(square2_4);
    flipTile(square1_3);
    flipTile(square3_3);
    increaseCounter();
    CheckStatus();
    }
}
square2_4.onclick = function () {
    if(active){
    flipTile(square2_4);
    flipTile(square2_3);
    flipTile(square2_5);
    flipTile(square1_4);
    flipTile(square3_4);
    increaseCounter();
    CheckStatus();
    }
}
square2_5.onclick = function () {
    if(active){
    flipTile(square2_5);
    flipTile(square2_4);
    flipTile(square2_6);
    flipTile(square1_5);
    flipTile(square3_5);
    increaseCounter();
    CheckStatus();
    }
}
square2_6.onclick = function () {
    if(active){
    flipTile(square2_6);
    flipTile(square2_5);
    flipTile(square1_6);
    flipTile(square3_6);
    increaseCounter();
    CheckStatus();
    }
}

square3_1.onclick = function () {
    if(active){
    flipTile(square3_1);
    flipTile(square3_2);
    flipTile(square2_1);
    flipTile(square4_1);
    increaseCounter();
    CheckStatus();
    }
}
square3_2.onclick = function () {
    if(active){
    flipTile(square3_2);
    flipTile(square3_1);
    flipTile(square3_3);
    flipTile(square2_2);
    flipTile(square4_2);
    increaseCounter();
    CheckStatus();
    }
}
square3_3.onclick = function () {
    if(active){
    flipTile(square3_3);
    flipTile(square3_2);
    flipTile(square3_4);
    flipTile(square2_3);
    flipTile(square4_3);
    increaseCounter();
    CheckStatus();
    }
}
square3_4.onclick = function () {
    if(active){
    flipTile(square3_4);
    flipTile(square3_3);
    flipTile(square3_5);
    flipTile(square2_4);
    flipTile(square4_4);
    increaseCounter();
    CheckStatus();
    }
}
square3_5.onclick = function () {
    if(active){
    flipTile(square3_5);
    flipTile(square3_4);
    flipTile(square3_6);
    flipTile(square2_5);
    flipTile(square4_5);
    increaseCounter();
    CheckStatus();
    }
}
square3_6.onclick = function () {
    if(active){
    flipTile(square3_6);
    flipTile(square3_5);
    flipTile(square2_6);
    flipTile(square4_6);
    increaseCounter();
    CheckStatus();
    }
}

square4_1.onclick = function () {
    if(active){
    flipTile(square4_1);
    flipTile(square4_2);
    flipTile(square3_1);
    flipTile(square5_1);
    increaseCounter();
    CheckStatus();
    }
}
square4_2.onclick = function () {
    if(active){
    flipTile(square4_2);
    flipTile(square4_1);
    flipTile(square4_3);
    flipTile(square3_2);
    flipTile(square5_2);
    increaseCounter();
    CheckStatus();
    }
}
square4_3.onclick = function () {
    if(active){
    flipTile(square4_3);
    flipTile(square4_2);
    flipTile(square4_4);
    flipTile(square3_3);
    flipTile(square5_3);
    increaseCounter();
    CheckStatus();
    }
}
square4_4.onclick = function () {
    if(active){
    flipTile(square4_4);
    flipTile(square4_3);
    flipTile(square4_5);
    flipTile(square3_4);
    flipTile(square5_4);
    increaseCounter();
    CheckStatus();
    }
}
square4_5.onclick = function () {
    if(active){
    flipTile(square4_5);
    flipTile(square4_4);
    flipTile(square4_6);
    flipTile(square3_5);
    flipTile(square5_5);
    increaseCounter();
    CheckStatus();
    }
}
square4_6.onclick = function () {
    if(active){
    flipTile(square4_6);
    flipTile(square4_5);
    flipTile(square3_6);
    flipTile(square5_6);
    increaseCounter();
    CheckStatus();
    }
}
square5_1.onclick = function () {
    if(active){
    flipTile(square5_1);
    flipTile(square5_2);
    flipTile(square4_1);
    flipTile(square6_1);
    increaseCounter();
    CheckStatus();
    }
}
square5_2.onclick = function () {
    if(active){
    flipTile(square5_2);
    flipTile(square5_1);
    flipTile(square5_3);
    flipTile(square4_2);
    flipTile(square6_2);
    increaseCounter();
    CheckStatus();
    }
}
square5_3.onclick = function () {
    if(active){
    flipTile(square5_3);
    flipTile(square5_2);
    flipTile(square5_4);
    flipTile(square4_3);
    flipTile(square6_3);
    increaseCounter();
    CheckStatus();
    }
}
square5_4.onclick = function () {
    if(active){
    flipTile(square5_4);
    flipTile(square5_3);
    flipTile(square5_5);
    flipTile(square4_4);
    flipTile(square6_4);
    increaseCounter();
    CheckStatus();
    }
}
square5_5.onclick = function () {
    if(active){
    flipTile(square5_5);
    flipTile(square5_4);
    flipTile(square5_6);
    flipTile(square4_5);
    flipTile(square6_5);
    increaseCounter();
    CheckStatus();
    }
}
square5_6.onclick = function () {
    if(active){
    flipTile(square5_6);
    flipTile(square5_5);
    flipTile(square4_6);
    flipTile(square6_6);
    increaseCounter();
    CheckStatus();
    }
}
square6_1.onclick = function () {
    if(active){
    flipTile(square6_1);
    flipTile(square6_2);
    flipTile(square5_1);
    increaseCounter();
    CheckStatus();
    }
}
square6_2.onclick = function () {
    if(active){
    flipTile(square6_2);
    flipTile(square6_1);
    flipTile(square6_3);
    flipTile(square5_2);
    increaseCounter();
    CheckStatus();
    }
}
square6_3.onclick = function () {
    if(active){
    flipTile(square6_3);
    flipTile(square6_2);
    flipTile(square6_4);
    flipTile(square5_3);
    increaseCounter();
    CheckStatus();
    }
}
square6_4.onclick = function () {
    if(active){
    flipTile(square6_4);
    flipTile(square6_3);
    flipTile(square6_5);
    flipTile(square5_4);
    increaseCounter();
    CheckStatus();
    }
}
square6_5.onclick = function () {
    if(active){
    flipTile(square6_5);
    flipTile(square6_4);
    flipTile(square6_6);
    flipTile(square5_5);
    increaseCounter();
    CheckStatus();
    }
}
square6_6.onclick = function () {
    if(active){
    flipTile(square6_6);
    flipTile(square6_5);
    flipTile(square5_6);
    increaseCounter();
    CheckStatus();
    }
}

startButton.onclick = function (){
    if(!active){
    prepareBoard();
    startGame();
    setTimeout(function(){
        active = true;
    }, 700);
    graphBoard.style.top = "-120px";
    BoardSetup(setupRandomizer());
    }
}

resetButton.onclick = function (){
    if(active){
        startGame();
        BoardSetup(lastBoardSetup);
    }
}

NewGameButton.onclick = function (){
        startGame();
        BoardSetup(setupRandomizer());
}

//hover effects



gameBoardArray.forEach(element => {
    element.addEventListener("mouseover", () => {
        highlight(element)});
    }
)

gameBoardArray.forEach(element => {
    element.addEventListener("mouseout", () => {
        deHighlight(element)});
    }
)

