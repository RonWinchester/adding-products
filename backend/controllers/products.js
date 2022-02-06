const Product = require("../models/product");

module.exports.createProduct = (req, res) => {
  const { title, description, params } = req.body;

  Product.create({ title, description, params })
    .then((product) => res.send({ data: product }))
    .catch((err) =>
      res
        .status(500)
        .send({ message: `Произошла ошибка при создании товара ${err}` })
    );
};

module.exports.getProducts = (req, res) => {
  Product.find({})
    .then((product) => {
      res.status(200).send({ product });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Произошла ошибка при получении списка товаров ${err}`,
      });
    });
};

module.exports.getProduct = (req, res) => {
  const { title } = req.body;
  Product.find({})
    .then((products) => {
      const result = products.filter((product) => {
        return (
          product.title.toLowerCase().includes(title.toLowerCase()) ||
          product.params.brand.toLowerCase().includes(title.toLowerCase()) ||
          product.params.type.toLowerCase().includes(title.toLowerCase())
        );
      });
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Произошла ошибка при получении списка товаров ${err}`,
      });
    });
};

module.exports.getParamsProduct = (req, res) => {
  const data = req.body;
  Product.find({})
    .then((products) => {
      if (data.length === 0) {
        return res.status(200).send(products);
      }
      let filterData = null;

      let result = []

      data.forEach((element) => {
        filterData = products.filter((product) => {
          return (
            product.params.brand
              .toLowerCase()
              .includes(element.toLowerCase()) ||
            product.params.type.toLowerCase().includes(element.toLowerCase())
          );
        });
        result.length > 0 ? (result = [...result, ...filterData]) : (result =[...filterData])        
      });
      res.status(200).send(Array.from(new Set(result)));
    })
    .catch((err) => {
      res.status(500).send({
        message: `Произошла ошибка при фильтрации товаров ${err}`,
      });
    });
};
