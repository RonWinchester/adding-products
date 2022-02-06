import React from "react";
import { Context } from "../../contexts/context";

function SideBar() {
  const context = React.useContext(Context);
  const [checked, setChecked] = React.useState(null)
  function chengeCheckbox(e) {
    setChecked(e.target.value);
    console.log(e.target.value)
 }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log()
  }

  let onlyParams = [];
  let paramsName = [];
  let types = new Set();
  let brands = new Set();

  context.forEach((element) => {
    onlyParams.push(element.params);
  });

  onlyParams.forEach((element) => {
    paramsName = Object.keys(element).slice(0, -1);
    types.add(Object.values(element).slice(0, -1)[0]);
    brands.add(Object.values(element).slice(0, -1)[1]);
  });

  let allSpecifications = [Array.from(types), Array.from(brands)];
  return (
    <form className="sidebar">
      <h2 className="sidebar__title">Фильтр</h2>
      {
        <ul className="element__settings">
          {paramsName.length > 0 ? (
            paramsName.map((element, index) => (
              <li className="element__setting" key={index}>
                {element}
                <ul className="element__settings">
                  {allSpecifications[index].map((el, indx) => (
                    <li
                      key={indx}
                      className="element__setting element__setting_nested"
                    >
                      <label htmlFor="checkbox" className="sidebar__label">
                        <input type="checkbox" className="sidebar__input" value={el} name={el} checked={el === checked} onChange={(e)=> chengeCheckbox(e)}/>
                        {el}
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            ))
          ) : (
            <p>Нет фильтров</p>
          )}
        </ul>
      }
      <button type="submit" className="sidebar__button" onClick={handleSubmit}>
        Применить
      </button>
    </form>
  );
}

export default SideBar;
