const db = require('../db/dbConfig.js');

//INDEX
const getAllCakes = async () => {
    try {
      const allCakes = await db.any('SELECT * FROM cakes');
      return allCakes;
    } catch (error) {
      return error;
    }
  };
  
  //SINGLE
  const getACake = async (id) => {
    try {
      const cake = await db.one('SELECT * FROM cakes WHERE id=$1', id);
      return cake;
    } catch (error) {
      return error;
    }
  };

  //CREATE
  const createCake = async (cake) => {
    try {
      return await db.any(
        'INSERT INTO cakes (name, price, description, image, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [
          cake.name,
          cake.price,
          cake.description,
          cake.image,
          cake.is_favorite
          
        ]
      );
    } catch (error) {
      console.log(error.message); 
    }
  };
  

  //UPDATE
  const updateCake = async (
    id,
    { name, price, description, image, is_favorite}
  ) => {
    try {
      return await db.one(
        'UPDATE cakes SET name=$1, price=$2, description=$3, image=$4,is_favorite=$5  where id=$6 RETURNING *',
        [name, price, description,  image, is_favorite, id]
      );
    } catch (error) {
      return error;
    }
  };

  //DELETE
  const deleteCake = async (id) => {
    try {
      return await db.one('DELETE FROM cakes WHERE id=$1 RETURNING *', id);
    } catch (error) {
      return error;
    }
  };
  
  module.exports = {
    getAllCakes,
    getACake,
    createCake,
    updateCake,
    deleteCake,
  };