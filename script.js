var nrOfSquares = 8; //används för mer tydlig kod eller om du vill ändra 8

var contentDiv = document.getElementById('content');

var board = document.createElement('div');
board.className = 'board';


//Lägg till sist 
contentDiv.appendChild(board);

for(var y = 0; y < nrOfSquares; y++) {
    var row = addRowToBoard();
    
    for(var x = 0; x < nrOfSquares; x++) {
        var square = document.createElement('div');
        square.className = 'square';
    
        if ( (x+y) % 2) {
            square.style.backgroundColor = 'black';
        } else {
            square.style.backgroundColor = 'white';
        }
        row.appendChild(square);
    }
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
        return row; //skickar tillbaka row, för att komma åt row där uppe, annars säger den att row inte finns
    }

    
   








