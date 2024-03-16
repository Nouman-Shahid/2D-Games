// About.jsx

import React from 'react';
import styles from './About.module.css';


const About = () => {
  
  return (
    <>

    <div className={styles.about}>
      <h1 className={styles.title}>Zombie Slayer</h1>
      <div className={styles.description}>
        <p>
          Welcome to the post-apocalyptic world infested with zombies! In "Zombie Slayer," you take on the role of a fearless survivor tasked with the mission to eradicate hordes of relentless zombies that emerge from mysterious portals. Are you up for the challenge?
        </p>
      </div>
      <div className={styles.features}>
        <h2>Key Features:</h2>
        <ul>
          <li><strong>Intense Zombie Combat:</strong> Face off against a variety of terrifying zombie types, each with their own strengths and weaknesses.</li>
          <li><strong>Mysterious Portals:</strong> Discover the source of the zombie outbreak as you battle your way through the game's gripping storyline.</li>
          <li><strong>Upgrade System:</strong> Customize your character with upgrades and new weapons to adapt to increasingly challenging levels.</li>
        </ul>
      </div>
      <div className={styles.objective}>
        <h2>Objective:</h2>
        <p>
          Survive the zombie onslaught, clear each level by eliminating all undead threats, and ultimately uncover the secrets behind the zombie portals to save humanity from the brink of extinction.
        </p>
      </div>
      <div className={styles.controls}>
        <h2>Controls:</h2>
        <ul>
          <li>Move:          [ A  D ]</li>
          <li>Jump:          [ W ]</li>
          <li>Shoot:         [ F ]</li>
          <li>Reload:        [ R ]</li>
          <li>Gernades:      [ C ]</li>
        </ul>
      </div>
      <div className={styles.credits}>
        <h2>Developed By:  [  Numan Shahid  ]</h2>
       
      </div>
   
     
    </div>

      <a href="/"><img src="images/character/arrow-left.png" className={styles.arrow} /></a>
    </>
  );
};

export default About;
