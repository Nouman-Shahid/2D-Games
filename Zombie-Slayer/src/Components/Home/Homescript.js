import React, { Component } from 'react';

class Homescript extends Component {
  componentDidMount() {
    // Add event listener when the component mounts
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Remove event listener when the component unmounts to avoid memory leaks
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'n' || event.key === 'N') {
      // Create an audio object and play the audio
      const click = new Audio('audio/click.mp3');
      click.play();
    }
  };

  render() {
    return null;
  }
}

export default Homescript;
