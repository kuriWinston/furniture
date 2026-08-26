import React from "react";

function Product({ item }) {
  return (
    <button className="product-card" type="button">
      <div className="product-image">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="product-info">
        <h2>{item.name}</h2>
        <p>Від {item.price} ₴</p>
      </div>
    </button>
  );
}

export default Product;
