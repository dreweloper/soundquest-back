const express = require('express');
const cors = require('cors');
const connection = require('./helpers/mongodb');
require('dotenv').config();

// Creates an Express application.
const app = express();

// Port config
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

// It will only listen to `port` if the enviroment is 'development' or 'production'.
if(process.env.NODE_ENV !== 'test') app.listen(port, () => console.log(`Server started on port ${port}.`));

 // Exports `app` for testing purposes.
module.exports = app;