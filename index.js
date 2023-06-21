const express = require('express');
const app = express();
require('dotenv').config()

//db
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL,{useNewUrlParser: true})
.then(()=>console.log('connect successfully to the database'))
.catch((err)=> {
    console.log('can not connect to the database',err)
    process.exit()
})


app.listen(process.env.PORT || 3000,()=> console.log('app is listening'))