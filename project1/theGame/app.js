// console.log('sanitycheck')
var tile = document.querySelectorAll('td');
var count = 0;
var result = [null, null, null, null, null, null, null, null, null]
var winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

var checkEmptyTile = function(event) {
  // debugger
  var cell = event.target
  cellId = Number(cell.id)

  if (result[cellId] === null) {
    playerTurn(event);
  } else {
    console.log('cant click here')
  }
}

var checkForMatch = function() {
  // debugger
  if (result[0] === 'X' && result[1] === 'X' && result[2] === 'X' ||
    result[3] === 'X' && result[4] === 'X' && result[5] === 'X' ||
    result[6] === 'X' && result[7] === 'X' && result[8] === 'X' ||
    result[0] === 'X' && result[3] === 'X' && result[6] === 'X' ||
    result[1] === 'X' && result[4] === 'X' && result[7] === 'X' ||
    result[2] === 'X' && result[5] === 'X' && result[8] === 'X' ||
    result[0] === 'X' && result[4] === 'X' && result[8] === 'X' ||
    result[2] === 'X' && result[4] === 'X' && result[6] === 'X'
  ) {
    console.log('xwins')
  } else if (result[0] === 'O' && result[1] === 'O' && result[2] === 'O' ||
    result[3] === 'O' && result[4] === 'O' && result[5] === 'O' ||
    result[6] === 'O' && result[7] === 'O' && result[8] === 'O' ||
    result[0] === 'O' && result[3] === 'O' && result[6] === 'O' ||
    result[1] === 'O' && result[4] === 'O' && result[7] === 'O' ||
    result[2] === 'O' && result[5] === 'O' && result[8] === 'O' ||
    result[0] === 'O' && result[4] === 'O' && result[8] === 'O' ||
    result[2] === 'O' && result[4] === 'O' && result[6] === 'O') {
    console.log('owins')
  }

}




function playerTurn(event) {
  var cell = event.target
  cellId = Number(cell.id)
  count++
  if (count % 2 === 0) {
    event.target.classList.add('X');
    result[cellId] = 'X'
  } else {
    // Add O to board
    event.target.classList.add('O')
    result[cellId] = 'O'
  }
  console.log('eventtarget: ', cell);
  console.log('cellId: ', cellId);
  console.log('result');
  checkForMatch();
}





tile.forEach(function(elem) {
  elem.addEventListener('click', checkEmptyTile);
})

// function checkForMatch() {
//  // debugger
//  if (result[0] === 'X' && result[1] === 'X' && result[2] === 'X' || result[3] === 'X' && result[4] === 'X' && result[5] === 'X' || result[6] === 'X' && result[7] === 'X' && result[8] === 'X') {
//    console.log('x wins');
//  } else if (result[0] === 'O' && result[1] === 'O' && result[2] === 'O' || result[3] === 'O' && result[4] === 'O' && result[5] === 'O' || result[6] === 'O' && result[7] === 'O' && result[8] === 'X') {
//    console.log('O wins');
//  }
// }
// // match();
// // var match = function (result, winCombo1) {
// //   debugger
// //     if (result[0] === winCombo1 && result[1] === winCombo1 && result[2] === winCombo1) {
// //         // for (var i = 0; i < result.length; i++) {
// //           console.log('match');
// //         }
// //     // }
// //      else {
// //        console.log('no match');
// //         }
// //     }
//
//
// // for (var i = 0; i < tile.length; i++) {
// //   tile.addEventListener('click', clickHandler);
// // }
// // tile.forEach(function(elem) {
// //   elem.addEventListener('click',gridClickHandler);
// // })
// // var numberOfPlayers = 2;
// // var player1 = 'X'
// // var player2 = 'O'
// // var currentPlayer = 0;
// // var points1 = 0; // player 1 points
// // var points2 = 0; // player 2 points
// // var size = 3;
// ///WINNING COMBINATIONS
// // var winningCombinations = [
// //   [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
// // ]
// //add X to board
//
//
// //keep track of players position
