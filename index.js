// implement your API here]
// import express 
const express = require('express');
const server = express(); // creates new http server
// routes === endpoints
server.get('/', (req, res) => {
    res.send('Hello World!')
});

server.listen(4000, () => {
    console.log('\n*** Running on port 4k ***\n')
})