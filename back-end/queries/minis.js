const db = require('../db/dbConfig.js');

//INDEX
const getAllMinis = async () => {
    try {
      const allMinis = await db.any('SELECT * FROM minis');
      return allMinis;
    } catch (error) {
      return error;
    }
  };
  
  //SINGLE
  const getAMini = async (id) => {
    try {
      const mini = await db.one('SELECT * FROM minis WHERE id=$1', id);
      return mini;
    } catch (error) {
      return error;
    }
  };

  //CREATE
  const createMini = async (mini) => {
    try {
      return await db.any(
        'INSERT INTO minis (name, price, description, image, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [
          mini.name,
          mini.price,
          mini.description,
          mini.image,
          mini.is_favorite
          
        ]
      );
    } catch (error) {
      console.log(error.message); 
    }
  };
  

  //UPDATE
  const updateMini = async (
    id,
    { name, price, description, image, is_favorite}
  ) => {
    try {
      return await db.one(
        'UPDATE minis SET name=$1, price=$2, description=$3, image=$4,is_favorite=$5  where id=$6 RETURNING *',
        [name, price, description,  image, is_favorite, id]
      );
    } catch (error) {
      return error;
    }
  };

  //DELETE
  const deleteMini = async (id) => {
    try {
      return await db.one('DELETE FROM minis WHERE id=$1 RETURNING *', id);
    } catch (error) {
      return error;
    }
  };
  
  module.exports = {
    getAllMinis,
    getAMini,
    createMini,
    updateMini,
    deleteMini,
  };