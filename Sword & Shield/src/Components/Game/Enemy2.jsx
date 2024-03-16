import React, { Component } from 'react'
import styles from './Enemy2.module.css';
import EnemyScript from './Enemy2script';
import { useNavigate } from 'react-router-dom'; 


const Enemy2 = () => {
  const navigate = useNavigate(); 

  const gotoHome = () => {
    navigate('/'); 
  };

  return (
    <>
<div className={styles.enemy} id='enemy2div'>
    <img src="images/enemy/enemy2_stand.gif" alt="enemy" className={styles.enemy1}  id='enemy2'/>
    <progress id="enemyhealth2" max="100" value="100"></progress>
</div>
<div className={styles.enemy3} >
    <img src="images/enemy/enemy3_stand.gif" alt="enemy" className={styles.enemy3}  id='enemy3'/>
    <progress id="enemyhealth3" max="100" value="100"></progress>
</div>

<div className={styles.gameover} id='gameover'>
  <h1>Game Over!</h1>
  <h3>Good Work Knight</h3>
  <button onClick={gotoHome}>Menu</button>

</div>
<EnemyScript />

</>
  );
};

export default Enemy2;






