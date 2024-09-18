// bestimmt variablen
/**
 *  ist die Position des Spielers auf der x-Achse (obere linke Ecke)  
 */
let xPlayer = 310

// ist die Position des Spielers auf der y-Achse (obere linke Ecke)  
let yPlayer = 680;

const Y_SPEED = 10;
// ist die bewegung
let yMovement = -Y_SPEED;


class Platform {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

 let platforms = [new Platform(300,700), new Platform(200,600), new Platform(400,500),  
  new Platform (430, 430), new Platform(200, 290), new Platform(500, 250), 
  new Platform(400, 500) ]
  random: Platform

// Hintergrund width, height 
function setup() {
  createCanvas(700, displayHeight);
}

let platformY = 800

//Helligkeit Dunkel < Hell 
function draw() { 
  background(10

  );

  for (let i = 0; i < platforms.length; i++) {
    let isPlayerHittingOnX = platforms[i].x - 25 < xPlayer && xPlayer < platforms[i].x + 80
    let isPlayerHittingOnY = platforms[i].y - 30 < yPlayer &&  yPlayer - 5 < platforms[i].y

    if (isPlayerHittingOnX && isPlayerHittingOnY && yMovement > 0) {
      console.log("Spieler auf Plattform")
      yMovement = -Y_SPEED
      platformY = platforms[i].y
    }
  }

  
  yPlayer = yPlayer + yMovement

  //lässt den Spieler runterkommen
  if (yPlayer <= platformY - 300) {
    yMovement = Y_SPEED

  }

  // legt fest welche pfeile (rechts oder links) durch gedrückt halten den Char auf der x-Achse bewegen
  if (keyIsDown(LEFT_ARROW)) {
    xPlayer = xPlayer - 5
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xPlayer = xPlayer + 5
  }

// Plattformen einzeichnen
for (let i = 0; i < platforms.length; i++) {
  rect(platforms[i].x, platforms[i].y, 80, 15)
}


// Spieler zeichnen
square(xPlayer, yPlayer, 25)




}
