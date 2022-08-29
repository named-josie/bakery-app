const db = require('../db/dbConfig.js');


const getAllCakes = async () => {
    try {
      const allCakes = await db.any('SELECT * FROM cakes');
      return allCakes;
    } catch (error) {
      return error;
    }
  };
  
  const getACake = async (id) => {
    try {
      const cake = await db.one('SELECT * FROM cakes WHERE id=$1', id);
      return cake;
    } catch (error) {
      return error;
    }
  };
  
  const createCake = async (cake) => {
    try {
      return await db.any(
        'INSERT INTO cakes (name, price, description, image) VALUES ($1, $2, $3, $4) RETURNING *',
        [
          cake.name,
          cake.price,
          cake.description,
          cake.image,
          
        ]
      );
    } catch (error) {
      console.log(error.message);
     
    }
  };
  
  const updateCake = async (
    id,
    { name, price, description, image}
  ) => {
    try {
      return await db.one(
        'UPDATE cakes SET name=$1, price=$2, description=$3, image=$4,  where id=$5 RETURNING *',
        [name, price, description,  image, id]
      );
    } catch (error) {
      return error;
    }
  };
  
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