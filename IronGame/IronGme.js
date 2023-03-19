/*
███████ ██      ███████ ███    ███ ███████ ███    ██ ████████ 
██      ██      ██      ████  ████ ██      ████   ██    ██    
█████   ██      █████   ██ ████ ██ █████   ██ ██  ██    ██    
██      ██      ██      ██  ██  ██ ██      ██  ██ ██    ██    
███████ ███████ ███████ ██      ██ ███████ ██   ████    ██   
*/

//🗑️
class Hoop {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.heigth = h;
    this.color = c;
  }
  draw() {
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.heigth);
  }
}
const hoop = new Hoop(300, 428, 47, 9, "red");

//⛹🏽‍♂️
class Player {
  constructor(x, y) {
    this.x = 500;
    this.y = 500;

    this.speedX = 0;
    this.speedY = 0;

    const img = document.createElement("img"); //<img>
    img.src =
      "https://cdn.discordapp.com/attachments/968858711303004251/1085253910052208790/g1.png";

    img.addEventListener("load", () => {
      this.image = img;
    });
  }
  draw() {
    const ctx = myGameArea.context;
    if (!this.image) return;
    ctx.drawImage(this.image, this.x, this.y, 150, 150);
  }

  animate() {
    requestAnimationFrame(this.animate);
  }

  newPos() {
    this.x;
    this.y;
  }
}

let play1 = new Player(); //{x,y,img(<img src="">)}


// 🏀
let ball = {
  x: 0,
  y: 0,
  speedBall: 0,

  draw: function (x, y) {
    const ctx = myGameArea.context;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  },
};

//🌈
let rainbow = {
   alpha : (55* Math.PI) / 180,//angle📐: 55degres (radian)
   v0: 50,//vitesse= 50;


  rainbowY: function(x){

    return (
      (-0.5 * 9.81 * Math.pow(x, 2)) / (Math.cos(this.alpha) ** 2 * this.v0 ** 2) +
      Math.tan(this.alpha) * x );
  },


  draw: function(x0, y0){
    const ctx = myGameArea.context;
    let roundedX = Math.round(x0);
    let roundedY = Math.round(y0);
    ctx.fillStyle = "white";
    ctx.fillRect(roundedX, roundedY, 2, 1);
  },

  drawRainbow: function(){
    for(let i =0; i < 200; i++)
    {
      this.rainbowY(i);
      this.draw((play1.x+100) - i, (play1.y+80) - this.rainbowY(i));
    }
  }


}


/*
██████   █████  ███    ███ ███████      █████  ██████  ███████  █████  
██       ██   ██ ████  ████ ██          ██   ██ ██   ██ ██      ██   ██ 
██   ███ ███████ ██ ████ ██ █████       ███████ ██████  █████   ███████ 
██    ██ ██   ██ ██  ██  ██ ██          ██   ██ ██   ██ ██      ██   ██ 
 ██████  ██   ██ ██      ██ ███████     ██   ██ ██   ██ ███████ ██   ██ 
                                                                      
 */
const myGameArea = {
  canvas: document.createElement("canvas"),

  start: function () {
    const canvas = this.canvas; //<canvas>
    canvas.width = 1200;
    canvas.height = 1000;
    document.body.appendChild(canvas);
    this.context = canvas.getContext("2d"); // dans myGameArea jai le context //console.log('this.context=', this.context) ==> debug

    this.bgimage = document.createElement("img"); // <img />
    this.bgimage.src =
      "https://cdn.discordapp.com/attachments/1084937735581741116/1085546667396313098/totodadababa_background_basketball_video_game_pixar_style_55b86151-eefa-4984-ac04-2216a23e1dbb.png";

    document.addEventListener("keydown", (e) => {
      console.log("touche enfoncee");
      switch (e.keyCode) {
        case 38:
          play1.y -= 10;
          //if(play1.y > 300){break}
          break;
        case 40:
          play1.y += 10;
          break;
        case 37:
          play1.x -= 10;
          break;
        case 39:
          play1.x += 10;
          break;
        case 81:
          rainbow.v0 +=1;
          break
        case 68:
          rainbow.v0 -=1;
          break;
        case 90:
          rainbow.alpha +=0.05;
          break;
        case 83:
          rainbow.alpha -=0.05
      }
    });
  },

  draw: function () {
    // BOUCLE D'ANIMATION --> toutes les 16ms🎦
    const ctx = this.context; //console.log('ctx=', ctx) =>DEBUG

    ctx.clearRect(0, 0, 1200, 1000); //🧽

    ctx.drawImage(this.bgimage, 0, 0, 1200, 1000); //draw=>bgimage=>backGround

    hoop.draw();
    play1.newPos();
    play1.draw();
    //board.draw();
    ball.draw(play1.x + 100, play1.y + 80);
    rainbow.drawRainbow()

    this.int = requestAnimationFrame(() => {
      this.draw();
    }); // rappel toutes les 16ms la Function DRAW
  },
  stop: function () {
    cancelAnimationFrame(this.int);
  },
};


/*
███████ ████████  █████  ██████  ████████ 
██         ██    ██   ██ ██   ██    ██    
███████    ██    ███████ ██████     ██    
     ██    ██    ██   ██ ██   ██    ██    
███████    ██    ██   ██ ██   ██    ██  
*/
document.getElementById("start-button").onclick = () => {
  myGameArea.start();
  myGameArea.draw();
};

/*
 ██████╗  █████╗ ███╗   ███╗███████╗██████╗ ██╗      █████╗ ██╗   ██╗
██╔════╝ ██╔══██╗████╗ ████║██╔════╝██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝
██║  ███╗███████║██╔████╔██║█████╗  ██████╔╝██║     ███████║ ╚████╔╝ 
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  ██╔═══╝ ██║     ██╔══██║  ╚██╔╝  
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗██║     ███████╗██║  ██║   ██║   
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝ 



TrajBall(){}
collision(){} 
succFail(){}
*/


