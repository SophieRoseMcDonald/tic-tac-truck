// console.log('sanitycheck')
var tile = document.querySelectorAll('td');
var count = 0;
var result = [null, null, null, null, null, null, null, null, null, ]
var winningCombinations = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// var numberOfPlayers = 2;
// var player1 = 'X'
// var player2 = 'O'
// var currentPlayer = 0;
// var points1 = 0; // player 1 points
// var points2 = 0; // player 2 points
// var size = 3;
///WINNING COMBINATIONS
// var winningCombinations = [
//   [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
// ]
//add X to board

function playerTurn(event) {

  var cell = event.target
  cellId = Number(cell.id)

  count++
  if (count % 2 === 0) {
    event.target.classList.add('X');
    // result.push('X')
    result[cellId] = 'x'
  } else {
    // Add O to board
    event.target.classList.add('O')
    // result.push('O')
    result[cellId] = 'o'
  }
  console.log(cell);
  console.log(cellId);
  console.log(result);
}

var isEqual = function (result, cellId) {

    if (result === cellId) {
        for (var i = 0; i < result.length; i++) {
          console.log('match');
        }
    } else {
       console.log('no match');
        }
    }


// for (var i = 0; i < tile.length; i++) {
//   tile.addEventListener('click', clickHandler);
// }
// tile.forEach(function(elem) {
//   elem.addEventListener('click',gridClickHandler);
// })
tile.forEach(function(elem) {
  elem.addEventListener('click', playerTurn);
})

//keep track of players position
