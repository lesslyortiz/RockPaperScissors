//plays 3 rounds & returns winner

    var play1wins=0;
    var play2wins=0;
    var roundsPlayed=0;

function RPS(play1option){ 
    console.log("poop");
    oneRound(play1option, play2());

    if (roundsPlayed == 3){
        return checkWinner(play1wins, play2wins);
    }
}




//takes in two played options
//returns winning option or "tie" & increases winner points vars
function oneRound(play1, play2){
    if (play1===play2){
        return "tie";
    }
    else if (play1 == "rock"){
        if (play2 == "scissors") {
            play1wins++;
            console.log("player 1 wins");
            return play1;
        }
        else{
            return play2;
            console.log("player 2 wins");
            play2wins++;
        }
    }
    else if (play1 == "paper"){
        if (play2 == "rock") {
            play1wins++;
            return play1;
        }
        else{
            play1wins++;
            return play2;
        }        
    }
    else if (play1 == "scissors") {
        if (play2 == "paper") {
            play1wins++;
            return play1;
        }
        else{
            play1wins++;
            return play2;
        }        
    }
}

//returns random play for player 2
function play2(){
    let play = Math.floor(Math.random() * 3);
    if (play == 0){
        return "rock";
    }
    else if  (play == 1){
        return "paper";
    }  
    else if (play == 2){
        return "scissors";
    }     
}

//runs oneRound() 3 times & keeps track of wins
//returns winner or tie
function checkWinner(play1wins, play2wins){
    if (play1wins == play2wins){
        return "TIE!"
    }
    else if (play1wins < play2wins){
        return "player 2 won!"
    }
    else if (play1wins > play2wins){
        return "player 1 won!"
    }
}

 




