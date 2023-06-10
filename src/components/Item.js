import React from "react";
import { useState } from 'react';


const Item = () => {
  const [inCart, setInCart] = useState(false);

  const handleCartToggle = () => {
    setInCart(!inCart);
  };

  const cartButtonText = inCart ? 'Remove From Cart' : 'Add to Cart';
  const listItemClass = inCart ? 'in-cart' : '';

  return (
    <li className={listItemClass}>
      Item Name
      <button onClick={handleCartToggle}>{cartButtonText}</button>
    </li>
  );
};

export default Item;
