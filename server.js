const express = require('express')
const app = express()

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate()
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`)
}