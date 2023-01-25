let player1 = 6;
let player2 = 6;

function start() {

// toggles styling for 3 and 5 off when starting a new roll (start)
    display3or5(player1, "#player1");
    display3or5(player2, "#player2");

// toggles styling for 3 and 5 off when starting a new roll (end)


    function getPlayerNum() {
        let result = Math.floor((Math.random() * 6)) + 1;
        return result;
    }
    
    player1 = getPlayerNum();
    player2 = getPlayerNum();
    
    
    // changes visual dice start -----
    function changeDie(playerNum, player) {
        let currentNum = document.querySelectorAll(`${player} div`).length;
        console.log("start " + currentNum);
    
        // resets dice number
        for (let i = 0; i < (6 - currentNum); i++) {
            document.querySelector(`${player}`).appendChild(document.createElement("div"));
            console.log("add");
        }

        // saves 6 as current num
        currentNum = document.querySelectorAll(`${player} div`).length;
        console.log("reset " + currentNum);
    
        // removes dice dots
        for (let i = 0; i < (6 - playerNum); i++) {
            document.querySelector(`${player}`).removeChild(document.querySelector(`${player} div`));
        }
    
        // currentNum = document.querySelectorAll(`${player} div`).length;
    }
    
    // changes visual dice end -----
    
    changeDie(player1, "#player1");
    changeDie(player2, "#player2");
    
    
    document.querySelector("#player1-space p").textContent = `${player1}`;
    document.querySelector("#player2-space p").textContent = `${player2}`;
    
    
    // adjusts display for 3 and 5 start ----
    
    function display3or5(player, playerid) {
        if (player === 3) {
            document.querySelector(`${playerid}`).classList.toggle("three");
        } else if (player === 5) {
            document.querySelector(`${playerid}`).classList.toggle("five");
        }
    }
    
    display3or5(player1, "#player1");
    display3or5(player2, "#player2");
    
    // adjusts display for 3 and 5 end ------
    
    
    // Announces the winner
    
    function announcer(player1, player2) {
        let announcerP = document.querySelector(".result-container p");
        if (player1 > player2) {
            announcerP.textContent = "🚩  Player 1 Wins";
        } else if (player2 > player1) {
            announcerP.textContent = "Player 2 Wins  🚩";
        } else {
            announcerP.textContent = "Draw!";
        }
    }
    
    announcer(player1, player2);
}

let roll = document.querySelector("#roll");
roll.addEventListener("click", start); 