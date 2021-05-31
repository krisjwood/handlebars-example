const express = require('express')
const hbs = require('express-handlebars')
const data = require('./data')

const server = express()

module.exports = server

// Create a new express-handlebars view engine and call it hbs
server.engine('hbs', hbs({ extname: 'hbs' }))

// Tell our server to use the 'hbs' view engine
server.set('view engine', 'hbs')

// Accept URL encoded data on POST requests
server.use(express.urlencoded({ extended: false }))


// ROUTES //

// Index route
server.get('/', (req, res) => {
    const viewData = {
        fName: data.details.name,
        isCool: data.details.isCool,
        tashCol: data.details.tashCol,
        friends: data.friends
    }
    res.render('home', viewData)
})