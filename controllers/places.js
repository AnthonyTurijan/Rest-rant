const router = require('express').Router()

//first route
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/cake.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/fruits2.jpg'
      }]
    res.render('places/index', {places})
})

//NEW Route
router.get('/new', (req,res)=>{
  res.render('places/new')
})

//POST Route
router.post('/', (req,res)=>{
  console.log(req.body)
  res.render('POST /places')
})

module.exports = router

