import React, { Component } from 'react';

let count = 0;
let leftmove = false;
let attack = 0;
let bool = false;

class Enemy2script extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    console.log("Key code is:", event.key);
    const player = document.getElementById('player');
    const enemy = document.getElementById('enemy2');
    const enemyhealth = document.getElementById('enemyhealth2');
    const enemy3 = document.getElementById('enemy3');
    const enemyhealth3 = document.getElementById('enemyhealth3');
    const playerhealth = document.getElementById('playerhealth');
    const gameover = document.getElementById('gameover');
    



    const playerRect = player.getBoundingClientRect();
    const enemyRect = enemy.getBoundingClientRect();
    const enemyRect3 = enemy3.getBoundingClientRect();
  
   

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
      enemy.src = 'images/enemy/enemy2_hurt.gif';
      setTimeout(() => {
        
        enemyhealth.value -= 25;
      }, 800);
      if (attack >= 3) {
        setTimeout(() => {
          enemy.src = 'images/enemy/enemy2_die.gif';
        }, 1000);
        setTimeout(() => {
          enemy.style.display = 'none';
          enemyhealth.style.display = 'none';
          attack = 0;
          // Schedule enemy respawn after 6 seconds
          // enemyRespawnTimeout = setTimeout(respawnEnemy, 6000);
        }, 4500);
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
        enemy.src = 'images/enemy/enemy2_attack.gif';
        
        if(event.key != 'b'){
          setTimeout(() => {
              player.src = 'images/player/player_hurt_left.gif';
              playerhealth.value -= 15;
              
            }, 2200);

          }
      
          this.getSnapshotBeforeUpdate
        }

    if (event.key === 'ArrowUp') {
      enemy.src = "images/enemy/enemy2_run.gif"
      let enemyback = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('bottom'));
      enemy.style.bottom = enemyback + 39 + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth, null).getPropertyValue('bottom'));
      enemyhealth.style.bottom = (movehealth + 39) + 'px';
    }

    if (event.key === 'ArrowDown') {
      let enemyback = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('bottom'));
      enemy.style.bottom = (enemyback - 39) + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth, null).getPropertyValue('bottom'));
      enemyhealth.style.bottom = (movehealth - 39) + 'px';
    }



    if (event.key === 'ArrowLeft') {
      leftmove = true;
      let enemyback = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
      enemy.style.left = (enemyback + 29) + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth, null).getPropertyValue('left'));
      enemyhealth.style.left = (movehealth + 29) + 'px';
    }

    if (event.key === 'ArrowRight') {
      leftmove = false;
      let enemyback = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
      enemy.style.left = (enemyback + 29) + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth, null).getPropertyValue('left'));
      enemyhealth.style.left = (movehealth + 29) + 'px';

    }







    if (
      (playerRect.left < enemyRect3.right &&
        playerRect.right > enemyRect3.left &&
        playerRect.top < enemyRect3.bottom &&
        playerRect.bottom > enemyRect3.top) &&
      event.key === 'f'
    ) {
      setTimeout(() => {
        
        enemy3.src = 'images/enemy/enemy3_hurt.gif';
      }, 300);
      setTimeout(() => {
        
        enemyhealth3.value -= 20;
      }, 800);
      if (attack >= 4) {
        setTimeout(() => {
          enemy3.src = 'images/enemy/enemy3_die.gif';
        }, 1000);
        setTimeout(() => {
          enemy3.style.display = 'none';
          enemyhealth3.style.display = 'none';
          gameover.style.display = 'flex'
          attack = 0;
          // Schedule enemy respawn after 6 seconds
          // enemyRespawnTimeout = setTimeout(respawnEnemy, 6000);
        }, 2200);
      }
      attack++;
    } else {
      // If the player didn't attack, clear the respawn timeout
      // clearTimeout(enemyRespawnTimeout);
    }
    



      if (
        playerRect.left < enemyRect3.right &&
        playerRect.right > enemyRect3.left &&
        playerRect.top < enemyRect3.bottom &&
        playerRect.bottom > enemyRect3.top &&
        event.key !== 'f'
      ) {
        enemy3.src = 'images/enemy/enemy3_attack.gif';
        
        if(event.key != 'b'){
          setTimeout(() => {
              player.src = 'images/player/player_hurt.gif';
              playerhealth.value -= 15;
              
            }, 1000);

          }
      
          this.getSnapshotBeforeUpdate
        }

    if (event.key === 'ArrowUp') {
      enemy3.src = "images/enemy/enemy3_run.gif"
      let enemyback = parseInt(window.getComputedStyle(enemy3, null).getPropertyValue('bottom'));
      enemy3.style.bottom = enemyback + 39 + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth3, null).getPropertyValue('bottom'));
      enemyhealth3.style.bottom = (movehealth + 39) + 'px';
    }

    if (event.key === 'ArrowDown') {
      let enemyback = parseInt(window.getComputedStyle(enemy3, null).getPropertyValue('bottom'));
      enemy3.style.bottom = (enemyback - 39) + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth3, null).getPropertyValue('bottom'));
      enemyhealth3.style.bottom = (movehealth - 39) + 'px';
    }



    if (event.key === 'ArrowLeft') {
      leftmove = true;
      let enemyback = parseInt(window.getComputedStyle(enemy3, null).getPropertyValue('left'));
      enemy3.style.left = (enemyback - 25) + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth3, null).getPropertyValue('left'));
      enemyhealth3.style.left = (movehealth - 25) + 'px';
    }

    if (event.key === 'ArrowRight') {
      leftmove = false;
      let enemyback = parseInt(window.getComputedStyle(enemy3, null).getPropertyValue('left'));
      enemy3.style.left = (enemyback - 30) + 'px';
      let movehealth = parseInt(window.getComputedStyle(enemyhealth3, null).getPropertyValue('left'));
      enemyhealth3.style.left = (movehealth  -30) + 'px';

    }
   
  };

  render() {
    return null; // This component doesn't render any UI
  }
}

export default Enemy2script;