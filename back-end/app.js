// DEPENDENCIES

const express = require('express');
const cors = require('cors');
const breadController = require('./controllers/breadController');
const cakeController = require('./controllers/cakeController')
const miniController = require('./controllers/miniController')
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/breads', breadController);
app.use('/cakes', cakeController);
app.use('/minis', miniController);
app.use('/', (req, res) => {
  res.send("<h1>🎂🍰🧁Baking Goods Api 🥪🥖🥐!</h1>");
}); //look for the basic route in productController

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

// EXPORT
module.exports = app;
