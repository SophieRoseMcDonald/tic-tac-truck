// console.log('sanitycheck')
var tile = document.querySelectorAll('td');
var count = 0;
var result = [null, null, null, null, null, null, null, null, null]
var player = document.querySelectorAll('h3')
// var winningCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

//Allow only one token per tile
var checkEmptyTile = function(event) {
  var cell = event.target
  cellId = Number(cell.id)

  if (result[cellId] === null) {
    playerTurn(event);
  } else {
    alert('Please select another tile')
  }
}

//check for winning combinations
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
    alert('Player 2 Wins!')
  } else if (result[0] === 'O' && result[1] === 'O' && result[2] === 'O' ||
    result[3] === 'O' && result[4] === 'O' && result[5] === 'O' ||
    result[6] === 'O' && result[7] === 'O' && result[8] === 'O' ||
    result[0] === 'O' && result[3] === 'O' && result[6] === 'O' ||
    result[1] === 'O' && result[4] === 'O' && result[7] === 'O' ||

    result[2] === 'O' && result[5] === 'O' && result[8] === 'O' ||
    result[0] === 'O' && result[4] === 'O' && result[8] === 'O' ||
    result[2] === 'O' && result[4] === 'O' && result[6] === 'O') {
    alert('Player 1 Wins!')
  } else if (result.indexOf(null) === -1){
    alert('It looks like a tie')
  }


}



// execute each players turn
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




//listen for each click
tile.forEach(function(elem) {
  elem.addEventListener('click', checkEmptyTile);
})
