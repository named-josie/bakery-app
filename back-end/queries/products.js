const db = require('../db/dbConfig.js');


const getAllProducts = async () => {
    try {
      const allProducts = await db.any('SELECT * FROM products');
      return allProducts;
    } catch (error) {
      return error;
    }
  };
  
  const getAProduct = async (id) => {
    try {
      const product = await db.one('SELECT * FROM products WHERE id=$1', id);
      return product;
    } catch (error) {
      return error;
    }
  };
  
  const createProduct = async (product) => {
    try {
      return await db.any(
        'INSERT INTO products (name, price, description, image, type) VALUES ($1, $2, $3, $4, $5,) RETURNING *',
        [
          product.name,
          product.price,
          product.description,
          product.image,
          product.type,
          
        ]
      );
    } catch (error) {
      console.log(error.message);
     
    }
  };
  
  const updateProduct = async (
    id,
    { name, price, description, image, type }
  ) => {
    try {
      return await db.one(
        'UPDATE products SET name=$1, price=$2, description=$3, image=$4, type=$5  where id=$6 RETURNING *',
        [name, price, description,  image, type, id]
      );
    } catch (error) {
      return error;
    }
  };
  
  const deleteProduct = async (id) => {
    try {
      return await db.one('DELETE FROM products WHERE id=$1 RETURNING *', id);
    } catch (error) {
      return error;
    }
  };
  
  module.exports = {
    getAllProducts,
    getAProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  };