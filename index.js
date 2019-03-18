// implement your API here]
// import express 
const express = require('express');

const db = require('./data/db.js')

const server = express(); // creates new http server

// middleware
server.use(express.json());

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

// The C in CRUD
server.post('/api/users', (req, res) => {
    const user = req.body;

    db
    .insert(user)
    .then(users => {
        res.status(201).json({ success: true, users });
    })
    .catch(({ code, message }) => {
        res.status(code).json({ success: false, message });
    });
});

server.listen(4000, () => {
    console.log('\n*** Running on port 4k ***\n')
})