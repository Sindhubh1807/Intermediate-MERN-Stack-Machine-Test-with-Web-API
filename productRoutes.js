const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Example route to get all products
router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

module.exports = router;
