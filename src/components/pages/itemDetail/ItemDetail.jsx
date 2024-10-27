import "./ItemDetail.css";
import React from "react";
import Counter from "../../common/counter/Counter";

const ItemDetail = ({ item, agregarAlCarrito }) => {
  return (
    <div className="item-detail-container">
      <div className="item-detail-content">
        <img
          className="item-detail-image"
          src={item.imageUrl}
          alt={item.title}
        />
        <div className="item-detail-info">
          <h1 className="item-title">{item.title}</h1>
          <h3 className="item-description">{item.description}</h3>
          <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
