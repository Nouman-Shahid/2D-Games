import React, { Component } from 'react';

let coins = 0;
let leftmove = false;
let attack = 0;

class GameScript extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    console.log("Key code is:", event.key);
    const player = document.getElementById('player');
    const enemy = document.getElementById('enemy');
    const coin1 = document.getElementById('coin1');
    const coin2 = document.getElementById('coin2');
    const coin3 = document.getElementById('coin3');
    const totalcoins = document.getElementById('totalcoins');
    const enemyhealth = document.getElementById('enemyhealth');
    const playerhealth = document.getElementById('playerhealth');
    const healpotion = document.getElementById('healpotion');


    if ((event.key === 'p') && (leftmove === false)) {
      player.src = 'images/player/player_heal.gif';

    }

    const playerRect = player.getBoundingClientRect();
    const enemyRect = enemy.getBoundingClientRect();
    const healRect = healpotion.getBoundingClientRect();
    const coinRect1 = coin1.getBoundingClientRect();
    const coinRect2 = coin2.getBoundingClientRect();
    const coinRect3 = coin3.getBoundingClientRect();




    if (playerRect.left < coinRect1.right && playerRect.right > coinRect1.left && playerRect.top < coinRect1.bottom && playerRect.bottom > coinRect1.top) {
      coins = coins + 10;
      coin1.style.display = 'none';

      updatecoin();


    }
    if (playerRect.left < coinRect2.right && playerRect.right > coinRect2.left && playerRect.top < coinRect2.bottom && playerRect.bottom > coinRect2.top) {
      coins = coins + 10;
      coin2.style.display = 'none';
      updatecoin();


    }
    if (playerRect.left < coinRect3.right && playerRect.right > coinRect3.left && playerRect.top < coinRect3.bottom && playerRect.bottom > coinRect3.top) {
      coin3.style.display = 'none';
      coins = coins + 10;

      // console.log (coins)
      updatecoin();
     
    }

    function updatecoin() {
      totalcoins.innerHTML = 'Coins :' + coins;
    }








    if (playerRect.left < healRect.right &&
      playerRect.right > healRect.left &&
      playerRect.top < healRect.bottom &&
      playerRect.bottom > healRect.top) {
      playerhealth.value += 20;
      healpotion.style.display = 'none';

      // Set a timeout to respawn the heal potion after 10 seconds (10000 milliseconds)
      setTimeout(function () {
        healpotion.style.display = 'block'; // Or 'inline' or 'inline-block' depending on your styling
      }, 10000);
    }


    // console.log('Left : ' + playerRect.left);
    // console.log('Right : ' + playerRect.right);
    // console.log('Top : ' + playerRect.top);
    // console.log('Bootom : ' + playerRect.bottom);

    let enemyRespawnTimeout;

    // function respawnEnemy() {
    //   // Set a new location for the enemy here, e.g., update enemyRect coordinates
    //   // ...

    //   // Reset enemy attributes
    //   enemy.src = 'images/enemy/enemy1_run.gif';
    //   enemyhealth.value = 100;
    //   enemy.style.display = 'block';
    //   enemyhealth.style.display = 'block';
    // }

    // Inside your existing code
    if (
      (playerRect.left < enemyRect.right &&
        playerRect.right > enemyRect.left &&
        playerRect.top < enemyRect.bottom &&
        playerRect.bottom > enemyRect.top) &&
      event.key === 'f'
    ) {
      enemy.src = 'images/enemy/enemy1_hurt.gif';
      setTimeout(() => {

        enemyhealth.value -= 30;
      }, 800);
      if (attack >= 3) {
        setTimeout(() => {
          enemy.src = 'images/enemy/enemy1_die.gif';
        }, 1300);
        setTimeout(() => {
          enemy.style.display = 'none';
          enemyhealth.style.display = 'none';
          attack = 0;
          // Schedule enemy respawn after 6 seconds
          // enemyRespawnTimeout = setTimeout(respawnEnemy, 6000);
        }, 2800);
      }
      attack++;
    } else {
      // If the player didn't attack, clear the respawn timeout
      // clearTimeout(enemyRespawnTimeout);
    }




    if (
      playerRect.left < enemyRect.right &&
      playerRect.right > enemyRect.left &&
      playerRect.top < enemyRect.bottom &&
      playerRect.bottom > enemyRect.top &&
      event.key !== 'f'
    ) {
      enemy.src = 'images/enemy/enemy1_attack.gif';

      if (event.key != 'b') {
        setTimeout(() => {
          player.src = 'images/player/player_hurt.gif';
          playerhealth.value -= 10;

        }, 1000);

      }

      this.getSnapshotBeforeUpdate
    }

    if ((event.key == 'b') && (leftmove == true)) {
      player.src = 'images/player/player_block_left.gif';
      playerhealth.value = playerhealth.value;
    }
    if ((event.key == 'b') && (leftmove == false)) {
      player.src = 'images/player/player_block.gif';
      playerhealth.value = playerhealth.value;
    }

    if ((event.key === 'p') && (leftmove === true)) {
      player.src = 'images/player/player_heal_left.gif';

    }
    if (event.key === 'ArrowUp') {
      enemy.src = "images/enemy/enemy1_run.gif"

      if (leftmove === true) {
        player.src = "images/player/player_run_left.gif"
          ;

      }
      if (leftmove === false) {
        player.src = "images/player/player_run.gif"

      }
      let enemyback = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('bottom'));
      enemy.style.bottom = enemyback + 39 + 'px';
      let moveup = parseInt(window.getComputedStyle(player, null).getPropertyValue('bottom'));
      player.style.bottom = moveup + 39 + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth, null).getPropertyValue('bottom'));
      enemyhealth.style.bottom = (movehealth + 39) + 'px';
    }

    if (event.key === 'ArrowDown') {
      if (leftmove === true) {
        player.src = "images/player/player_run_left.gif"

      }
      if (leftmove === false) {
        player.src = "images/player/player_run.gif"

      }
      let enemyback = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('bottom'));
      enemy.style.bottom = (enemyback - 39) + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth, null).getPropertyValue('bottom'));
      enemyhealth.style.bottom = (movehealth - 39) + 'px';
      let movedown = parseInt(window.getComputedStyle(player, null).getPropertyValue('bottom'));
      player.style.bottom = (movedown - 39) + 'px';
    }



    if (event.key === 'ArrowLeft') {
      leftmove = true;
      player.src = "images/player/player_run_left.gif"
      let movebackward = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
      player.style.left = (movebackward - 29) + 'px';
      let enemyback = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
      enemy.style.left = (enemyback - 29) + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth, null).getPropertyValue('left'));
      enemyhealth.style.left = (movehealth - 29) + 'px';
    }
    if ((event.key === 'f') && (leftmove === true)) {
      player.src = 'images/player/player_attack_left.gif';

    }

    if ((event.key === 's') && (leftmove === true)) {
      player.src = 'images/player/player_stand_left.gif';

    }
    if ((event.key === 's') && (leftmove === false)) {
      player.src = 'images/player/player_stand.gif';

    }

    if (event.key === 'ArrowRight') {
      leftmove = false;
      player.src = "images/player/player_run.gif"
      let moveforward = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
      player.style.left = moveforward + 29 + 'px';
      let enemyback = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
      enemy.style.left = (enemyback - 29) + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth, null).getPropertyValue('left'));
      enemyhealth.style.left = (movehealth - 29) + 'px';

    }
    if ((event.key === 'f') && (leftmove === false)) {
      player.src = "images/player/player_attack.gif"
    }

  };

  render() {
    return null; // This component doesn't render any UI
  }
}

export default GameScript;