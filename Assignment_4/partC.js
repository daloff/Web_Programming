var grid = [];
var state = 'waitingForStart';
var matches = 0;

var memorizationTime;
var memorizationTimer;
var gameTime;
var gameTimer;
var clickTimer;

var numPics;

function Picture(image) {
  this.matched = false;
  this.image = image;
};

var selected  = { i: null, j: null };

function start() {

  var instructions = document.getElementById('instructions');
  var matchTable = document.getElementById('matchTable');
  var picSelect = document.getElementById('picSelect');
  var secsSelect = document.getElementById('secsSelect');

  numPics = picSelect.value;
  memorizationTime = secsSelect.value;
  gameTime = numPics * 15;

  var picList = [];
  for (var i = 1; i <= numPics; i++) {
    picList.push( new Picture("img/" + i + ".jpg") );
    picList.push( new Picture("img/" + i + ".jpg") );
  }
 
  for (var i = 0; i < 4; i++) {
    grid[i] = [];
    var newRow = matchTable.insertRow();
    for (var j = 0; j < (numPics / 2); j++) {
      grid[i][j] = picList.splice(Math.floor(Math.random() * picList.length), 1)[0];
      var newCell = newRow.insertCell(0);
      newCell.innerHTML = '<img src="' + grid[i][j].image + '" id="' + i + j + '" onclick="picClicked(' + i + ',' + j + ')" />';
    }
  }

  instructions.style.display = 'none';

  state = 'memorization';
  timerText.innerHTML = "Memorization time left: " + memorizationTime;
  memorizationTimer = window.setInterval(memorizationTick, 1000);
}

function memorizationTick() {
  memorizationTime--;

  var timerText = document.getElementById('timerText');
  timerText.innerHTML = "Memorization time left: " + memorizationTime;

  if ( memorizationTime == 0 ) {
    window.clearInterval(memorizationTimer);
    beginPlay();
  }
}

function beginPlay() {

  hideImages();

  state = 'waitingForClick';
  timerText.innerHTML = "Time left: " + gameTime;
  gameTimer = window.setInterval(gameTick, 1000);

}

function gameTick() {
  gameTime--;

  var timerText = document.getElementById('timerText');
  timerText.innerHTML = "Time left: " + gameTime;

  if ( gameTime <= 0 ) {
    lose();
  }
}

function hideImages() {
  for (var i in grid) {
    for (var j in grid[i]) {
      if ( !grid[i][j].matched ) {
        var image = document.getElementById(''+i+j);
        image.src = 'img/qs.jpg';
      }
    }
  }
}

function picClicked(i, j) {

  if ( state == 'waitingForClick' ) {
    state = 'image1Selected';
    selected.i = i;
    selected.j = j;
    var image = document.getElementById(''+i+j);
    image.src = grid[i][j].image;

  } else if ( state == 'image1Selected' ) {

    state = 'image2Selected';
    var image = document.getElementById(''+i+j);
    image.src = grid[i][j].image;

    if ( grid[i][j].image == grid[selected.i][selected.j].image ) {
      grid[i][j].matched = true;
      grid[selected.i][selected.j].matched = true;
      selected.i = null;
      selected.j = null;
      matches++;

      if ( matches == numPics ) {
        win();
      }

      state = 'waitingForClick'
    } else {
      state = 'incorrectMatch';
      clickTimer = window.setTimeout(incorrectMatch, 3000)
    }

  }

}

function incorrectMatch() {
  hideImages();
  state = 'waitingForClick';
}

function win() {
  state = 'waitingForStart';
  window.clearInterval(gameTimer);
  window.clearTimeout(incorrectMatch)
  var timerText = document.getElementById('timerText');
  timerText.innerHTML = "YOU WON IN " + gameTime + " SECONDS! <a href='partC.html'>Play again?</a>";
}

function lose() {
  state = 'waitingForStart';
  window.clearInterval(gameTimer);
  window.clearTimeout(incorrectMatch)
  var timerText = document.getElementById('timerText');
  timerText.innerHTML = "YOU LOSE :( <a href='partC.html'>Play again?</a>";
}
