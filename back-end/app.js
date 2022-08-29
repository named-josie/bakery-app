// DEPENDENCIES

const express = require('express');
const cors = require('cors');
const productController = require('./controllers/productController');
const cakeController = require('./controllers/cakeController')
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/products', productController);
app.use('/cakes', cakeController);
app.use('/', (req, res) => {
  res.send("<h1>🎂🍰🧁Baking Goods Api 🥪🥖🥐!</h1>");
}); //look for the basic route in productController

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

// EXPORT
module.exports = app;
