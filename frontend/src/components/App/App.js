import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Content from "../Content/Content";
import { getProduct, movieSearch, createProduct } from "../../utils/api/Api";
import { Context } from "../../contexts/context";
import Footer from "../Footer/Footer";
import AddForm from "../AddForm/AddForm";

function App() {
  const [product, setProduct] = React.useState([]);
  function handleRequest(query) {
    movieSearch(query)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleFormRequest(data) {
    createProduct(data)
      .then((res) => {
        getProduct().then((res) => {
          const { product } = res;
          setProduct(product);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useLayoutEffect(() => {
    getProduct()
      .then((res) => {
        const { product } = res;
        setProduct(product);
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
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/create"
              element={
                <>
                  <AddForm handleFormRequest={handleFormRequest} />
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
