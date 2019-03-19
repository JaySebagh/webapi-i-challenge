// implement your API here]
// import express 
const express = require('express');

const db = require('./data/db.js')

const server = express(); // creates new http server

// middleware
server.use(express.json());

// The R in CRUD
server.get('/api/users', (req, res) => {
    db
    .find()
    .then(users => {
            res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json({ success: false, message: "The user information could not be retrieved." })
    })
})

server.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    db.findById(userId)
        .then(user => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "The user with the specified ID does not exist." });
            }
        })
        .catch(err => {
            res.status(500).json({ error: "The user information could not be retrieved." });
        });
})


// The C in CRUD
server.user('/api/users', (req, res) => {
    const user = req.body;
    db
    .insert(user)
    .then(users => {
            res.status(201).json({ success: true, users });
    })
    .catch(message => {
        res.status(500).json({ success: false, message: "There was an error while saving the user to the database"  });
    });
});

// The D in CRUD
server.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;

    db
    .remove(userId)
    .then(deleted => {
        if(users) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        }
    })
    .catch(({ code, message }) => {
        res.status(code).json({ success: false, message: "The users could not be removed" });
    });
});

// The U in CRUD
server.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    
    db
    .update(id, changes)
    .then(updated => {
            res.status(200).json({ success: true, updated });
    })
    .catch (({ code, message }) => {
        res.status(code).json({ success: false, message });
    });
});

server.listen(4000, () => {
    console.log('\n*** Running on port 4k ***\n')
})