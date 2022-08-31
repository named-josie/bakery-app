//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const minis = express.Router();
//import db
const db = require('../db/dbConfig');
//import validation
const {
    getAllMinis,
    getAMini,
    createMini,
    updateMini,
    deleteMini,
} = require('../queries/minis');

const {
    checkName,
    checkImage,
    checkFavorite,
    checkCapitalization,
  } = require('../validation/checkproducts');



//Index
minis.get('/', async (req, res) => {
  console.log('get all /');

  const allMinis = await getAllMinis();
  if (allMinis[0]) {
    res.status(200).json({
      success: true,
      payload: allMinis,
    });
  } else {
    res.status(500).json({
      error: 'server error',
    });
  }
});

//Show
minis.get('/:id', async (req, res) => {
  console.log('get one /:id');
  const { id } = req.params;

  const mini = await getAMini(id);
  if (mini.id) {
    res.status(200).json({
      success: true,
      payload: mini,
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
minis.post(
  '/new',
  checkName,
  checkImage,
  checkFavorite,
  checkCapitalization,
  async (req, res) => {
    try {
      const addMini = await createMini(req.body);
      res.status(200).json({
        success: true,
        payload: addMini[0],
      });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({ success: false });
    }
  }
);

//DELETE
minis.delete('/:id', async (req, res) => {
  console.log('Delete /:id', req.body, req.params);
  const { id } = req.params;
  const deletedMini = await deleteMini(id);
  if (deletedMini) {
    if (deletedMini.id) {
      res.status(200).json({
        success: true,
        payload: deletedMini,
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
      payload: deletedMini,
    });
  }
});

//UPDATE
minis.put(
  '/:id',
  checkName,
  checkImage,
  checkFavorite,
  checkCapitalization,
  async (req, res) => {
    console.log('Put /:id');
    const { id } = req.params;
    const updatedMini = await updateMini(id, req.body);
    if (updatedMini.id) {
      res.status(200).json({
        success: true,
        payload: updatedMini,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: 'bad request',
      });
    }
  }
);

module.exports = minis;