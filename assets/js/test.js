var K = "&#9819;";
var Q = "&#9818;";
var R = "&#9820;";
var B = "&#9821;";
var N = "&#9822;";
var P = "&#9823;";
var k = "&#9813;";
var q = "&#9812;";
var r = "&#9814;";
var b = "&#9815;";
var n = "&#9816;";
var p = "&#9817;";

var chessBoard = [
  [R, N, B, Q, K, B, N, R],
  [P, P, P, P, P, P, P, P],
  ['-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-','-'],
  [p, p, p, p, p, p, p, p],
  [r, n, b, q, k, b, n, r] ];

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
