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
    document.body.appendChild(canvas);
    this.context = canvas.getContext("2d");// dans myGameArea jai le context //console.log('this.context=', this.context) ==> debug

    this.bgimage = document.createElement('img'); // <img />
    this.bgimage.src= 'https://cdn.discordapp.com/attachments/1084937735581741116/1085546667396313098/totodadababa_background_basketball_video_game_pixar_style_55b86151-eefa-4984-ac04-2216a23e1dbb.png'
    
  },
  draw: function(){ // toutes les 16ms🎦
    const ctx = this.context;//console.log('ctx=', ctx) =>DEBUG

    // clear
    ctx.clearRect(0,0,1200,1000);//🧽


    ctx.drawImage(this.bgimage,0,0,1200,1000); //draw=>bgimage=>backGround

    ball.draw(play1.x+140,play1.y+103);
    hoop.draw();
    play1.draw()
    //board.draw(150,300,118,88,'blue');
    this.int = requestAnimationFrame(() => {this.draw()})// rappel toutes les 16ms la Function DRAW
  },
  stop: function () {
    cancelAnimationFrame(this.int)
  },


};



/*
███████ ██      ███████ ███    ███ ███████ ███    ██ ████████ 
██      ██      ██      ████  ████ ██      ████   ██    ██    
█████   ██      █████   ██ ████ ██ █████   ██ ██  ██    ██    
██      ██      ██      ██  ██  ██ ██      ██  ██ ██    ██    
███████ ███████ ███████ ██      ██ ███████ ██   ████    ██   
*/

//⛹🏽‍♂️
class Player{
  constructor(x,y){
    this.x = 500;
    this.y = 500;
    
    const img = document.createElement('img');//<img>
    img.src = 'https://cdn.discordapp.com/attachments/968858711303004251/1085253910052208790/g1.png';
    
    
    img.addEventListener('load', () => {
      this.image = img  
    })
  } 
  draw(){
    const ctx = myGameArea.context
    if (!this.image) return
    ctx.drawImage(this.image, this.x,this.y,200,200)
  }
  
  animate(){
    this.draw();

    requestAnimationFrame(this.animate)
  }
  keydown() {document.addEventListener('keydown', function(event){
    console.log('keydown OK', event.keyCode)

    switch(event.keycode){
      case 37:
      play1.x -= 100  
      break;
    }
  })}
  }
let play1 = new Player()//{x,y,img(<img src="">)}






// 🏀
let ball = {

  draw: function (x,y) {

    const ctx = myGameArea.context;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
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

const hoop = new Hoop(300, 428, 47, 9, 'red'); //{x,y,width,heigth, color} (210, 375, 42, 9, '')

const board = new Hoop(150,300,118,88,'white'); /**********avec ou sans BORD????***********/

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
};

/*
 █████  ███    ██ ██ ███    ███  █████  ████████ ██  ██████  ███    ██     ██       ██████   ██████  ██████  
██   ██ ████   ██ ██ ████  ████ ██   ██    ██    ██ ██    ██ ████   ██     ██      ██    ██ ██    ██ ██   ██ 
███████ ██ ██  ██ ██ ██ ████ ██ ███████    ██    ██ ██    ██ ██ ██  ██     ██      ██    ██ ██    ██ ██████  
██   ██ ██  ██ ██ ██ ██  ██  ██ ██   ██    ██    ██ ██    ██ ██  ██ ██     ██      ██    ██ ██    ██ ██      
██   ██ ██   ████ ██ ██      ██ ██   ██    ██    ██  ██████  ██   ████     ███████  ██████   ██████  ██   
*/ 

//ANIMATION LOOP
