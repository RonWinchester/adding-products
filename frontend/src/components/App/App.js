import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Content from "../Content/Content";
import {
  getProduct,
  productSearch,
  createProduct,
  productFilter,
} from "../../utils/api/Api";
import { Context } from "../../contexts/context";
import Footer from "../Footer/Footer";
import AddForm from "../AddForm/AddForm";

function App() {
  const [product, setProduct] = React.useState([]);
  function handleRequest(query) {
    productSearch(query)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const location = useLocation();

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify([]));
    const allProduct = JSON.parse(localStorage.getItem("allData"));
    setProduct(allProduct);
  }, [location]);

  function handleFormRequest(data) {
    createProduct(data)
      .then((res) => {
        getProduct().then((res) => {
          const { product } = res;
          setProduct(product);
          localStorage.setItem(
            "allData",
            JSON.stringify(Array.from(new Set(product)))
          );
        });
        alert('Товар добавлен успешно!')
      })
      .catch((err) => {
        console.log(err);
        alert('Что-то пошло не так')
      });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const product = JSON.parse(localStorage.getItem("data"));
    productFilter(product)
      .then((res) => {
        setProduct(res);
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
        localStorage.setItem("data", JSON.stringify([]));
        localStorage.setItem(
          "allData",
          JSON.stringify(Array.from(new Set(product)))
        );
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
                  <Content handleSubmit={handleSubmit} />
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
