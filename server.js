'use strict'

const express = require('express');
const fs = require ('fs');

const app = express();
const PORT = process.env.PORT || 8042;

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', data.length);
        res.send(data);
   
    })
})
app.get('/index.css', (req, res) => {
    fs.readFile('index.css', (err, data) => {
        res.setHeader('Content-Type', 'text/css');
        res.setHeader('contet-Length', data.length);
        res.send(data);
    })
})
app.get('/Ice-logo.jpg', (req, res) => {
    fs.readFile('Ice-logo.jpg', (err, data) => {
        res.setHeader('Content-Type', 'image/jpg');
       
        res.send(data);
    })
})
app.get('/selfie.jpg', (req, res) => {
    fs.readFile('selfie.jpg', (err, data) => {
        res.setHeader('Content-Type', 'image/jpg');
       
        res.send(data);
    })
})


app.listen(PORT,() => {
    console.log(`the app listen to ${PORT}`);
})
