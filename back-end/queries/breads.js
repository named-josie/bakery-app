const db = require('../db/dbConfig.js');

//INDEX
const getAllBreads = async () => {
    try {
      const allBreads = await db.any('SELECT * FROM breads');
      return allBreads;
    } catch (error) {
      return error;
    }
  };
  
  //SINGLE
  const getABread = async (id) => {
    try {
      const bread = await db.one('SELECT * FROM breads WHERE id=$1', id);
      return bread;
    } catch (error) {
      return error;
    }
  };

  //CREATE
  const createBread = async (bread) => {
    try {
      return await db.any(
        'INSERT INTO breads (name, price, description, image, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [
          bread.name,
          bread.price,
          bread.description,
          bread.image,
          bread.is_favorite
          
        ]
      );
    } catch (error) {
      console.log(error.message); 
    }
  };
  

  //UPDATE
  const updateBread = async (
    id,
    { name, price, description, image, is_favorite}
  ) => {
    try {
      return await db.one(
        'UPDATE breads SET name=$1, price=$2, description=$3, image=$4,is_favorite=$5  where id=$6 RETURNING *',
        [name, price, description,  image, is_favorite, id]
      );
    } catch (error) {
      return error;
    }
  };

  //DELETE
  const deleteBread = async (id) => {
    try {
      return await db.one('DELETE FROM breads WHERE id=$1 RETURNING *', id);
    } catch (error) {
      return error;
    }
  };
  
  module.exports = {
    getAllBreads,
    getABread,
    createBread,
    updateBread,
    deleteBread,
  };