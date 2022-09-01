//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const breads = express.Router();
//import db
const db = require('../db/dbConfig');
//import validation
const {
    getAllBreads,
    getABread,
    createBread,
    updateBread,
    deleteBread,
} = require('../queries/breads');

const {
    checkName,
    checkImage,
    checkFavorite,
    checkCapitalization,
  } = require('../validation/checkproducts');

//any() coming from the pg promise, first argument is sql command,
//.any can be used when it is returning all or none

//Index
breads.get('/', async (req, res) => {
  console.log('get all /');

  const allBreads = await getAllBreads();
  if (allBreads[0]) {
    res.status(200).json({
      success: true,
      payload: allBreads,
    });
  } else {
    res.status(500).json({
      error: 'server error',
    });
  }
});

//Show
breads.get('/:id', async (req, res) => {
  console.log('get one /:id');
  const { id } = req.params;

  const bread = await getABread(id);
  if (bread.id) {
    res.status(200).json({
      success: true,
      payload: bread,
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
breads.post(
  '/new',
  checkName,
  checkImage,
  checkFavorite,
  checkCapitalization,
  async (req, res) => {
    try {
      const addBread = await createBread(req.body);
      res.status(200).json({
        success: true,
        payload: addBread[0],
      });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({ success: false });
    }
  }
);

//DELETE
breads.delete('/:id', async (req, res) => {
  console.log('Delete /:id', req.body, req.params);
  const { id } = req.params;
  const deletedBread = await deleteBread(id);
  if (deletedBread) {
    if (deletedBread.id) {
      res.status(200).json({
        success: true,
        payload: deletedBread,
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
      payload: deletedBread,
    });
  }
});

//UPDATE
breads.put(
  '/:id',
  checkName,
  checkImage,
  checkFavorite,
  checkCapitalization,
  async (req, res) => {
    console.log('Put /:id');
    const { id } = req.params;
    const updatedBread = await updateBread(id, req.body);
    if (updatedBread.id) {
      res.status(200).json({
        success: true,
        payload: updatedBread,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: 'bad request',
      });
    }
  }
);

module.exports = breads;