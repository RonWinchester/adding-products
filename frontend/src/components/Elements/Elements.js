import React from "react";
import { Context } from "../../contexts/context";
import Element from "../Element/Element";

function Elements() {
  const  product  = React.useContext(Context);
  return (
    <ul className="elements">
    {product.length > 0 ? (
        product.map((element) => <Element key={element._id} title={element.title} description={element.description} params={element.params}/>)
      ) : (
        <p className="elements__plug">Нет товаров</p>
      )}
    </ul>
  );
}

export default Elements;
