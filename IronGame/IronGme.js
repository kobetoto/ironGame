/*
██████   █████  ███    ███ ███████      █████  ██████  ███████  █████  
██       ██   ██ ████  ████ ██          ██   ██ ██   ██ ██      ██   ██ 
██   ███ ███████ ██ ████ ██ █████       ███████ ██████  █████   ███████ 
██    ██ ██   ██ ██  ██  ██ ██          ██   ██ ██   ██ ██      ██   ██ 
 ██████  ██   ██ ██      ██ ███████     ██   ██ ██   ██ ███████ ██   ██ 
                                                                        
 */
const myGameArea = {
  canvas : document.createElement("canvas"),
 
  start: function (){
    const canvas = this.canvas;//<canvas>
    canvas.width = 1200;
    canvas.height = 1000;
    this.context = canvas.getContext("2d");// dans myGameArea jai le context
    console.log('this.context=', this.context)
    document.body.appendChild(canvas);

    this.bgimage = document.createElement('img'); // <img />
    this.bgimage.src= 'https://cdn.discordapp.com/attachments/1084937735581741116/1085546667396313098/totodadababa_background_basketball_video_game_pixar_style_55b86151-eefa-4984-ac04-2216a23e1dbb.png'
    
  },
  draw: function(){ // toutes les 16ms🎦
    const ctx = this.context;//console.log('ctx=', ctx) =>DEBUG

    // clear
    ctx.clearRect(0,0,1200,1000);


    ctx.drawImage(this.bgimage,0,0,1200,1000); //draw=>bgimage=>backGround

    ball.draw(100,100);//draw=>ball
    hoop.draw(210, 375, 42, 9, 'red');
    board.draw(150,300,118,88,'blue');


    this.int = requestAnimationFrame(() => {this.draw()})// rappel toutes les 16ms la Function DRAW
  },
  stop: function () {
    cancelAnimationFrame(this.int)
  }
};

const myScoreBoard = {

  start: function (){
    const board = document.createElement('div')
    let logo = document.querySelector('div')
    document.body.appendChild(div);
  }

} 





/*
███████ ██      ███████ ███    ███ ███████ ███    ██ ████████ 
██      ██      ██      ████  ████ ██      ████   ██    ██    
█████   ██      █████   ██ ████ ██ █████   ██ ██  ██    ██    
██      ██      ██      ██  ██  ██ ██      ██  ██ ██    ██    
███████ ███████ ███████ ██      ██ ███████ ██   ████    ██   
*/
/*const player = {

  draw: function (x,y,w,h) {
    const ctx = myGameArea.context;
    ctx.drawImage();

  }
}*/

//ball 🏀
let ball = {

  draw: function (x,y) {

    const ctx = myGameArea.context;
    ctx.beginPath();
    ctx.arc(x, y, 23, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();

  }
}


//hoop 🗑️
class Hoop{
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.heigth = h;
    this.color = c;
  }
  draw(){
    const ctx = myGameArea.context;
    ctx.fillRect(this.x, this.y, this.width, this.heigth);
    ctx.fillStyle = this.color;
  }
}

const hoop = new Hoop(210, 375, 42, 9, 'orange'); //{x,y,width,heigth, color} (210, 375, 42, 9, '')

const board = new Hoop(150,300,118,88,'white'); //avec ou sans BORD????

/*
███████ ████████  █████  ██████  ████████ 
██         ██    ██   ██ ██   ██    ██    
███████    ██    ███████ ██████     ██    
     ██    ██    ██   ██ ██   ██    ██    
███████    ██    ██   ██ ██   ██    ██  
*/
document.getElementById('start-button').onclick = () => {
  myGameArea.start();
  myGameArea.draw();
  //myScoreBoard.start();
};

/*
 █████  ███    ██ ██ ███    ███  █████  ████████ ██  ██████  ███    ██     ██       ██████   ██████  ██████  
██   ██ ████   ██ ██ ████  ████ ██   ██    ██    ██ ██    ██ ████   ██     ██      ██    ██ ██    ██ ██   ██ 
███████ ██ ██  ██ ██ ██ ████ ██ ███████    ██    ██ ██    ██ ██ ██  ██     ██      ██    ██ ██    ██ ██████  
██   ██ ██  ██ ██ ██ ██  ██  ██ ██   ██    ██    ██ ██    ██ ██  ██ ██     ██      ██    ██ ██    ██ ██      
██   ██ ██   ████ ██ ██      ██ ██   ██    ██    ██  ██████  ██   ████     ███████  ██████   ██████  ██   
*/ 

//ANIMATION LOOP
