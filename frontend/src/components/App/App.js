import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Content from "../Content/Content";
import { getProduct } from "../../utils/api/Api";
import { Context } from "../../contexts/context";

function App() {
  const [product, setProduct] = React.useState([]);
  function handleRequest(query) {
    console.log(query);
  }

  React.useLayoutEffect(() => {
    getProduct()
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page__container">
      <Context.Provider value={product}>
        <Header />
        <main className="alignment">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <SearchForm handleRequest={handleRequest} />
                  <Content />
                </>
              }
            />
            <Route
              exact
              path="/create"
              element={
                <>
                  <div />
                </>
              }
            />
          </Routes>
        </main>
      </Context.Provider>
    </div>
  );
}
export default App;
