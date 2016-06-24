$(document).ready(function() {
    'use strict';

// declare variables for each chess piece using unicode
/* black king   */   var K = "&#9818";
/* white king   */   var k = "&#9812";
/* black queen  */   var Q = "&#9819";
/* white queen  */   var q = "&#9813";
/* black bishop */   var B = "&#9821";
/* white bishop */   var b = "&#9815";
/* black knight */   var N = "&#9822";
/* white knight */   var n = "&#9816";
/* black rook   */   var R = "&#9820";
/* white rook   */   var r = "&#9814";
/* black pawn   */   var P = "&#9823";
/* white pawn   */   var p = "&#9817";


// multi-dimensional arrays representing the location the pieces along each sequence of moves
    var moveSequence = [
        [																							// Initial board setup
            [R, N, B, Q, K, B, N, R],
            [P, P, P, P, P, P, P, P],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [p, p, p, p, p, p, p, p],
            [r, n, b, q, k, b, n, r]
        ],
        [																							// Move sequence #1
            [R, N, B, Q, K, B, N, R],
            [P, P, P, P, ' ', P, P, P],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', P, ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [p, p, p, p, p, p, p, p],
            [r, n, b, q, k, b, n, r]
        ],
        [																							// Move sequence #2
            [R, N, B, Q, K, B, N, R],
            [P, P, P, P, ' ', P, P, P],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', P, ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', n, ' ', ' ', ' ', ' ', ' '],
            [p, p, p, p, p, p, p, p],
            [r, ' ', b, q, k, b, n, r]
        ],
        [																							// Move sequence #3
            [R, N, B, Q, K, B, N, R],
            [P, P, P, P, ' ', ' ', P, P],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', P, P, ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', n, ' ', ' ', ' ', ' ', ' '],
            [p, p, p, p, p, p, p, p],
            [r, ' ', b, q, k, b, n, r]
        ],
        [																							// Move sequence #4
            [R, N, B, Q, K, B, N, R],
            [P, P, P, P, ' ', ' ', P, P],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', P, P, ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', n, p, ' ', ' ', ' ', ' '],
            [p, p, p, ' ', p, p, p, p],
            [r, ' ', b, q, k, b, n, r]
        ],
        [																							// Move sequence #5
            [R, N, B, Q, K, B, N, R],
            [P, ' ', P, P, ' ', ' ', P, P],
            [' ', P, ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', P, P, ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', n, p, ' ', ' ', ' ', ' '],
            [p, p, p, ' ', p, p, p, p],
            [r, ' ', b, q, k, b, n, r]
        ],
        [																							// Move sequence #6
            [R, N, B, Q, K, B, N, R],
            [P, ' ', P, P, ' ', ' ', P, P],
            [' ', P, ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', P, P, ' ', ' '],
            [' ', ' ', ' ', ' ', p, ' ', ' ', ' '],
            [' ', ' ', n, p, ' ', ' ', ' ', ' '],
            [p, p, p, ' ', ' ', p, p, p],
            [r, ' ', b, q, k, b, n, r]
        ],
        [																							// Move sequence #7
            [R, N, ' ', Q, K, B, N, R],
            [P, B, P, P, ' ', ' ', P, P],
            [' ', P, ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', P, P, ' ', ' '],
            [' ', ' ', ' ', ' ', p, ' ', ' ', ' '],
            [' ', ' ', n, p, ' ', ' ', ' ', ' '],
            [p, p, p, ' ', ' ', p, p, p],
            [r, ' ', b, q, k, b, n, r]
        ],
        [																							// Move sequence #8
            [R, N, ' ', Q, K, B, N, R],
            [P, B, P, P, ' ', ' ', P, P],
            [' ', P, ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', P, P, ' ', ' '],
            [' ', ' ', ' ', ' ', p, ' ', ' ', ' '],
            [' ', ' ', n, p, ' ', ' ', ' ', ' '],
            [p, p, p, b, ' ', p, p, p],
            [r, ' ', ' ', q, k, b, n, r]
        ],
        [																							// Move sequence #9
            [R, ' ', ' ', Q, K, B, N, R],
            [P, B, P, P, ' ', ' ', P, P],
            [' ', P, N, ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', P, P, ' ', ' '],
            [' ', ' ', ' ', ' ', p, ' ', ' ', ' '],
            [' ', ' ', n, p, ' ', ' ', ' ', ' '],
            [p, p, p, b, ' ', p, p, p],
            [r, ' ', ' ', q, k, b, n, r]
        ]
    ];


// keeps a count on the current move sequence
    var counter = 0;

// sets the board with initial piece positions
    for (var i = 0; i < 8; i++) {
        for (var f = 0; f < 8; f++) {

// creates the chess board of alternating squares
            document.getElementById("boardSet").innerHTML += "<div class='grid-box'>" + moveSequence[counter][i][f] + "</div>";

            if (i % 2 === 0 && f % 2 !== 0 || i % 2 !== 0 && f % 2 === 0) {

// provides a unique [X & Y] coordinate for each square
                $(".grid-box").eq(i * 8 + f).addClass("grid-box-2");

            } else {}
        }
    }

    document.querySelector("#back").addEventListener("click", function() {

// drops back one move sequence by subtracting 1 from the count
        if (counter > 0) {
            counter -= 1;
        } else {}

        console.log(counter);

// clears the board to allow room for the next move sequence
        document.getElementsByClassName('grid-box').innerHTML = null;

        for (var i = 0; i < 8; i++) {
            for (var f = 0; f < 8; f++) {

// sets the board with the piece positions of the current move sequence
                $(".grid-box").eq(i * 8 + f).html(moveSequence[counter][i][f]);
            }
        }
    });

// play from the current move sequence to the last move sequence
    document.querySelector("#play").addEventListener("click", function() {

        var initializeGame = setInterval(function() {
            if (counter < moveSequence.length - 1) {
                counter += 1;
            } else {
// signals a stop after the last move sequence
                clearInterval(initializeGame);
            }

            for (var i = 0; i < 8; i++) {
                for (var f = 0; f < 8; f++) {

// sets the board with the piece positions of the current move sequence
                    $(".grid-box").eq(i * 8 + f).html(moveSequence[counter][i][f]);
                }
            }
        }, 600);
    });

// advances forward one move sequence by adding 1 to the count
    document.querySelector("#forward").addEventListener("click", function() {

        if (counter < moveSequence.length - 1) {
            counter += 1;
        } else {}

        console.log(counter);

// clears the board to allow room for the next move sequence
        document.getElementsByClassName('grid-box').innerHTML = null;

        for (var i = 0; i < 8; i++) {
            for (var f = 0; f < 8; f++) {

// sets the board with the piece positions of the current move sequence
                $(".grid-box").eq(i * 8 + f).html(moveSequence[counter][i][f]);
            }
        }
    });
});
