var tile = document.querySelectorAll('td');
var count = 0;
var result = [null, null, null, null, null, null, null, null, null];
var player = document.querySelectorAll('h3');
var p1Score = document.querySelector('#play1score');
var p2Score = document.querySelector('#play2score');
var resetBtn = document.querySelector('#reset');
var newGame = document.querySelector('#newGame')
var counterp1 = 0;
var counterp2 = 0;
var xwins;

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
  if (result[0] === 'X' && result[1] === 'X' && result[2] === 'X' ||
    result[3] === 'X' && result[4] === 'X' && result[5] === 'X' ||
    result[6] === 'X' && result[7] === 'X' && result[8] === 'X' ||
    result[0] === 'X' && result[3] === 'X' && result[6] === 'X' ||
    result[1] === 'X' && result[4] === 'X' && result[7] === 'X' ||
    result[2] === 'X' && result[5] === 'X' && result[8] === 'X' ||
    result[0] === 'X' && result[4] === 'X' && result[8] === 'X' ||
    result[2] === 'X' && result[4] === 'X' && result[6] === 'X'
  ) {
    counterp2 += 1;
    p2Score.textContent = Number(counterp2);
    alert('Player 2 Wins!')

  } else if (result[0] === 'O' && result[1] === 'O' && result[2] === 'O' ||
    result[3] === 'O' && result[4] === 'O' && result[5] === 'O' ||
    result[6] === 'O' && result[7] === 'O' && result[8] === 'O' ||
    result[0] === 'O' && result[3] === 'O' && result[6] === 'O' ||
    result[1] === 'O' && result[4] === 'O' && result[7] === 'O' ||
    result[2] === 'O' && result[5] === 'O' && result[8] === 'O' ||
    result[0] === 'O' && result[4] === 'O' && result[8] === 'O' ||
    result[2] === 'O' && result[4] === 'O' && result[6] === 'O') {
    counterp1 += 1;
    p1Score.textContent = Number(counterp1);
    alert('Player 1 Wins!')
  } else if (result.indexOf(null) === -1) {
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
  checkForMatch();
}

//listen for each click
tile.forEach(function(elem) {
  elem.addEventListener('click', checkEmptyTile);
})
//refactor to create just one event listener


//reset button
function resetButton(event) {
  for (var i = 0; i < tile.length; i++) {

    tile[i].classList.remove('O');
    tile[i].classList.remove('X');
    result = [null, null, null, null, null, null, null, null, null];

  }
}
resetBtn.addEventListener('click', resetButton);

// function newGame(event) {
//   debugger
//   p1Score.textContent = 0;
//   p2Score.textContent = 0;
//   resetButton()
//   }
//
// newGame.addEventListener('click', newGame);
