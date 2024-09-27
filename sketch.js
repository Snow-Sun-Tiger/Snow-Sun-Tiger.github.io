// bestimmt variablen
/**
 *  ist die Position des Spielers auf der x-Achse (obere linke Ecke)  
 */
let xPlayer = 310

// ist die Position des Spielers auf der y-Achse (obere linke Ecke)  
let yPlayer = 680;

const Y_SPEED = 15;
// ist die bewegung
let yMovement = -Y_SPEED;


class Platform {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}
let canvasWidth;
let canvasHeight;

let platforms = [];

let highscore = 0;


// Hintergrund width, height 
function setup() {
  canvasHeight = windowHeight;
  canvasWidth = Math.min(windowWidth, 700);
  createCanvas(canvasWidth, canvasHeight);
}

let platformY = 800;
let punktestand = 0;

// Normales Scroll-Verhalten bei Touch-Gesten ausschalten
function touchStarted() {
  return false;
}


//Helligkeit Dunkel < Hell 
function draw() {
  background(10);

  if (platforms.length == 0) {
    platforms = [new Platform(Math.floor(Math.random() * (canvasWidth - 80)), Math.floor(Math.max(100, Math.random() * canvasHeight)), "#FFC107"),
    new Platform(Math.floor(Math.random() * (canvasWidth - 80)), Math.floor(Math.max(100, Math.random() * canvasHeight)), 'tomato'),
    new Platform(Math.floor(Math.random() * (canvasWidth - 80)), Math.floor(Math.max(100, Math.random() * canvasHeight)), 'cornflowerblue'),
    new Platform(Math.floor(Math.random() * (canvasWidth - 80)), Math.floor(Math.max(100, Math.random() * canvasHeight)), 'limegreen'),
    new Platform(Math.floor(Math.random() * (canvasWidth - 80)), Math.floor(Math.max(100, Math.random() * canvasHeight)), "lavender"),
    new Platform(Math.floor(Math.random() * (canvasWidth - 80)), Math.floor(Math.max(100, Math.random() * canvasHeight)), "#9966CC"),
    new Platform((canvasWidth - 80) / 2, canvasHeight - 200, 'lightgreen')];
  }

  for (let i = 0; i < platforms.length; i++) {
    let isPlayerHittingOnX = platforms[i].x - 25 < xPlayer && xPlayer < platforms[i].x + 80
    let isPlayerHittingOnY = platforms[i].y - 30 < yPlayer && yPlayer - 5 < platforms[i].y


    if (isPlayerHittingOnX && isPlayerHittingOnY && yMovement > 0) {
      console.log("Spieler auf Plattform")
      punktestand = punktestand + 1;
      console.log("Punktestand: " + punktestand)

      yMovement = -Y_SPEED
      platformY = platforms[i].y
      let oldColor = platforms[i].color;
      platforms[i] = new Platform(Math.floor(Math.random() * (canvasWidth - 80)), Math.floor(Math.max(100, Math.random() * canvasHeight)), oldColor)
    }
  }


  yPlayer = yPlayer + yMovement

  //lässt den Spieler runterkommen
  if (yPlayer <= platformY - 300) {
    yMovement = Y_SPEED

  }

  if (xPlayer < 0) {
    xPlayer = canvasWidth - 10;
  }

  if (xPlayer > canvasWidth) {
    xPlayer = 0;
  }

  if (mouseX < canvasWidth / 3) {
    xPlayer = xPlayer - 5;
  }

  if (mouseX > canvasWidth / 3 * 2) {
    xPlayer = xPlayer + 5;
  }

  if (keyIsDown(ENTER) || yPlayer > canvasHeight + 200) {
    xPlayer = Math.min(Math.max(xPlayer, 0), canvasWidth - 20)
    // ist die Position des Spielers auf der y-Achse (obere linke Ecke)  
    yPlayer = 10;
    if (punktestand > highscore) {
      highscore = punktestand;
    }
    punktestand = 0;
    for (let i = 0; i < platforms.length; i++) {
      let oldColor = platforms[i].color;
      platforms[i] = new Platform(Math.floor(Math.random() * (canvasWidth - 100)), Math.floor(Math.max(100, Math.random() * canvasHeight)), oldColor)
    }
  }
  if (touches.length > 0 && touches[0].x > displayWidth / 2) {
    xPlayer = xPlayer + 5
  }

  if (touches.length > 0 && touches[0].x < displayWidth / 2) {
    xPlayer = xPlayer - 5


  }


  // Plattformen einzeichnen
  for (let i = 0; i < platforms.length; i++) {
    fill(platforms[i].color)
    rect(platforms[i].x, platforms[i].y, 80, 15)

    fill('blue')
  }


  // Spieler zeichnen
  fill('dodgerblue')
  square(xPlayer, yPlayer, 25, 4,)


  textSize(22)
  fill("yellow")
  text('score ' + punktestand, canvasWidth / 1.2, canvasHeight / 18, 50)
  text('highscore ' + highscore, canvasWidth / 1.2, canvasHeight / 18 + 60, 50)
  fill("white")
}
