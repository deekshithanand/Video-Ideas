const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.Promise = global.Promise
//load Idea modal
require('./modals/Idea')
const Idea = mongoose.model('ideas')
mongoose.connect('mongodb://localhost/vidjot-dev'

).then(() => console.log('MongoDB connected....'))
.catch((err) => console.log(err))
const port = 8000
const exphbs = require( 'express-handlebars') 

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+ '/public'))
//server routes
app.get('/',(req,res) => {
    res.render('index')
})

//add ideas/ideas
app.get('/ideas/add',(req,res) =>{
    res.render('ideas/add')
})

//add ideas
app.get('/ideas',(req,res) => {
    res.render('ideas/idea')
})

app.get('/about',(req,res) => {
    res.render('about')
})
app.listen(port, () => {
    console.log(`Server started on ${port}`)
})