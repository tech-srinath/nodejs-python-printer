const getmac = require('getmac')
const express = require('express')
const app = express();
app.listen(1234, () => {
    console.log('listening...')
})

const router = express.Router()
app.get('/test', (req, res, next) => {
    console.log(getmac.default())
})