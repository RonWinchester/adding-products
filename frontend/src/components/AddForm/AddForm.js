import React from "react";

function AddForm({ handleFormRequest }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [type, setType] = React.useState("");
  const [brand, setBrand] = React.useState("");

  function reset() {
    setName("");
    setDescription("");
    setType("");
    setBrand("");
  }

  function inputHandler(e) {
    switch (e.target.name) {
      case "title": {
        setName(e.target.value);
        break;
      }
      case "description": {
        setDescription(e.target.value);
        break;
      }
      case "type": {
        setType(e.target.value);
        break;
      }
      case "brand": {
        setBrand(e.target.value);
        break;
      }
      default:
        reset();
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleFormRequest({
      title: name,
      description: description,
      params: {
        type: type,
        brand: brand,
      },
    });
    reset();
  };
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <h1 className="addForm__title">Введите данные товара</h1>
      <fieldset className="addForm__fieldset">
        <input
          onChange={inputHandler}
          name="title"
          value={name}
          className="addForm__input"
          placeholder="Название"
          type="text"
          minLength={2}
          required
        ></input>
        <input
          name="description"
          onChange={inputHandler}
          value={description}
          className="addForm__input"
          placeholder="Описание"
          type="text"
          minLength={2}
          required
        ></input>
      </fieldset>
      <fieldset className="addForm__fieldset">
        <h2 className="addForm__subtitle">Характеристики:</h2>
        <input
          name="type"
          onChange={inputHandler}
          value={type}
          className="addForm__input"
          placeholder="Тип"
          type="text"
          minLength={2}
          required
        ></input>
        <input
          name="brand"
          onChange={inputHandler}
          value={brand}
          className="addForm__input"
          placeholder="Бренд"
          type="text"
          minLength={2}
          required
        ></input>
      </fieldset>
      <button className="addForm__button" type="submit">
        Отправить
      </button>
    </form>
  );
}

export default AddForm;
