const express = require('express');
const app = express();
require('dotenv').config()

const path = require('path');
const homePage = require('./controllers/home.js');




//static file
app.use(express.static('public'))

//db
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL,{useNewUrlParser: true})
.then(()=>console.log('connect successfully to the database'))
.catch((err)=> {
    console.log('can not connect to the database',err)
    process.exit()
})


app.get('/',homePage)




app.listen(process.env.PORT || 3001,()=> console.log('app is listening'))