import React, { Component } from 'react'
import styles from './Gamee.module.css'
import style from './Toolss.module.css'
import { Gameescript } from './Gameescript'
import { dynamitetool, firetool } from './Gameescript'; // Import the functions

export class Gamee extends Component {
    render() {
        return (
            <aside>

         <img src="images/character/bloodright.png" className='blood' id='bloodeffect'/>

                <div className={styles.bar}>

                    <div className={styles.healthbar}>

                        <img src="images/character/player1/playerlogo.png" />
                        <progress id="playerhealth" max="100" value="100" className={styles.playerhealth} ></progress>

                    </div>

                    <div className={styles.ammobar}>

                        <h2>Total Ammo :</h2>

                        <p id="totalammo" > 8 </p>

                    </div>

                </div>

                <div className={style.tools}>

                <img src="images/character/tools/dynamite.gif" className={style.dynamitetool} />
                <img src="images/character/tools/fire.gif" className={style.firetool}/>
                <img src="images/character/tools/healthpotion.gif" className={style.healthpotion}  />
                


                </div>

                <div className={styles.pausemenu}>
                 
                 <img src="images/character/pause.png"  />

                </div>


                <img src="images/character/player1/player1_stand_right.gif" id='player1' className={styles.player1} />
                <img src="images/character/enemy/enemy1_run.gif" className={styles.enemy1} id='enemy1' />
                <img src="images/character/enemy/enemy2.gif" className={styles.enemy2} id='enemy2' />
                <progress id="enemyhealth" max="100" value="100" className={styles.enemybar}></progress>
                <progress id="enemyhealth2" max="100" value="100" className={styles.enemybar2}></progress>
                <audio src='audio/enemyvoice.mp3' autoPlay />


                <p className={styles.bullet1} id='bullet1'> bullet </p>
                <h3 className={styles.enemybullet} id='enemybullet'> bullet </h3>
                 <p className={styles.hole}>hole</p>

                <img src="images/character/player1/bullet.png" className={styles.ammo} id='ammo' />



                <img src="images/character/portal.gif" className={styles.portal} />
                <audio src='audio/portal.wav' autoPlay />

                <div className={styles.stone1} id='stone1'>
                </div>
                <div className={styles.stone2} id='stone2'>
                </div>



                <img src="images/character/tools/fire.gif" className={style.fire} id='fire'/>
                <img src="images/character/tools/dynamite.gif" className={style.dynamite} id='dynamite'/>
                <img src="images/character/tools/explosion.gif" className={style.explosion} id='explosion'/>


                <img src="images/character/bushes.png" className={styles.bushes} />
                <img src="images/character/enemyflag.gif" className={styles.enemyflag} />
                <img src="images/character/board.png" className={styles.board} />


            <div className={style.gameover} id='gameover'>
                <h1>Level 1 Completed </h1>
               <a href="/"> <h2>Continue</h2> </a>
               <a href="/"><h3>Restart this Level</h3></a> 
               <a href="/"> <h4>Exit</h4> </a>
            </div>
      




                <Gameescript />
            </aside>
        )
    }
}

export default Gamee
