// require models syntax
require('dotenv').config()
const express = require('express')

// commonjs syntax
// import express from 'express'

const app = express()
const port = 4000

// home route a listen. je req asbe setar response send korte hoba..
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('twitter send done!')
})

app.get('/facebook', (req, res) => {
  res.send('<h2> please login at chai our code </h2>')
})

app.get('/google', (req, res) => {
  res.send('<h1> please login at google</h1>')
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})