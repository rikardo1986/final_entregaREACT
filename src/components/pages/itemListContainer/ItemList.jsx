import "./itemList.css";
import { Card } from "../../common/card/Card";

const ItemList = ({ items }) => {
  return (
    <>
      <h2>Lista de equipos</h2>
      <div className="card-list">
        {items.map(({ id, title, price, stock, imageUrl }) => (
          <Card
            key={id}
            title={title}
            price={price}
            stock={stock}
            image={imageUrl}
            id={id}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
