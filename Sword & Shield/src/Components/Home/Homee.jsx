import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const inventoryRef = useRef(null);
  const controlsRef = useRef(null);
  const detail1Ref = useRef(null);
  const detail2Ref = useRef(null);
  const detail3Ref = useRef(null);
  const detail4Ref = useRef(null);

   useEffect(() => {
    // Get DOM elements when the component is mounted
    const detail1 = document.getElementById('detail1');
    const detail2 = document.getElementById('detail2');
    const detail3 = document.getElementById('detail3');
    const detail4 = document.getElementById('detail4');

    // Update refs with the DOM elements
    detail1Ref.current = detail1;
    detail2Ref.current = detail2;
    detail3Ref.current = detail3;
    detail4Ref.current = detail4;
  }, []);

  const gotoGame = () => {
    navigate('/game'); 
  };

  const hidecharacter = () => {
    if (inventoryRef.current) {
      inventoryRef.current.style.display = 'none';
      controlsRef.current.style.display ='none'
    }
  };
  const showcontrol = () => {
    controlsRef.current.style.display = 'flex';
    inventoryRef.current.style.display = 'none';

  };
  let king = () => {
      detail1Ref.current.style.display = 'flex';
      detail2Ref.current.style.display = 'none';
      detail3Ref.current.style.display = 'none';
      detail4Ref.current.style.display = 'none';


   
  };
  let leader = () => {
    detail1Ref.current.style.display = 'none';
    detail2Ref.current.style.display = 'flex';
    detail3Ref.current.style.display = 'none';
    detail4Ref.current.style.display = 'none';

  };
  const soldier = () => {
    detail1Ref.current.style.display = 'none';
    detail2Ref.current.style.display = 'none';
    detail3Ref.current.style.display = 'flex';
    detail4Ref.current.style.display = 'none';
  };
  const knight = () => {
    detail1Ref.current.style.display = 'none';
    detail2Ref.current.style.display = 'none';
    detail3Ref.current.style.display = 'none';
    detail4Ref.current.style.display = 'flex';
  };

  const showcharacter = () => {
    if (inventoryRef.current) {
      inventoryRef.current.style.display = 'flex';
      controlsRef.current.style.display ='none'

    }
  };

  return (
    <>
    
    <div className={styles.home}>

     <div className={styles.menu}>
      <img src="images/assets/game_logo.png" alt="" />
      <h1>Sword & Shield</h1>
      <h3>Developed by Numan</h3>
      <button onClick={gotoGame}>Start Game</button>
      <button onClick={showcharacter}> Character</button>
      <button onClick={showcontrol}>Controls</button>
      {/* <button >About</button> */}
     </div>

     <div className={styles.inventory} id='inventory' ref={inventoryRef}>
       
       <div className={styles.players}>
        <img src="images/assets/king_stand.gif" className={styles.playerimg} onClick={king}/>
        <img src="images/assets/leader_stand.gif" className={styles.playerimg} onClick={leader}/>
        <img src="images/assets/soldier_stand.gif" className={styles.playerimg} onClick={soldier}/>
        <img src="images/player/player_stand.gif" className={styles.knight} onClick={knight}/>
       </div>

       <div className={styles.details} id='detail1'>
       <h1>King</h1>
       <img src="images/assets/king_attack.gif"  id='playerimg'/>

        <label>Attack : <progress id='attack' value='92' max='100'></progress></label>
        <label>Health : <progress id='health' value='95' max='100'></progress></label>
        <label>Sprint : <progress id='sprint' value='97' max='100'></progress></label>
         
         <button id='purchase'>for 1k coins </button>


       </div>

       
       <div className={styles.details} id='detail2' style={{display:'none'}}>
       <h1>Prince</h1>

       <img src="images/assets/leader_att.gif"  className={styles.player2} />
       <label>Attack : <progress id='attack' value='92' max='100'></progress></label>
        <label>Health : <progress id='health' value='81' max='100'></progress></label>
        <label>Sprint : <progress id='sprint' value='87' max='100'></progress></label>
         
         <button id='purchase'>for 500 coins </button>


       </div>


       <div className={styles.details} id='detail3' style={{display:'none'}}>
       <h1>Arrow Man</h1>

       <img src="images/assets/soldier1_attack.gif"  id='playerimg'/>
       <label>Attack : <progress id='attack' value='84' max='100'></progress></label>
        <label>Health : <progress id='health' value='85' max='100'></progress></label>
        <label>Sprint : <progress id='sprint' value='81' max='100'></progress></label>
         
         <button id='purchase'>for 200 coins </button>


       </div>


       <div className={styles.details} id='detail4' style={{display:'none'}}>
       <h1>Knight</h1>

       <img src="images/player/player_attack.gif"  id='playerimg'/>
       <label>Attack : <progress id='attack' value='82' max='100'></progress></label>
        <label>Health : <progress id='health' value='75' max='100'></progress></label>
        <label>Sprint : <progress id='sprint' value='77' max='100'></progress></label>
         
         <button id='purchase'>Selected </button>


       </div>


       <img src="images/assets/cross.png" className={styles.cross} onClick={hidecharacter} />

        

     </div>
     <div className={styles.controls} id='controls'  ref={controlsRef} style={{display:'none'}}>
      
      <div className={styles.left}>
      <h2>Arrow Up :</h2>
      <h2>Arrow Down :</h2>
      <h2>Arrow Left :</h2>
      <h2>Arrow Right :</h2>
      <h2>F :</h2>
      <h2>B :</h2>
      <h2>E :</h2>
      </div>
      <div className={styles.right}>
      <h2>Move Up </h2>
      <h2>Move Down </h2>
      <h2>Move Left</h2>
      <h2>Move Right </h2>
      <h2>Attack</h2>
      <h2>Defend Attack</h2>
      <h2>Emotes</h2>
      </div>
      

         <img src="images/assets/cross.png" className={styles.cross} onClick={hidecharacter} />

       </div>
    </div>

    </>

    
  );
};

export default Home;
