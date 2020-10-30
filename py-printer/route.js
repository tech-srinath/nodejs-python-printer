const express = require('express')
const router = express.Router()
const printJob = require('./controller')

router.get('/print', printJob.createTxt)

module.exports = router;