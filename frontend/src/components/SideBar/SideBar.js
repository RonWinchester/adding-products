import React from "react";
import { Context } from "../../contexts/context";

function SideBar() {
  const context = React.useContext(Context);
  let set = [];
  context.forEach((element) => {
    set.push(element.params);
  });
  let params = [];

  let params1 = new Set();
  let params2 = new Set();

  set.forEach((element) => {
    params = Object.fromEntries(Object.entries(element).slice(0, -1));
    params1.add(Object.values(element).slice(0, -1)[0])
    params2.add(Object.values(element).slice(0, -1)[1])
    
    /* params.forEach((el)=>{
      Array.from(el)
    }) */

  });

  console.log(params)
  return (
    <form className="sidebar">
      <h2 className="sidebar__title">Фильтр</h2>
      {/* <ul className="element__settings">
        {params.length > 0 ? (
          params.map((element, index) => (
            <li className="element__setting" key={index}>
              {element}
              <ul className="element__settings">
                {params.map((el, indx) => (
                  <li key={indx}>
                    <input type="radio" />
                    <label htmlFor="radio">{el}</label>
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p>Нет фильтров</p>
        )}
      </ul> */}
    </form>
  );
}

export default SideBar;
