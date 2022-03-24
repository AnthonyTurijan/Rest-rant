//require dotend
require('dotenv').config()

//requiring express
const express = require('express')
const app = express()

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Importing Routers
app.use('/places',require('./controllers/places'))

//main page
app.get('/', (req,res) =>{
    res.render('home')
})

//wildcard route
app.get('*', (req,res) => {
    res.render('error404')
})

app.listen(process.env.PORT, function(){
    console.log('Server On')
})