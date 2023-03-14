//GAME AREA
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//START

//PLAYER 🏎️
class Ball {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(100, 100, 35, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }
}
let balll = new Ball();
balll.draw();




//ANIMATION LOOP
