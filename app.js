const express = require('express');
const cors = require('cors');
const connection = require('./helpers/mongodb');
require('dotenv').config();

// Port config
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
connection();

// Cors middleware
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// Parse application/json
app.use(express.json());

// Routes
app.use('/api/v1/counter', require('./routes/counter'));


app.listen(port, () => console.log(`Servidor a la escucha del puerto ${port}`));