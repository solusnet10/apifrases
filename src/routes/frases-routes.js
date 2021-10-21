const express = require('express')
const router = express.Router()
const frasesController = require('../controllers/frases-controller')

router.get('/', frasesController.listFrases)
router.post('/', frasesController.createFrase)

module.exports = router