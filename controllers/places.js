const router = require('express').Router()

//first route
router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router