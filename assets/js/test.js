var chessBoard = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  ['X','O','X','O','X','O','X','O'],
  ['O','X','O','X','O','X','O','X'],
  ['X','O','X','O','X','O','X','O'],
  ['O','X','O','X','O','X','O','X'],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

console.log(chessBoard.join('\n') + '\n\n');

function print(message) {
  document.write(message);
}

function setPieces( chessBoard ) {
var sqGrid="<table border=2>";
for (var y=0; y<chessBoard.length; y++ ) {        // for loop over the rows
  sqGrid += "<tr>";
  for (var x=0; x<chessBoard[y].length; x++ ) {         // for loop over the columns
	  sqGrid += "<td>" + chessBoard[y][x] + "</td>";
  }
  sqGrid += "</tr>";
}
sqGrid += "</table>";
print(sqGrid);
}

setPieces(chessBoard);
