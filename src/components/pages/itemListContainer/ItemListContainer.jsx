import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";

export const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unaFraccion = products.filter(
      (producto) => producto.category === name
    );
    const getProducts = new Promise((resolve) => {
      resolve(name ? unaFraccion : products);
    });
    getProducts.then((res) => {
      setItems(res);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <>
        <div>
          <Skeleton variant="rectangular" width={200} height={100} />
          <Skeleton variant="text" width={200} height={50} />
          <Skeleton variant="text" width={200} height={100} />
          <Skeleton variant="text" width={200} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={200} height={100} />
          <Skeleton variant="text" width={200} height={50} />
          <Skeleton variant="text" width={200} height={100} />
          <Skeleton variant="text" width={200} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={200} height={100} />
          <Skeleton variant="text" width={200} height={50} />
          <Skeleton variant="text" width={200} height={100} />
          <Skeleton variant="text" width={200} height={100} />
        </div>
        <div>
          <Skeleton variant="rectangular" width={200} height={100} />
          <Skeleton variant="text" width={200} height={50} />
          <Skeleton variant="text" width={200} height={100} />
          <Skeleton variant="text" width={200} height={100} />
        </div>
      </>
    );
  }

  return <ItemList items={items} />;
};
