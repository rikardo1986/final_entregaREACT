import "./card.css";
import { Link } from "react-router-dom";
export const Card = ({ title, price, stock, image, id }) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h3 className="card-title"> {title}</h3>
        <p className="card-price"> Precio: ${price}</p>
        <p className="card-stock"> Stock: {stock}</p>
        <Link to={`/itemDetail/${id}`}>
          <button className="card-button">Especificaciones</button>
        </Link>
      </div>
    </div>
  );
};
