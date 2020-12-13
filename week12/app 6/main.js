// character and block animation
var character;
var block;

var startTime;

var game;

var character_posX, character_posY;
var block_posX, block_posY;
var hitDistance;
var endTime;
var hasBeenHit;

var timerInterval;

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

function jump() {
	character.classList.add("animate");
	setTimeout(function() {
		character.classList.remove("animate");
  },500);
}