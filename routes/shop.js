const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('shop home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send(' shop about alu and piyaj')
})
module.exports = router