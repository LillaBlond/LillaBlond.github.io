
// Fucntion to add Random motivational quote depending on the day of the year.
const dailyMotivationalQuotes = function(){
        const randomizer = Math.floor(Math.random() * 30);
        const quotes = ["quote1",
        "quote2",
        "quote3",
        "quote4",
        "quote5",
        "quote6",
        "quote7",
        "quote8",
        "quote9",
        "quote10",
        "quote11",
        "quote12",
        "quote13",
        "quote14",
        "quote15",
        "quote16",
        "quote17",
        "quote18",
        "quote19",
        "quote20",
        "quote21",
        "quote22",
        "quote23",
        "quote24",
        "quote25",
        "quote26",
        "quote27",
        "quote28",
        "quote29",
        "quote30"];
        return quotes[randomizer];
}
const dailyQuote = dailyMotivationalQuotes();
document.getElementById("quote").innerHTML = dailyQuote;


/* 
FlippIt Game function

 1. On click check which squares are around it.
 2. Run script to change color on the clicked square and the squares around it.
 3. Add 1 to the click counter
 4. Check if all squares are the same color
        1. If all is not the same, do nothing. The game continues
        2. If All the same stop the game. Show the win screen
*/

