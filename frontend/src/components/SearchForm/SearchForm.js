import React from "react";
import "./SearchForm.css";

function SearchForm({ handleRequest }) {
  const [query, setQuery] = React.useState("");

  function handleSearchChange(e) {
    setQuery(e.target.value);
    e.target.value === '' && handleRequest(e.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    return handleRequest(query);
  };

  return (
    <form
      noValidate
      id="search-form"
      onSubmit={handleSubmit}
      className="search-form"
    >
      <fieldset className="search-form__fieldset">
        <label className="search-form__label">
          <input
            required
            placeholder={"Поиск"}
            type="text"
            minLength="2"
            name="name-search"
            className="search-form__input"
            onChange={handleSearchChange}
            autoComplete="none"
            value={query}
          />
        </label>
        <button
          type="submit"
          className="search-form__button"
          onClick={handleSubmit}
        />
      </fieldset>
    </form>
  );
}

export default SearchForm;
