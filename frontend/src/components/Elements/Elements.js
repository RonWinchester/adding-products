import React from "react";
import { Context } from "../../contexts/context";
import Element from "../Element/Element";

function Elements() {
  const { product } = React.useContext(Context);
  console.log(product);
  return (
    <ul>
      {product !== undefined ? (
        product.map((element) => <Element key={element._id} title={element.title} description={element.description}/>)
      ) : (
        <p>Нет товаров</p>
      )}
    </ul>
  );
}

export default Elements;
