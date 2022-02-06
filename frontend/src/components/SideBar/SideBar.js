import React from "react";
import { Context } from "../../contexts/context";

function SideBar({ handleSubmit }) {
  const context = React.useContext(Context);

  const allProduct = JSON.parse(localStorage.getItem("allData"));

  let onlyParams = [];
  let types = new Set();
  let brands = new Set();

  allProduct === null
    ? context.forEach((element) => {
        onlyParams.push(element.params);
      })
    : allProduct.forEach((element) => {
        onlyParams.push(element.params);
      });

  onlyParams.forEach((element) => {
    types.add(Object.values(element).slice(0, -1)[0]);
    brands.add(Object.values(element).slice(0, -1)[1]);
  });

  const [checkedState, setCheckedState] = React.useState(
    new Array(types.length).fill(false)
  );

  const [checkedStateBrand, setCheckedStateBrand] = React.useState(
    new Array(types.length).fill(false)
  );

  const handleOnChange = (e, position) => {
    if (Array.from(types).includes(e.target.value)) {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );

      setCheckedState(updatedCheckedState);
    } else {
      const updatedCheckedStateBrand = checkedStateBrand.map((item, index) =>
        index === position ? !item : item
      );

      setCheckedStateBrand(updatedCheckedStateBrand);
    }

    if (e.target.checked) {
      const product = JSON.parse(localStorage.getItem("data"));
      if (product !== null) {
        product.push(e.target.value);
        return localStorage.setItem(
          "data",
          JSON.stringify(Array.from(new Set(product)))
        );
      } else {
        return localStorage.setItem("data", JSON.stringify([e.target.value]));
      }
    } else {
      const product = JSON.parse(localStorage.getItem("data"));
      const newProduct = new Set(product);
      newProduct.delete(e.target.value);
      if (product !== null) {
        return localStorage.setItem(
          "data",
          JSON.stringify(Array.from(newProduct))
        );
      }
    }
  };

  return (
    <form className="sidebar">
      <h2 className="sidebar__title">Фильтр</h2>
      {
        <ul className="element__settings">
          Тип:
          {Array.from(types).map((element, index) => (
            <li
              key={index}
              className="element__setting element__setting_nested"
            >
              <label htmlFor="checkbox" className="sidebar__label">
                <input
                  type="checkbox"
                  className="sidebar__input"
                  value={element}
                  name={element}
                  checked={checkedState[index]}
                  onChange={(e) => handleOnChange(e, index)}
                />
                {element}
              </label>
            </li>
          ))}
        </ul>
      }
      {
        <ul className="element__settings">
          Бренд:
          {Array.from(brands).map((element, index) => (
            <li
              key={index}
              className="element__setting element__setting_nested"
            >
              <label htmlFor="checkbox" className="sidebar__label">
                <input
                  type="checkbox"
                  className="sidebar__input"
                  value={element}
                  name={element}
                  checked={checkedStateBrand[index]}
                  onChange={(e) => handleOnChange(e, index)}
                />
                {element}
              </label>
            </li>
          ))}
        </ul>
      }
      <button type="click" className="sidebar__button" onClick={handleSubmit}>
        Применить
      </button>
    </form>
  );
}

export default SideBar;
