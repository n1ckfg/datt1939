"use strict";

class Cubes {
  
  constructor() {      
    this.lerpSpeed = 0.005;
    this.targetX = 500;
    this.targetY = 500;
    this.posX = 0;
    this.posY = 0;
    this.element = document.createElement("img");
    document.getElementsByTagName("body")[0].appendChild(this.element);
    this.element.src="https://cdn.glitch.com/bc38d950-a125-4fe6-b0fe-d14c62a4c914%2Fcubes.png?v=1604678942424";
    this.element.style="width: 100px; height: 100px; position: absolute; left: 100px; top: 500px;";
  }
  
  update() {
    this.posX = this.lerp(this.element.offsetLeft, this.targetX, this.lerpSpeed);
    this.posY = this.lerp(this.element.offsetTop, this.targetY, this.lerpSpeed);
    this.element.style.left = this.posX + "px";
    this.element.style.top = this.posY + "px";
        
    let dist = this.distance(this.element.offsetLeft, this.element.offsetTop, this.targetX, this.targetY);
    if (dist < 200) {
      this.targetX = Math.random() * 500;
      this.targetY = Math.random() * 500;
    }    
  }
  
  distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
  }
      
  lerp(start, end, value){
    return (1 - value) * start + value * end
  }

}