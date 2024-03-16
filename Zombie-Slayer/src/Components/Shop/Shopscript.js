// Shop.js

import React from 'react';

const ShopItem = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Power: {item.power}</p>
    </div>
  );
};

export default ShopItem;
