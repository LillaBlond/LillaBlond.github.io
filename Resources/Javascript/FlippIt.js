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



const startButton = document.getElementById("startButton");
const instructions = document.getElementById("instructions");
const newGameButton = document.getElementById("newGameButton");
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
const recordValue = document.getElementById("recordValue");

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
const testSetup2 = ["1:3","1:4","1:5","1:6","2:2","2:3","2:4","2:5","2:6","3:1","3:2","3:3","3:4","3:5","3:6","4:1","4:2","4:3","4:4","4:5","4:6","5:1","5:2","5:3","5:4","5:5","5:6","6:1","6:2","6:3","6:4","6:5","6:6"];
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
let freeze = false;
let lastBoardSetup;
let record = 0;

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
        tile.style.transform = "rotateY(180deg)";
        tile.style.transition = "0.5s";
        freeze = true;
        setTimeout(() => {
            tile.style.transform = "";
            tile.style.transition = "";
            freeze = false;
            }, 300);
    }
    else {
        tile.className = "square1";
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

function flipTileBoard(tile){
    if (tile.className === "square1" || tile.className === "square3") {
        tile.className = "square2";
    }
    else {
        tile.className = "square1";
    }
}

function highlight(tile){
    if(active){
        tile.style.cursor = "pointer";
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
        tile.style.cursor = "";
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

function saveRecord(){
        record = counter;
        recordValue.innerHTML = `${record}`;
}

function prepareBoard(){

    coverLeft.style.width = "0px";
    coverRight.style.width = "0px";
    setTimeout(function(){
        coverLeft.remove();
        coverRight.remove();
    }, 1100);
    startButton.remove();
    instructions.remove();
}

function startGame(){
    counter = 0;
    active = true;
    clickCount.innerHTML = counter
    clickCount.style.fontSize = "20px";
    clickCount.style.paddingTop = "5px";
    counterTab.style.height ="50px";
    counterText.style.fontSize ="15px";
    if(playArea.childElementCount === 1){
        gameBoardArray.forEach(element =>{
            element.style.transition = "";
            element.style.opacity = "";
            playArea.appendChild(element)})
            document.getElementById("win_screen").remove();
            menu.appendChild(resetButton);
    }
    if(counter){
        recordValue.innerHTML = record;}

}

function endGame(){
    active = false;
    clickCount.style.fontSize = "0px";
    clickCount.style.paddingTop = "0px";
    counterTab.style.height ="0px";
    counterText.style.fontSize ="0px";
    gameBoardArray.forEach(element =>{
        element.style.transition = "1s";
        element.style.opacity = "0";
    });
    setTimeout(() =>{
    showEndScreen()
    gameBoardArray.forEach(element =>{
        element.remove()
    });
    resetButton.remove();}, 700);
    if(record === 0 || counter < record){
        saveRecord();
    }
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
    if(square1Class.length === 36 || square2Class.length === 36){
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
            flipTileBoard(gameBoardArray[i]);
        }
    }

    switch(boardSetupValue){
        case 0:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup1.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
        break;
        case 1:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup2.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
        break;
        case 2:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup3.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
        break;
        case 3:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup4.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
        break;
        case 4:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup5.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
        break;
        case 5:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup6.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
        break;
        case 6:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup7.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
        break;
        case 7:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup8.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
        break;
        case 8:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup9.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
        break;
        case 9:
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(setup10.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
        break;
        case 10: // Setup for testing win with blue squares screen only
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(testSetup.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
            return lastBoardSetup = 10;
        break;
        case 11: // Setup for testing win screen with yellow squares only
            for(let i = 0; i < gameBoardArray.length ; i++){
                if(testSetup2.includes(gameBoardArray[i].id)){
                    flipTileBoard(gameBoardArray[i]);
                }
            }
        break;
    }    
}


//clicking on game tiles funtionality

gameBoardArray.forEach(element => {
    element.addEventListener("click", () =>{
        if(active && !freeze){
            switch(element){
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
    })
})

startButton.onclick = function (){
    if(!active){
    prepareBoard();
    startGame();
    setTimeout(function(){
        active = true;
    }, 700);
    graphBoard.style.top = "-120px";
    setTimeout(()=>{
        document.getElementsByTagName("h1")[0].style.transition = "1s";
        document.getElementsByTagName("h1")[0].style.textShadow = "3px 3px 6px black";
    }, 500);
    
    BoardSetup(setupRandomizer());
    }
}

resetButton.onclick = function (){
    if(active){
        startGame();
        BoardSetup(lastBoardSetup);
    }
}

newGameButton.onclick = function (){
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

