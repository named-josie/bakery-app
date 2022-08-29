//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const products = express.Router();
//import db
const db = require('../db/dbConfig');
//import validation
const {
    getAllProducts,
    getAProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../queries/products');

const {
    checkName,
    checkImage,
    checkCapitalization,
  } = require('../validation/checkProducts');

//any() coming from the pg promise, first argument is sql command,
//.any can be used when it is returning all or none

//Index
products.get('/', async (req, res) => {
  console.log('get all /');

  const allProducts = await getAllProducts();
  if (allProducts[0]) {
    res.status(200).json({
      success: true,
      payload: allProducts,
    });
  } else {
    res.status(500).json({
      error: 'server error',
    });
  }
});

//Show
products.get('/:id', async (req, res) => {
  console.log('get one /:id');
  const { id } = req.params;

  const product = await getAProduct(id);
  if (product.id) {
    res.status(200).json({
      success: true,
      payload: product,
    });
  } else {
    res.status(404).json({
      success: false,
      id: id,
      payload: 'not found',
    });
  }
});

//CREATE
products.post(
  '/new',
  checkName,
  checkImage,
  checkCapitalization,
  async (req, res) => {
    try {
      const addProduct = await createProduct(req.body);
      res.status(200).json({
        success: true,
        payload: addProduct[0],
      });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({ success: false });
    }
  }
);

//DELETE
products.delete('/:id', async (req, res) => {
  console.log('Delete /:id', req.body, req.params);
  const { id } = req.params;
  const deletedProduct = await deleteProduct(id);
  if (deletedProduct) {
    if (deletedProduct.id) {
      res.status(200).json({
        success: true,
        payload: deletedProduct,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: 'not found',
      });
    }
  } else {
    res.status(500).json({
      success: false,
      payload: deletedProduct,
    });
  }
});

//UPDATE
products.put(
  '/:id',
  checkName,
  checkImage,
  checkCapitalization,
  async (req, res) => {
    console.log('Put /:id');
    const { id } = req.params;
    const updatedProduct = await updateProduct(id, req.body);
    if (updatedProduct.id) {
      res.status(200).json({
        success: true,
        payload: updatedProduct,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: 'bad request',
      });
    }
  }
);

module.exports = products;