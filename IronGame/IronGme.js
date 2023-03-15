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

    document.body.appendChild(canvas);
  },
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
const player = {

}

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
