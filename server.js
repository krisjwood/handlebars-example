const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')

const server = express()

module.exports = server

// Create a new express-handlebars view engine and call it hbs
server.engine('hbs', hbs({ extname: 'hbs' }))

// Tell our server to use the 'hbs' view engine
server.set('view engine', 'hbs')

// Create static 'public' folder
const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))

// Accept URL encoded data on POST requests
server.use(express.urlencoded({ extended: false }))


// ROUTES //

// Index route
server.get('/', (req, res) => {
    const pathname = path.join(__dirname, '/')
    res.sendFile(pathname)
})