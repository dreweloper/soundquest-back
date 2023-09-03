const express = require('express');
const cors = require('cors');
const connection = require('./helpers/mongodb');
require('dotenv').config();

// Port config
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
connection();

// CORS middleware
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// Parse application/json
app.use(express.json());

// Route to connect to the 'soundquest' database and interact with the 'tracks' collection in MongoDB.
app.use('/api/v1', require('./routers/tracksRouter'));
// Route to connect to the 'soundquest' database and interact with the 'visits' collection in MongoDB.
app.use('/api/v1/visits', require('./routers/visitsRouter'));


app.listen(port, () => console.log(`Server started on port ${port}.`));