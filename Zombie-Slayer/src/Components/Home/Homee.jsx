import React, { Component } from 'react';
import style from './Homee.module.css';
import Homescript from './Homescript';

export class Homee extends Component {
  constructor() {
    super();

    this.state = {
      gamemusic: new Audio("audio/gamemusic.mp3"),
      clickSound: new Audio("audio/click.mp3"), // Add this line
      count: 0,
      musicImage: 'images/character/music-disable.png',
    };
  }

  music = () => {
    const { gamemusic, count } = this.state;
    if (count % 2 === 0) {
      gamemusic.play();
      this.setState({ count: count + 1, musicImage: 'images/character/music.png' });
    } else {
      gamemusic.pause();
      this.setState({ count: count + 1, musicImage: 'images/character/music-disable.png' });
    }
  };

  playClickSound = () => {
    const { clickSound } = this.state;
    clickSound.currentTime = 0; // Reset the audio to the beginning
    clickSound.play();
  };

  render() {
    const { musicImage } = this.state;

    return (
      <section>
        <img src="images/character/player1/player1_anim.gif" className={style.player} />
        <img src="images/character/enemy.gif" className={style.enemy} />

        <div className={style.menu}>
          <h1>Zombie Slayer</h1>
          <h2>Developed by Numan</h2>

          <ul>
            <li><a href="/level" onClick={this.playClickSound}>Play</a></li>
            <li><a href="/shop" onClick={this.playClickSound}>Shop</a></li>
            <li><a href="/about" onClick={this.playClickSound}>About</a></li>
          </ul>
          <img src={musicImage} onClick={this.music} className={style.music} id='music' />
        </div>
      </section>
    );
  }
}

export default Homee;
