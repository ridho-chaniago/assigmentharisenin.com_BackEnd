const express = require("express");

const ProductsController = require("../controller/products");
const router = express.Router();

router.get('/',ProductsController.getAllProducts );
router.get('/:id',ProductsController.getSingleProducts );
router.get('/categories',ProductsController.getCategoryProducts );
router.get('/category/:id',ProductsController.getCategoryOfAProducts );

module.exports = router