import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);


  function handleCartToggle() {
      setInCart(!inCart);
    };

  const liClassName = inCart ? "in-cart" : "";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick= {handleCartToggle}>{inCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
