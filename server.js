'use strict'

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8042;


app.get('/index.css', (req, res) => {
    fs.readFile('index.css', (err, data) => {
        res.setHeader('Content-Type', 'text/css');
        res.setHeader('contet-Length', data.length);
        res.send(data);
    })
})

app.get('/johan', (req, res) => {
    fs.readFile('Image/selfie.jpg', (err, data) => {
        res.setHeader('Content-Type', 'image/jpg');

        res.send(data);
    })
})


app.get('/vigor1', (req, res) => {
    fs.readFile('Image/vigor1.jpg', (err, data) => {
        res.setHeader('Content-Type', 'image/jpg');

        res.send(data);
    })
})
app.get('/lawe', (req, res) => {
    fs.readFile('Image/lawe.jpg', (err, data) => {
        res.setHeader('Content-Type', 'image/jpg');

        res.send(data);
    })
})
app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', data.length);
        res.send(data);

    })
})


app.listen(PORT, () => {
    console.log(`the app listen to ${PORT}`);
})