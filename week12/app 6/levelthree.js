character = document.getElementById("character_3");
block = document.getElementById("block");

startTime = new Date();

game = document.getElementById("game");

character_posX, character_posY;
block_posX, block_posY;
hitDistance = 50;
endTime = 10000;
hasBeenHit = false;

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
    game.style="background: purple";
  }
}, 1/60*1000);

