import express from "express";
// const express = require('express')
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Corriendo en https://localhost:${port}`);
})
