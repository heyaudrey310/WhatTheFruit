 // Dependencies
// ***********************************
require('dotenv').config();

//const db = require("./models");

const path = require("path");
const express = require("express");

const app = express();

// const logger = require("morgan");
const bodyParser = require('body-parser');
const request = require("request");


const sequelize = require("sequelize");
// const db = require("./models");



// const app = express();
const PORT = process.env.PORT || 3000;



// Define Middleware here
// ************************************
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(express.static("public"));

// app.use(express.json({limit: '50mb'}));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view


// Routes
// *************************************





// Connect to the MySQL DB
// ***********************************************



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', 'public'))) 

//cons(app)
//routes(app)


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  console.log(" TURBO!")
});
