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
  draw: function(){ // BOUCLE D'ANIMATION --> toutes les 16ms🎦

    const ctx = this.context;//console.log('ctx=', ctx) =>DEBUG
 
    ctx.clearRect(0,0,1200,1000);//🧽

    ctx.drawImage(this.bgimage,0,0,1200,1000); //draw=>bgimage=>backGround

    document.addEventListener('keydown' , (e) => {    
      switch(e.keyCode){
        case 38:
          console.log("coucou");
          play1.y -= 0.01;  
          break;
        case 40:
          play1.y += 0.01;  
          break;
        case 37:
          play1.x -= 0.1;  
          break;
        case 39:
          play1.x += 0.1;  
          break;
      }
    });

    play1.newPos();
    play1.draw();
    board.draw();
    hoop.draw();
    ball.draw(play1.x+100,play1.y+80);


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

    this.speedX = 0;
    this.speedY = 0;

    
    const img = document.createElement('img');//<img>
    img.src = 'https://cdn.discordapp.com/attachments/968858711303004251/1085253910052208790/g1.png';
    
    
    img.addEventListener('load', () => {
      this.image = img  
    })
  } 
  draw(){
    const ctx = myGameArea.context
    if (!this.image) return
    ctx.drawImage(this.image, this.x,this.y,150,150)
  }
  
  animate(){


    requestAnimationFrame(this.animate)
  }

  newPos() {
    this.x; 
    this.y;  
    
};

}
let play1 = new Player()//{x,y,img(<img src="">)}







// 🏀
let ball = {

  draw: function (x,y) {

    const ctx = myGameArea.context;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
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
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.heigth);
  }
}

const hoop = new Hoop(300, 428, 47, 9, 'red'); //{x,y,width,heigth, color} (210, 375, 42, 9, '')

const board = new Hoop(250,363,148,88,'white'); /**********avec ou sans BORD????***********/

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
