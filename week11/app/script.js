var startTime = new Date();

var character = document.getElementById("character");
var block = document.getElementById("block");
var game = document.getElementById("game");

var character_posX, character_posY;
var block_posX, block_posY;
var hitDistance = 50;
var endTime = 10000;
var hasBeenHit = false;

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

function jump() {
	character.classList.add("animate");
	setTimeout(function() {
		character.classList.remove("animate");
  },500);
}

setInterval(function() {
  character_posX = character.offsetLeft;
  character_posY = character.offsetTop;

  block_posX = block.offsetLeft;
  block_posY = block.offsetTop;
  
  if (distance(character_posX, character_posY, block_posX, block_posY) < hitDistance) {
    block.style="background: red;";
    hasBeenHit = true;
    
    // resets the hit switch so you don't permanently lose
    setTimeout(function() {
      hasBeenHit = false;
      startTime = new Date();
    }, 500);
  } else {
    block.style="background: green;";
  }
  
  var elapsedTime = new Date() - startTime;
  console.log(elapsedTime);
  
  if (elapsedTime > endTime && !hasBeenHit) {
    game.style="background: blue";
  }
}, 1/60*1000);