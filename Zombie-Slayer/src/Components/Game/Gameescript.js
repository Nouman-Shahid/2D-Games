import React, { Component } from 'react'
let firecount = 0;
let totalbullet = 8;
export class Gameescript extends Component {

    componentDidMount() {

        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp); // Listen for key release
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown = (event) => {

        //audios :

        let playerhurt = new Audio("audio/playerhurt.mp3");
        let playerjump = new Audio("audio/playerjump.mp3");
        let playerrun = new Audio("audio/playerrun.mp3");
        let playershoot = new Audio("audio/playershoot.mp3");
        let noammo = new Audio("audio/noammo.mp3");
        let reload = new Audio("audio/reload.mp3");
        let explode= new Audio('audio/explosion.mp3')




        let enemybullet = document.getElementById('enemybullet');
        let enemy1 = document.getElementById('enemy1');
        let enemy2 = document.getElementById('enemy2');
        let player1 = document.getElementById('player1');
        let playerhealth = document.getElementById('playerhealth');
        let bullet1 = document.getElementById('bullet1');
        let ammo = document.getElementById('ammo');
        let dynamite = document.getElementById('dynamite');
        let explosion = document.getElementById('explosion');
        let fire = document.getElementById('fire');
        let totalammo = document.getElementById('totalammo');
        let blood = document.getElementById('bloodeffect');
        const stone1 = document.getElementById('stone1');
        const gameover = document.getElementById('gameover');
        const stone2 = document.getElementById('stone2');

        const player1Rect = player1.getBoundingClientRect();
        const ammoRect = ammo.getBoundingClientRect();
        const enemybulletRect = enemybullet.getBoundingClientRect();
        const enemy2Rect = enemy2.getBoundingClientRect();
        const stone1Rect = stone1.getBoundingClientRect();
        const stone2Rect = stone2.getBoundingClientRect();

        //Enemy : 1


        if (player1Rect.left < enemy2Rect.right &&
            player1Rect.right > enemy2Rect.left) {
            setTimeout(() => {

                playerhurt.play()
                playerhealth.value -= 35;
                    
                    blood.style.display = 'block'
                               setTimeout(() => {
                    blood.style.display = 'none'

                }, 1600);
            }, 200);



        }
        if (player1Rect.left < enemybulletRect.right &&
            player1Rect.right > enemybulletRect.left) {


                setTimeout(() => {
                enemybullet.style.display = 'none'
                playerhurt.play()
                playerhealth.value -= 35;
                setTimeout(() => {
                    
                    blood.style.display = 'block'
                }, 500);
                setTimeout(() => {
                    blood.style.display = 'none'

                }, 1600);
            }, 100);

        }

        if(playerhealth.value === 0)
            {
                player1.style.display = 'none'
                gameover.style.display = 'flex'
            }

        else {
            enemy1.src = 'images/character/enemy/enemy1_run.gif'

        }




        //Player : 

        if ((event.key === 'W') || (event.key === 'w')) {

            player1.classList.add('animateplayer'); // Add animatejump class
            setTimeout(() => {
                player1.classList.remove('animateplayer');

            }, 800);
            player1.src = 'images/character/player1/player1_stand_right.gif';
            playerjump.play()

        }

        if (event.key === 'D' || event.key === 'd') {

            let moveforward = parseInt(window.getComputedStyle(player1, null).getPropertyValue('left'));
            player1.style.left = (moveforward + 20) + 'px';
            let movedynamite = parseInt(window.getComputedStyle(dynamite, null).getPropertyValue('left'));
            dynamite.style.left = (movedynamite + 20) + 'px';
            let moveexplosion = parseInt(window.getComputedStyle(explosion, null).getPropertyValue('left'));
            explosion.style.left = (moveexplosion + 20) + 'px';
            parseInt(window.getComputedStyle(bullet1, null).getPropertyValue('left'));
            bullet1.style.left = (moveforward + 130) + 'px';
            player1.src = 'images/character/player1/player1_run_right.gif';
            if (
                moveforward > stone2Rect.left &&
                (moveforward - 1) < stone2Rect.right
            ) {
                player1.style.left = (stone2Rect.left - 10) + 'px';
            }
            if (player1Rect.right < stone1Rect.left &&
                player1Rect.left > stone1Rect.right) {

                player1.style.bottom = 20 + 'vh'
            }

            playerrun.play()


        }

        if ((event.key === 'a') || (event.key === 'A')) {

            player1.src = 'images/character/player1/player1_run_left.gif'
            let movebackward = parseInt(window.getComputedStyle(player1, null).getPropertyValue('left'));
            player1.style.left = (movebackward - 20) + 'px';
            let movedynamite = parseInt(window.getComputedStyle(dynamite, null).getPropertyValue('left'));
            dynamite.style.left = (movedynamite - 20) + 'px';
            let moveexplosion = parseInt(window.getComputedStyle(explosion, null).getPropertyValue('left'));
            explosion.style.left = (moveexplosion - 20) + 'px';
            // Check for collisions with the stone
            if (player1Rect.top < stone1Rect.bottom &&
                player1Rect.bottom > stone1Rect.top && player1Rect.left < stone1Rect.right &&
                player1Rect.right > stone1Rect.left) {
                player1.style.left = (stone1Rect.right + 1) + 'px';
            }


            playerrun.play()

        }
        

        if ((event.key === 'c') || (event.key === 'C')) {
         
            dynamite.style.display= 'block'

            setTimeout(() => {
                dynamite.style.display= 'none'

            }, 1000);

            setTimeout(() => {
                explode.play()
                explosion.style.display= 'block'
            }, 1000);

            setTimeout(() => {
                explosion.style.display= 'none'
            }, 2000);

        }

        if ((event.key === 'b') || (event.key === 'B')) {

            fire.style.display = 'block'

            setTimeout(() => {
                fire.style.display = 'none'

            }, 4000);
        }


        if ((event.key === 'f' || event.key === 'F') && firecount < 8) {
            // Fire a bullet
            bullet1.style.display = 'block';
            let movebackward = parseInt(window.getComputedStyle(player1, null).getPropertyValue('left'));
            bullet1.style.left = (movebackward + 100) + 'px';
            playershoot.play();
            firecount++;
            // Update totalammo
            totalammo.innerHTML = totalbullet - firecount;
        } 
        else if ((event.key === 'f' || event.key === 'F') && firecount >= 8) {
            // Player has no ammo
            bullet1.style.display = 'none';
            noammo.play();
            console.log('no ammo');
        }
        
        if (player1Rect.left < ammoRect.right &&
            player1Rect.right > ammoRect.left &&
            player1Rect.top < ammoRect.bottom &&
            player1Rect.bottom > ammoRect.top) {
            // Player catches ammo
            ammo.style.display = 'none';
        
            // Add 2 bullets and update totalammo
            firecount -= 2;
            totalammo.innerHTML =  totalbullet - firecount;
            reload.play();
        }
        



    };


    handleKeyUp = (event) => {

        let enemy_die = new Audio("audio/enemy_hurt.wav");
        let enemyhurt = new Audio("audio/enemyhurt.mp3");
        let eneme2driving= new Audio('audio/enemy2driving.mp3')
        let eneme2hit= new Audio('audio/enemy2hit.mp3')
        let fireaudio= new Audio('audio/fire.mp3')
        let eneme2die= new Audio('audio/enemy2die.mp3')

        
        const enemyhealth = document.getElementById('enemyhealth');
        const enemyhealth2 = document.getElementById('enemyhealth2');
        const enemybullet = document.getElementById('enemybullet');
        const player1 = document.getElementById('player1');
        const bullet1 = document.getElementById('bullet1');
        const enemy1 = document.getElementById('enemy1');
        const enemy2 = document.getElementById('enemy2');
        const fire = document.getElementById('fire');
        const gameover = document.getElementById('gameover');
        const explosion = document.getElementById('explosion');

        const explosionRect = explosion.getBoundingClientRect();
        const enemy1Rect = enemy1.getBoundingClientRect();
        const enemy2Rect = enemy2.getBoundingClientRect();
        const bullet1Rect = bullet1.getBoundingClientRect();
        const fireRect = fire.getBoundingClientRect();
        

        //Player : 1
        if ((event.key === 'D') || (event.key === 'd')) {

            player1.src = 'images/character/player1/player1_stand_right.gif'
        }
        if ((event.key === 'a') || (event.key === 'A')) {

            player1.src = 'images/character/player1/player_stand_left.gif'

        }
        
                if ((event.key === 'C') || (event.key === 'c')) {
                
                if (explosionRect.left < enemy1Rect.right &&
                    explosionRect.right > enemy1Rect.left &&
                    explosionRect.top < enemy1Rect.bottom &&
                    explosionRect.bottom > enemy1Rect.top)
                    {
                        enemyhealth.value -= 20;
                        enemyhurt.play()
                        if(enemyhealth.value === 0)
                        {
                            enemy1.style.display ='none'
                            enemyhealth.style.display ='none'
                            setTimeout(() => {
                            
                                enemy2.style.display='block'
                                enemyhealth2.style.display='block'
                                enemybullet.style.display = 'block'
                                eneme2driving.play()
                            }, 5000);
                        }
        
                    }
                if (explosionRect.left < enemy2Rect.right &&
                    explosionRect.right > enemy2Rect.left &&
                    explosionRect.top < enemy2Rect.bottom &&
                    explosionRect.bottom > enemy2Rect.top)
                    {
                        enemyhealth2.value -= 15;
                        if(enemyhealth2.value === 0)
                        {
                            enemy2.style.display ='none'
                            enemyhealth2.style.display ='none'
                            gameover.style.display = 'flex'

                        }
        
                    }
                }
                if ((event.key === 'B') || (event.key === 'b')) {
        
                    fireaudio.play()
        
                if (fireRect.left < enemy1Rect.right &&
                    fireRect.right > enemy1Rect.left &&
                    fireRect.top < enemy1Rect.bottom &&
                    fireRect.bottom > enemy1Rect.top)
                    {
                        enemyhealth.value -= 15;
                        enemyhurt.play()
                        if(enemyhealth.value === 0)
                        {
                            enemy1.style.display ='none'
                            enemyhealth.style.display ='none'
                            setTimeout(() => {
                            
                                enemy2.style.display='block'
                                enemyhealth2.style.display='block'
                                enemybullet.style.display = 'block'
                                eneme2driving.play()
                            }, 5000);
                        }
        
                    }
                if (fireRect.left < enemy2Rect.right &&
                    fireRect.right > enemy2Rect.left &&
                    fireRect.top < enemy2Rect.bottom &&
                    fireRect.bottom > enemy2Rect.top)
                    {
                        enemyhealth2.value -= 10;
                        if(enemyhealth2.value === 0)
                        {
                            enemy2.style.display ='none'
                            enemyhealth2.style.display ='none'
                        }
        
                    }
                }
        if ((event.key === 'f') || (event.key === 'F')) {

            
            if (bullet1Rect.left < enemy1Rect.right &&
                bullet1Rect.right > enemy1Rect.left &&
                bullet1Rect.top < enemy1Rect.bottom &&
                bullet1Rect.bottom > enemy1Rect.top) {
                enemyhurt.play()
                enemyhealth.value -= 20;
                console.log('touched');
                if (enemyhealth.value === 0) {
                    enemy1.src = 'images/character/enemy/enemy1_die.gif'
                    setTimeout(() => {

                    }, 1000);

                    setTimeout(() => {
                        enemy1.style.display = 'none'
                        enemy1.style.right = -30 + 'vw'
                        enemy_die.play()

                        enemyhealth.style.display = 'none'


                    }, 1500);

                    setTimeout(() => {
                        
                        enemy2.style.display='block'
                        enemyhealth2.style.display='block'
                        enemybullet.style.display = 'block'
                        eneme2driving.play()
                    }, 5000);
                }

            }

            setTimeout(() => {
                
                bullet1.style.display = 'none'
            }, 100);


            if (bullet1Rect.left < enemy2Rect.right &&
                bullet1Rect.right > enemy2Rect.left &&
                bullet1Rect.top < enemy2Rect.bottom &&
                bullet1Rect.bottom > enemy2Rect.top) {
                    eneme2hit.play()
                enemyhealth2.value -= 20; 
                console.log('touched');
                if (enemyhealth2.value === 0) {
                    setTimeout(() => {
                        enemy2.style.height = 30 + 'vh'
                        
                        enemy2.src = 'images/character/enemy/enemy2_die.gif'
                    }, 500);
                    setTimeout(() => {
                        
                        eneme2die.play()
                    }, 450);
                    setTimeout(() => {
                        enemy2.style.display = 'none'
                        enemy2.style.right = -35 + 'vw'
                        enemyhealth2.style.display = 'none'
                        gameover.style.display = 'flex'
                        
                    }, 4000);
                }

            }
        }
        

    };

    render() {
        return (null
        )
    }
}

export default Gameescript
