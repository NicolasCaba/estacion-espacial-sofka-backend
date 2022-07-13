// Enviroment vars init
require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Database connect
const { databaseConnect } = require('./src/config/dbConnection');

const app = express();


// Cors config
app.use(cors());
// POST request config
app.use(express.json());


// Static assets
app.use(express.static(`./src/public`));


// Routes
app.use('api/naves', require('./src/routes/naves'));


// App listen
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`API listening on http://${process.env.HOST}:${PORT}`);
});

databaseConnect();
