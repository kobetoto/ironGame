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

  larg() {
    for(let i = this.x){}
  }
}
const hoop = new Hoop(300, 428, 47, 9, "red");

//⛹🏽‍♂️
class Player {
  constructor(x, y) {
    this.x = 500;
    this.y = 500;

    this.shooted = false;

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
let play1 = new Player();


// 🏀
let ball = {
  x: 0,
  y: 0,

  deltaX: 0, // distance entre la main et la balle

  draw: function () {
    const ctx = myGameArea.context;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "blue";
    ctx.closePath();
  },

  crash: function(arceau) {
    return (this.x === hoop.x);
  },              

  reset: function () {
    this.x = play1.x + 100
    this.y = play1.y + 80
  }
};

//🌈
let rainbow = {
  alpha: (55 * Math.PI) / 180,//angle📐: 55degres (radian)
  v0: 85,//vitesse= 50;


  rainbowY: function (x) {
    return (
      (-0.5 * 9.81 * Math.pow(x, 2)) / (Math.cos(this.alpha) ** 2 * this.v0 ** 2) +
      Math.tan(this.alpha) * x);
  },


  drawPx: function (x, y) {
    const ctx = myGameArea.context;
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(x, y, 1, 1);
  },

  draw: function () {
    for (let i = 0; i < 2000; i++) {
      this.rainbowY(i);
      this.drawPx((play1.x + 100) - i, (play1.y + 80) - this.rainbowY(i));
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
    const canvas = this.canvas;
    canvas.width = 1200;
    canvas.height = 1000;
    document.body.appendChild(canvas);
    this.context = canvas.getContext("2d");

    this.bgimage = document.createElement("img");
    this.bgimage.src =
      "https://cdn.discordapp.com/attachments/1084937735581741116/1085546667396313098/totodadababa_background_basketball_video_game_pixar_style_55b86151-eefa-4984-ac04-2216a23e1dbb.png";

    document.addEventListener("keydown", (e) => {
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
          rainbow.v0 += 1;
          break
        case 68:
          rainbow.v0 -= 1;
          break;
        case 90:
          rainbow.alpha += (1 * Math.PI) / 180;
          break;
        case 83:
          rainbow.alpha -= (1 * Math.PI) / 180;
          break;
        case 32:
          play1.shooted = true;
          break;
        case 13:
          ball.reset()
          play1.shooted = false
          break;
      }
    });
  },

  draw: function () {
    // BOUCLE D'ANIMATION --> toutes les 16ms🎦
    const ctx = this.context;

    ctx.clearRect(0, 0, 1200, 1000); //🧽

    ctx.drawImage(this.bgimage, 0, 0, 1200, 1000);

    hoop.draw();
    play1.newPos();
    play1.draw();

    ball.x = play1.x + 100
    ball.y = play1.y + 80

    if (play1.shooted) {

      ball.deltaX += 7;

      ball.x -= ball.deltaX;

      ball.y -= rainbow.rainbowY(ball.deltaX);
    }

    ball.draw();
    rainbow.draw()

    //bucketORnot
    const crashed = ball.crash(hoop)
    console.log('is crashed?', crashed)
    if (crashed === true) {
      console.log("crashhhhhhhhhhh");
      this.stop();
    }
    
    // rappel toutes les 16ms la Function DRAW
    this.int = requestAnimationFrame(() => {
      this.draw();
    }); 
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
