// going about this a different way
// need to incorporate x-axis & y-axis in order to run game play

function print(){
   "use strict";

    var rankX = ["a", "b", "c", "d", "e", "f", "g", "h"];
    document.write('<table>');
    var index = 0;

       .each(function(rank, key) {
        document.write("<tr>");
        var fileY = 1;

       .each(function(box, k) {
        var boxId = rankX[index] + fileY;
        document.write("<td id=" + boxId + ">" + box + "</td>")
        fileY++;

    });
