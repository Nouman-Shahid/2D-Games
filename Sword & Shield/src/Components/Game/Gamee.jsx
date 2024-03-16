// Game.jsx
import React, { Component } from 'react';
import styles from './Gamee.module.css';
import GameScript from './Gameescript';
import Enemy2 from './Enemy2';



class Game extends Component {
  render() {
    return (
      <>

        <div className= {`${styles.game_container} ${styles.background}`}  id='background'>
          <div className={styles.healthbar} id='healthbar'>
            <img   src="images/player/player_log.png" alt="playerlogo" />
            <progress id="playerhealth"  max="100" value="100"> </progress>

          </div>
            <img id='player' className={styles.player}  src="images/player/player_stand.gif" alt="player" />
            <img id='healpotion' className={styles.healpotion}  src="images/assets/healpotion.gif" alt="healpotion" />
            <img src='images/assets/coin.gif' alt='coin' id='coin1' className={styles.coin1} />
            <img src='images/assets/coin.gif' alt='coin' id='coin2' className={styles.coin2} />
            <img src='images/assets/coin.gif' alt='coin' id='coin3' className={styles.coin3} />

            <div className={styles.coinbar} id='coinbar'>
              <img src="images/assets/static_coin.gif" alt="coinimage" />
            <h2 id='totalcoins' className={styles.total}>Coins : 0 </h2>
            </div>

          <div className={styles.enemy} >
            <img src="images/enemy/enemy1_stand.gif" alt="enemy" className={styles.enemy1}  id='enemy'/>
            <progress id="enemyhealth" max="100" value="100"></progress>
        </div>

        <Enemy2 />    
       
        </div>

<GameScript />
      </>
    );
  }
}

export default Game;
