const router = require("express").Router();
const { createProduct, getProducts, getProduct, getParamsProduct } = require("../controllers/products");

router.get("/", getProducts);
router.post("/product", getProduct);
router.post("/params", getParamsProduct);
router.post("/", createProduct);

module.exports = router;