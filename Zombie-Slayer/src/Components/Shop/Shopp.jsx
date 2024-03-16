// Shop.jsx

import React, { Component } from 'react';
import styles from './Shopp.module.css';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }

  handleItemClick = (item) => {
    this.setState({ selectedItem: item });
  };

  render() {
    const items = [
      {
        id: 1,
        name: 'Upgrade Fire',
        description: 'Burns zombies, keeping them at bay with intense heat.',
        power: '+10 damage',
        image: 'images/character/tools/fire.gif',
        text : 'Available at level 2'
      },
      {
        id: 2,
        name: 'Upgrade Healthpotion ',
        description: 'Revive your character with a Health Potion in the direst moments.',
        power: '+10 health',
        image: 'images/character/tools/healthpotion.gif',
        text : 'Available at level 2'

      },

      {
        id: 3,
        name: 'Upgrade Dynamite ',
        description: ' A powerful explosive for defeating zombies.',
        power: '+8 damage',
        image: 'images/character/tools/dynamite.png',
        text : 'Available at level 3'

      },

      {
        id: 4,
        name: 'Upgrade Droid ',
        description: 'Vulnerable to melee attacks.',
        power: '+10 health  ,  +5 damage',
        image: 'images/character/tools/droid.gif',
        text : 'Available at level 3'

      },
    ];

    const { selectedItem } = this.state;

    return (
        <>
      <div className={styles.shop}>
        <div className={styles.itemList}>
          {items.map((item) => (
            <div
              key={item.id}
              className={styles.item}
              onClick={() => this.handleItemClick(item)}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
        <div className={styles.itemDetails}>
          {selectedItem && (
            <div className={styles.selectedItem}>
              <img src={selectedItem.image} alt={selectedItem.name} />
              <h2>{selectedItem.name}</h2>
              <p>{selectedItem.description}</p>
              <h3>{selectedItem.power}</h3>
              <button>{selectedItem.text}</button>
            </div>
          )}
        </div>
      </div>
      <a href="/"><img src="images/character/arrow-left.png" className={styles.arrow} /></a>

      </>
    );
  }
}

export default Shop;
