require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

// const { Sequelize } = require('sequelize')

//Middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: false }));

// Routes

// creating exercise

// get all exercise

// get exercise

// update exercise

// delete exercise


app.listen(5000, () => {
    console.log('Server starting on port 5000')
})