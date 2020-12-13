// character and block animation
character = document.getElementById("character");
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
    game.style="background: blue";
  }
}, 1/60*1000);

timerInterval = null; // the timer that changes opacity every 0.1 seconds.      

function StartTimer() 
{
    //disable the button
    document.getElementById('startOpacityTimerButton').disabled=true;
    timerInterval = window.setInterval(ChangeOpacity, 100);
}

function StopTimer() 
{
    window.clearInterval(timerInterval);
    timerInterval = 0;
}

function ChangeOpacity() 
{
    var object = document.getElementById('opacityZone');
    var currentOpacity  = (+object.style.opacity);
    var newOpacity = currentOpacity + 0.1;
    object.style.opacity = newOpacity;
    if(newOpacity == 1.0)
    {StopTimer();}
}
