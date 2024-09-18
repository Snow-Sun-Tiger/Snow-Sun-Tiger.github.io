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






// ist die Position der Platform auf der x-Achse (obere linke Ecke)  
let xPlatform = 300;

// ist die Position der Platform auf der y-Achse (obere linke Ecke) 
let yPlatform = 700;

let xPlatforms = [300, 300, 250, 350, 150]
let yPlatforms = [700, 550, 500, 500, 600]
console.log(platforms[1])


 rect (xPlatforms[1] ,yPlatforms[1], 80, 15)


// Hintergrund width, height 
function setup() {
  createCanvas(600, 1000);
}

//Helligkeit Dunkel < Hell 
function draw() { 
  background(10);

  let isPlayerHittingOnX = xPlatform - 25 < xPlayer && xPlayer < xPlatform + 80
  let isPlayerHittingOnY = yPlatform  < yPlayer + 35 &&  yPlayer < yPlatform
  if (isPlayerHittingOnX && isPlayerHittingOnY) {
    console.log("Spieler auf Plattform")
  }

  
  yPlayer = yPlayer + yMovement

  //lässt den Spieler runterkommen
  if (yPlayer <= 350) {
    yMovement = Y_SPEED

  }

  if (isPlayerHittingOnX && isPlayerHittingOnY) {
    yMovement = -Y_SPEED
  }

  // legt fest welche pfeile (rechts oder links) durch gedrückt halten den Char auf der x-Achse bewegen
  if (keyIsDown(LEFT_ARROW)) {
    xPlayer = xPlayer - 5
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xPlayer = xPlayer + 5
  }

// bestimmt aussehen Platform(rect) Charakter(square)
rect(xPlatforms[0], yPlatforms[0], 80, 15)
square(xPlayer, yPlayer, 25)

rect (xPlatforms[4], yPlatforms[4], 80, 15)
rect ()

}
