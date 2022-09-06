//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const cakes = express.Router();
//import db
const db = require('../db/dbConfig');
//import validation
const {
    getAllCakes,
    getACake,
    createCake,
    updateCake,
    deleteCake,
} = require('../queries/cakes');

const {
    checkName,
    checkImage,
    checkFavorite,
    checkCapitalization,
  } = require('../validation/checkProducts');



//Index
cakes.get('/', async (req, res) => {
  console.log('get all /');

  const allCakes = await getAllCakes();
  if (allCakes[0]) {
    res.status(200).json({
      success: true,
      payload: allCakes,
    });
  } else {
    res.status(500).json({
      error: 'server error',
    });
  }
});

//Show
cakes.get('/:id', async (req, res) => {
  console.log('get one /:id');
  const { id } = req.params;

  const cake = await getACake(id);
  if (cake.id) {
    res.status(200).json({
      success: true,
      payload: cake,
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
cakes.post(
  '/new',
  checkName,
  checkImage,
  checkFavorite,
  checkCapitalization,
  async (req, res) => {
    try {
      const addCake = await createCake(req.body);
      res.status(200).json({
        success: true,
        payload: addCake[0],
      });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({ success: false });
    }
  }
);

//DELETE
cakes.delete('/:id', async (req, res) => {
  console.log('Delete /:id', req.body, req.params);
  const { id } = req.params;
  const deletedCake = await deleteCake(id);
  if (deletedCake) {
    if (deletedCake.id) {
      res.status(200).json({
        success: true,
        payload: deletedCake,
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
      payload: deletedCake,
    });
  }
});

//UPDATE
cakes.put(
  '/:id',
  checkName,
  checkImage,
  checkFavorite,
  checkCapitalization,
  async (req, res) => {
    console.log('Put /:id');
    const { id } = req.params;
    const updatedCake = await updateCake(id, req.body);
    if (updatedCake.id) {
      res.status(200).json({
        success: true,
        payload: updatedCake,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: 'bad request',
      });
    }
  }
);

module.exports = cakes;