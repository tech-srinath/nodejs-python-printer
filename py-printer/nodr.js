'use strict'

const express = require('express')

const app = express()
const PORT = 3000;

app.listen(PORT, '192.168.0.106', () => {
    console.log(`Server listening on ${PORT}`)
})

const route = require('./route')

app.use('/', route)