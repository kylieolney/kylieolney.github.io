let xTurn = true;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;
    
    if (!currentMark) {
        if(xTurn) {
            document.getElementById(buttonId).innerHTML = "X";
            //change color of button for X
            document.getElementById(buttonId).style = "background-color: #4A2437; color: white; font-size: x-large;";
            //tell the user is is now O's turn
            document.getElementById('turn').innerHTML = "O";
        }
        else {
            document.getElementById(buttonId).innerHTML = "O";
            //change color of button for O
            document.getElementById(buttonId).style = "background-color: #1B3437; color: white; font-size: x-large;";
            //tell the user is is now X's turn           
            document.getElementById('turn').innerHTML = "X";
        }
        xTurn = !xTurn;
        checkWin();
    }
}

function checkWin() {
    //get every element from the document
        //row 1
    let a1 = document.getElementById('a1').innerHTML;
    let b1 = document.getElementById('b1').innerHTML;
    let c1 = document.getElementById('c1').innerHTML;
        //row 2
    let a2 = document.getElementById('a2').innerHTML;
    let b2 = document.getElementById('b2').innerHTML;
    let c2 = document.getElementById('c2').innerHTML;
        //row 3
    let a3 = document.getElementById('a3').innerHTML;
    let b3 = document.getElementById('b3').innerHTML;
    let c3 = document.getElementById('c3').innerHTML;
    //a bunch of if statements(have to do it this way; no arrays)
        //options for winning
                // --a1 == a2 == a3
                // --b1 == b2 == b3
                // --c1 == c2 == c3
                // --a1 == b1 == c1
                // --a2 == b2 == c2
                // --a3 == b3 == c3
                // --a1 == b2 == c3
                // --a3 == b2 == c1
    //Check 'X' wins
    if(a1 == b1 && b1 == c1 && a1 == 'X') {
        document.getElementById('winOrLose').innerHTML = "X Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(a2 == b2 && b2 == c2 && a2 == 'X') {
        document.getElementById('winOrLose').innerHTML = "X Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(a3 == b3 && b3 == c3 && a3 == 'X') {
        document.getElementById('winOrLose').innerHTML = "X Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(a1 == a2 && a2 == a3 && a1 == 'X') {
        document.getElementById('winOrLose').innerHTML = "X Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(b1 == b2 && b2 == b3 && b1 == 'X') {
        document.getElementById('winOrLose').innerHTML = "X Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(c1 == c2 && c2 == c3 && c1 == 'X') {
        document.getElementById('winOrLose').innerHTML = "X Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(a1 == b2 && b2 == c3 && a1 == 'X') {
        document.getElementById('winOrLose').innerHTML = "X Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(a3 == b2 && b2 == c1 && c1 == 'X') {
        document.getElementById('winOrLose').innerHTML = "X Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }

    //Check 'O' wins
    if(a1 == b1 && b1 == c1 && a1 == 'O') {
        document.getElementById('winOrLose').innerHTML = "O Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(a2 == b2 && b2 == c2 && a2 == 'O') {
        document.getElementById('winOrLose').innerHTML = "O Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(a3 == b3 && b3 == c3 && a3 == 'O') {
        document.getElementById('winOrLose').innerHTML = "O Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(a1 == a2 && a2 == a3 && a1 == 'O') {
        document.getElementById('winOrLose').innerHTML = "O Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(b1 == b2 && b2 == b3 && b1 == 'O') {
        document.getElementById('winOrLose').innerHTML = "O Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(c1 == c2 && c2 == c3 && c1 == 'O') {
        document.getElementById('winOrLose').innerHTML = "O Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(a1 == b2 && b2 == c3 && a1 == 'O') {
        document.getElementById('winOrLose').innerHTML = "O Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    if(a3 == b2 && b2 == c1 && c1 == 'O') {
        document.getElementById('winOrLose').innerHTML = "O Wins!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }
    //If all spaces are full, but no one won.
    else if(a1 && a3 && a3 && b1 && b2 && b3 && c1 && c2 && c3){
        document.getElementById('winOrLose').innerHTML = "You Tied!!";
        //clear turn button
        document.getElementById('turn').innerHTML = " "
    }



}

function resetGame() {
    //reset everything to ''
    //clear the coloring
    document.getElementById('a1').innerHTML = "";
    document.getElementById('a1').style = "background-color: revert;";

    document.getElementById('b1').innerHTML = "";
    document.getElementById('b1').style = "background-color: revert;";

    document.getElementById('c1').innerHTML = "";
    document.getElementById('c1').style = "background-color: revert;";

    document.getElementById('a2').innerHTML = "";
    document.getElementById('a2').style = "background-color: revert;";

    document.getElementById('b2').innerHTML = "";
    document.getElementById('b2').style = "background-color: revert;";

    document.getElementById('c2').innerHTML = "";
    document.getElementById('c2').style = "background-color: revert;";

    document.getElementById('a3').innerHTML = "";
    document.getElementById('a3').style = "background-color: revert;";

    document.getElementById('b3').innerHTML = "";
    document.getElementById('b3').style = "background-color: revert;";

    document.getElementById('c3').innerHTML = "";
    document.getElementById('c3').style = "background-color: revert;";
    
    //restart turn button to X
    document.getElementById('turn').innerHTML = "X"

    //clear the win screen
    document.getElementById('winOrLose').innerHTML = "";

}

