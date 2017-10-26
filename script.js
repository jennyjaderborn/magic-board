
var contentDiv = document.getElementById('content');

var board = document.createElement('div');
board.className = 'board';


//Lägg till sist 
contentDiv.appendChild(board);

for(var y = 0; y < 8; y++) {
    addRowToBoard();
}

function addRowToBoard () {
    var row = document.createElement('div');
    row.className = 'row';
    
        //t ex 1%2 går inte att dela, 1 finns kvar eller 2%2, 0 finns kvar, 3%2, 1 finns kvar 
    if (y%2) {
        row.style.backgroundColor = 'black';
    } else {
        row.style.backgroundColor = 'white';   
    }
    
        board.appendChild(row);
    }






