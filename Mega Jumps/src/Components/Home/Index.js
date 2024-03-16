import React, { useEffect } from 'react';
import styles from './Style.module.css';
import platformimg from '../../images/platform.png';
import hills from '../../images/hills.png';
import background from '../../images/background.png';
import smallplatform from '../../images/smallplatform.png';
import stones from '../../images/stones.png';
import coin from '../../images/coin.gif';
import flags from '../../images/flag.png';
import enemies from '../../images/enemy.gif';

import sprite_run_left from '../../images/spriteRunLeft.png';
import sprite_run_right from '../../images/spriteRunRight.png';
import sprite_stand_left from '../../images/spriteStandLeft.png';
import sprite_stand_right from '../../images/spriteStandRight.png';

const Home = () => {
  useEffect(() => {
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //console.log(platformimg)
    const gravity = 0.5;
    var c = canvas.getContext('2d');

    let playerjump = new Audio("Audios/jump.mp3");
    let playerrun = new Audio("Audios/running.mp3");
    let gamemusic = new Audio("Audios/gamemusic.mp3");
    let die = new Audio("Audios/gameover.mp3");
    let win = new Audio("Audios/win.mp3");
    let coinsound = new Audio("Audios/collectcoin.mp3");


    
    class Player {
      constructor() {
        this.position = {
          x: 100,
          y: 100,
        };
        this.velocity = {
          x: 0,
          y: 0,
        };
        this.width = 66;
        this.height = 150;
        this.health = 1000;

        this.sprites = {
          stand: {
            right: loadImage(sprite_stand_right),
            left: loadImage(sprite_stand_left),
            cropwidth: 177,
            width: 66,
          },
          run: {
            right: loadImage(sprite_run_right),
            left: loadImage(sprite_run_left),
            cropwidth: 340,
            width: 127.875,
          },
        };

        this.currentsprite = this.sprites.stand.right;
        this.frame = 0;
        this.currentcropwidth = 177;
      }

      draw() {
        c.drawImage(
          this.currentsprite,
          this.currentcropwidth * this.frame,
          1,
          this.currentcropwidth,
          400,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
}

update() {
  this.frame += 2;
  if (this.frame > 28) {
    this.frame = 0;
  }
  this.draw();
  this.position.y += this.velocity.y;
  this.position.x += this.velocity.x;
  if (this.velocity.y + this.height + this.position.y <= canvas.height) {
    this.velocity.y += gravity;
  }
}

setSprite(spriteType, direction) {
  this.currentsprite = this.sprites[spriteType][direction];
}
    }

function loadImage(src) {
  const image = new Image();
  image.src = src;
  return image;
}

class Platform {
  constructor(a, b, image, wd, ht) {
    this.position = {
      x: a,
      y: b,
    };
    this.width = wd;
    this.height = ht;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}

class GenericObjects {
  constructor(a, b, image, wd, ht) {
    this.position = {
      x: a,
      y: b,
    };
    this.width = wd;
    this.height = ht;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}

// coins
class Coins {
  constructor(a, b, image, wd, ht, val) {
    this.position = {
      x: a,
      y: b,
    };
    this.width = wd;
    this.height = ht;
    this.image = image;
    this.points = val;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}
class Enemy {
  constructor(a, b, image, wd, ht) {
    this.position = {
      x: a,
      y: b,
    };
    this.width = wd;
    this.height = ht;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
}
//image of platform
const image = new Image();
image.src = platformimg;
const platformImage = image;

//image of background
const image2 = new Image();
image2.src = background;
const backgroundimage = image2;

//image of hills
const image3 = new Image();
image3.src = hills;
const hillsimg = image3;

//image of smallplatform
const image4 = new Image();
image4.src = smallplatform;
const smallplatformimg = image4;

//image of stones
const stonesimg = new Image();
stonesimg.src = stones;

//image of enemy
const enemyimg = new Image();
enemyimg.src = enemies;

//image of coins
const coinsimg = new Image();
coinsimg.src = coin;

//image of flag
const flagimg = new Image();
flagimg.src = flags;

let player = new Player();
let platforms = [

];

let genericobjects = [

];
let coins = [

];
let enemy = [

];


const keys =
{
  right: {
    pressed: false
  },
  left: {
    pressed: false,
  }

}

let scrollOffset = 0;
function init() {

  player = new Player();
  platforms = [
    new Platform(-1, 525, platformImage, 600, 120),
    new Platform(597, 525, platformImage, 600, 120),
    new Platform(597 * 2 + 250, 525, platformImage, 600, 120),
    new Platform(597 * 3 + 250, 525, platformImage, 600, 120),
    new Platform(597 * 4 + 400, 425, smallplatformimg, 200, 100),
    new Platform(597 * 5 + 250, 525, platformImage, 600, 120),
    new Platform(597 * 6 + 400, 425, smallplatformimg, 200, 100),
    new Platform(597 * 7 + 200, 525, platformImage, 600, 120),
    new Platform(597 * 8 + 400, 425, smallplatformimg, 200, 100),
    new Platform(597 * 9 + 400, 425, smallplatformimg, 200, 100),
    new Platform(597 * 10 + 400, 425, smallplatformimg, 200, 100),
    new Platform(597 * 11 + 400, 525, platformImage, 600, 120),
    new Platform(597 * 12 + 400, 525, platformImage, 600, 120),
    new Platform(597 * 13 + 400, 525, platformImage, 600, 120),
    new Platform(597 * 3 + 450, 325, stonesimg, 50, 50),
    new Platform(597 * 3 + 500, 325, stonesimg, 50, 50),
    new Platform(597 * 3 + 550, 325, stonesimg, 50, 50),
    new Platform(597 * 7 + 450, 325, stonesimg, 50, 50),
    new Platform(597 * 7 + 500, 325, stonesimg, 50, 50),
    new Platform(597 * 7 + 550, 325, stonesimg, 50, 50),
    new Platform(597 * 12 + 450, 325, stonesimg, 50, 50),
    new Platform(597 * 12 + 500, 325, stonesimg, 50, 50),
    new Platform(597 * 12 + 550, 325, stonesimg, 50, 50),
    new Platform(597 * 14 + 400, 525, platformImage, 600, 120),
    new Platform(597 * 15 + 400, 525, platformImage, 600, 120),
    new Platform(597 * 16 + 400, 525, platformImage, 600, 120),
    new Platform(597 * 14 + 400, 135, flagimg, 200, 400),



  ];

  genericobjects = [
    new GenericObjects(-3, -3, backgroundimage, 7000, 650),
    new GenericObjects(-3, -3, hillsimg, 7000, 650),
  ];

  coins = [
    new Coins(1300, 350, coinsimg, 50, 50, 10),
    new Coins(2290, 230, coinsimg, 50, 50, 10),
    new Coins(3300, 330, coinsimg, 50, 50, 10),
    new Coins(4690, 230, coinsimg, 50, 50, 10),
    new Coins(5250, 350, coinsimg, 50, 50, 10),
    new Coins(6450, 350, coinsimg, 50, 50, 10),
    new Coins(7650, 230, coinsimg, 50, 50, 10),
  ];

  enemy = [
    new Enemy(1000, 440, enemyimg, 150, 120),
    new Enemy(1000 * 3, 440, enemyimg, 150, 120),
    new Enemy(1000 * 5, 440, enemyimg, 150, 120),
    new Enemy(1000 * 6, 440, enemyimg, 150, 120),
    new Enemy(1000 * 7, 440, enemyimg, 150, 120),
  ]


  scrollOffset = 0;

}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  genericobjects.forEach((genericobjects) => {
    genericobjects.draw()

  }
  )
  enemy.forEach((enemy) => {
    enemy.draw()

  }
  )
  coins.forEach((coins) => {
    coins.draw()

  }
  )
  platforms.forEach((platform) => {
    platform.draw()

  }
  )

  player.update();
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 8;
  }
  else if ((keys.left.pressed && player.position.x > 100) || (keys.left.pressed &&
    scrollOffset === 0 && player.position.x > 0)) {
    player.velocity.x = -8;

  }
  else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 8;
      platforms.forEach((platform) => {
        platform.position.x -= 8;

      }
      )
      coins.forEach((coins) => {
        coins.position.x -= 8;

      }
      )
      enemy.forEach((enemy) => {
        enemy.position.x -= 8;

      }
      )
      genericobjects.forEach((genericobjects) => {
        genericobjects.position.x -= 4.5;

      }
      )
    }
    else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= 8;
      platforms.forEach((platform) => {
        platform.position.x += 8;
      }
      )
      coins.forEach((coins) => {
        coins.position.x += 8;
      }
      )
      enemy.forEach((enemy) => {
        enemy.position.x += 8;
      }
      )
      genericobjects.forEach((genericobjects) => {
        genericobjects.position.x += 4.5;

      }
      )
    }
  }

  platforms.forEach((platform) => {

    if ((player.position.y + player.height <= platform.position.y)
      && (player.position.y + player.velocity.y + player.height
        >= platform.position.y) && (player.position.x + player.width
          >= platform.position.x) && (player.position.x
            <= platform.position.x + platform.width)) {
      player.velocity.y = 0;
    }
  }
  )

  enemy.forEach((e, index) => {
    const playerBottom = player.position.y + player.height;
    const playerRight = player.position.x + player.width;
    const enemyBottom = e.position.y + e.height;
    const enemyRight = e.position.x + e.width;

    setInterval(() => {
      e.position.x -= 0.25;
    }, 2000);

    if (
      playerBottom >= e.position.y &&
      player.position.y <= enemyBottom &&
      playerRight >= e.position.x &&
      player.position.x <= enemyRight
    ) {
      // Collision detected, remove the coin
      //enemy.splice(index, 1);
      setTimeout(() => {

        player.health = player.health - 2;
      }, 1000);

      if (player.health == 0) {
        die.play()
        init()
      }
    }
  });




  coins.forEach((coin, index) => {
    const playerBottom = player.position.y + player.height;
    const playerRight = player.position.x + player.width;
    const coinBottom = coin.position.y + coin.height;
    const coinRight = coin.position.x + coin.width;

    if (
      playerBottom >= coin.position.y &&
      player.position.y <= coinBottom &&
      playerRight >= coin.position.x &&
      player.position.x <= coinRight
    ) {
      // Collision detected, remove the coin
      coinsound.play()
      coins.splice(index, 1);
    }
  });

  //win scenario
  if (scrollOffset > 597 * 14 + 400) {
    gamemusic.pause()
    alert("you win the game, do u want to play it again?")
    win.play()
    setTimeout(() => {
      init()
      
    }, 3000);
  }
  //lose scenario
  else if (player.position.y > canvas.height) {
    //alert("Player died :( do you want to play again?");
    gamemusic.pause()
    player.health = 0;
    die.play()
    setTimeout(() => {
      init();
      
    }, 3000);
  }
  c.fillStyle = 'red';
  c.font = '5vh Arial';
  //c.fillRect(10, 10, player.health, 20); 
  c.fillText(`Health: ${player.health}`, 550, 70);


}

init();

animate();

window.addEventListener('keydown', (event) => {
  if ((event.key === 'W') || (event.key === 'w')) {
    player.velocity.y -= 15;
    playerjump.play()
    if (keys.right.pressed == true) {
      player.setSprite('stand', 'right');
      player.currentcropwidth = player.sprites.stand.cropwidth;
      player.width = player.sprites.stand.width;
    }
    else if (keys.left.pressed == true) {
      player.setSprite('stand', 'left');
      player.currentcropwidth = player.sprites.stand.cropwidth;
      player.width = player.sprites.stand.width;
    }


  }
  else if ((event.key === 'A') || (event.key === 'a')) {
    keys.left.pressed = true;
    playerrun.play()
    player.setSprite('run', 'left');
    player.currentcropwidth = player.sprites.run.cropwidth;
    player.width = player.sprites.run.width;


  }

  else if ((event.key === 'D') || (event.key === 'd')) {
    keys.right.pressed = true;
    playerrun.play()
    player.setSprite('run', 'right');
    player.currentcropwidth = player.sprites.run.cropwidth;
    player.width = player.sprites.run.width;
  }
  else if ((event.key === 's') || (event.key === 'S')) {
    gamemusic.play();

  }
});



window.addEventListener('keyup', (event) => {
  if ((event.key === 'W') || (event.key === 'w')) {
    player.velocity.y = 0
    if (keys.right.pressed == true) {
      player.setSprite('run', 'right');
      player.currentcropwidth = player.sprites.run.cropwidth;
      player.width = player.sprites.run.width;
    }
    else if (keys.left.pressed == true) {
      player.setSprite('run', 'left');
      player.currentcropwidth = player.sprites.run.cropwidth;
      player.width = player.sprites.run.width;
    }
  }
  else if ((event.key === 'A') || (event.key === 'a')) {
    playerrun.pause()
    keys.left.pressed = false;
    player.setSprite('stand', 'left');
    player.currentcropwidth = player.sprites.stand.cropwidth;
    player.width = player.sprites.stand.width;


  }
  else if ((event.key === 'S') || (event.key === 's')) {
    //console.log('down');
  }

  else if ((event.key === 'D') || (event.key === 'd')) {
    keys.right.pressed = false;
    playerrun.pause()
    player.setSprite('stand', 'right');
    player.currentcropwidth = player.sprites.stand.cropwidth;
    player.width = player.sprites.stand.width;


  }
});
  }, []);

return (

  <>
    <canvas id="canvas">

    </canvas>
  </>

);

};

export default Home;
