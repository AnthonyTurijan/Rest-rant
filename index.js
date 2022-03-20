//require dotend
require('dotenv').config()

//requiring express
const express = require('express')
const app = express()

//Importing Routers
app.use('/places',require('./controllers/places'))

//main page
app.get('/', (req,res) =>{
    res.send("Hello World!")
})

//wildcard route
app.get('*', (req,res) => {
    res.status(404).send("<h1>404 Page</h1>")
})

app.listen(process.env.PORT, function(){
    console.log('Server On')
})