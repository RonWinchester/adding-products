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
        return product.title.toLowerCase().includes(title.toLowerCase());
      });
      res.status(200).send({ result });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Произошла ошибка при получении списка товаров ${err}`,
      });
    });
};

module.exports.getParamsProduct = (req, res) => {
  const { params } = req.body;
  const condition =
    Object.keys(params).length > 1
      ? {
          "params.type": params.type,
          "params.brand": params.brand,
        }
      : {
          $or: [
            { "params.type": params.type },
            { "params.brand": params.brand },
          ],
        };

  Product.find(condition)
    .then((products) => {
      res.status(200).send({ products });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Произошла ошибка при фильтрации товаров ${err}`,
      });
    });
};
