// implement your API here]
// import express 
const express = require('express');

const db = require('./data/db.js')

const server = express(); // creates new http server
// routes === endpoints
server.get('/', (req, res) => {
    res.send('Hello World!')
});

// The R in CRUD
server.get('/api/users', (req, res) => {
    db
    .find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(err.code).json({ success: false, message: err.message })
    })
})


server.listen(4000, () => {
    console.log('\n*** Running on port 4k ***\n')
})