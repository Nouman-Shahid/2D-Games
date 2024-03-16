let health = 100;
let score = 0;
let istrue = true;
let gameInterval;
let count = 0;

document.onkeydown = function (press) {
    console.log("Key code is:", press.key);
    if (press.key === 'ArrowUp')  {
        player = document.getElementById('player');
        player.classList.add('animateplayer'); // Add animatejump class
        setTimeout(() => {
            player.classList.remove('animateplayer');
        }, 700);
        player.src = 'images/player_standing.gif'; 
    }

     if (press.key === 'ArrowLeft') {
        player = document.getElementById('player');
        player.src = 'images/player_walk.gif'; 
        playerx = parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
        player.style.left = (playerx - 42) + 'px';
    }


    if (press.key === 'ArrowRight') {
        player = document.getElementById('player');
        player.src = 'images/player_walk.gif'; 
        playerx = parseInt(window.getComputedStyle(player,null).getPropertyValue('left'));
        player.style.left = playerx + 42 + 'px';
    }
    if (press.key === 'w') {
        player.src = 'images/player_pistol.gif'; 
        bullet2 = document.getElementById('player_bullet');
        var enemeyhealth = document.getElementById('enemyhealth').value;
        bullet2.style.display='block';

        setTimeout(() => {
            bullet2.style.display='none';
            document.getElementById("enemyhealth").value -= 10;
        }, 1500);

        count ++;
        if(count == 10){
            bullet = document.getElementById('enemy_bullet');
           let x =  document.getElementById('changescore');
           bullet.style.display = 'none';
           bullet.classList.remove('bullet_animation');
           bullet2.style.display='none';
           const enemy = document.getElementById('enemy');
           enemy.style.display='none';
           enemeyhealth = document.getElementById('enemyhealth')        
           enemeyhealth.style.display='none';
           win = document.getElementById('you_win');
           win.style.display='flex';
           x.style.display='none';
         
        }
    }
    if (press.key === 'a') {
        player.src = 'images/player_rifle.gif'; 
    }
    if (press.key === 'ArrowDown') {
        player.src = 'images/player_standing.gif'; 
    }
    if (press.key === 's') {
        player.src = 'images/player_punch.gif'; 

    }
}

gameInterval = setInterval(() => {
    const player = document.getElementById('player');
    const gameover = document.getElementById('game_over');
    const bullet = document.getElementById('enemy_bullet');

    const playerRect = player.getBoundingClientRect();
    const bulletRect = bullet.getBoundingClientRect();

    if (
        playerRect.left < bulletRect.right &&
        playerRect.right > bulletRect.left &&
        playerRect.top < bulletRect.bottom &&
        playerRect.bottom > bulletRect.top 
    ) {
        clearInterval(gameInterval); // Stop the game loop
        gameover.style.display = 'flex';
        bullet.classList.remove('bullet_animation');
        bullet.style.visibility = 'hidden';
        player.src = 'images/player_dead.gif'; 
        setInterval(() => {
            player.style.visibility = 'hidden';

        }, 1000);

        health = 0;
        updatehealth(health);
        istrue = false;
    }
    else {
            score = score + 1;
            updatescore(score, istrue);
        
    }
}, 100);

function reload() {
    location.reload();
}

function updatehealth(health) {
    healthcontainer.innerHTML = "Health : " + health;
}

function updatescore(score, istrue) {
    changescore.innerHTML = "Time : " + score + 'ms';
}



