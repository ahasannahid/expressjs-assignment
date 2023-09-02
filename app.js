// Application Configuration
const express = require('express');
const router = require('./src/Routes/api');
const app= new express();



app.use(express.json())


// Application Routes
app.use('/api/v1',router);





module.exports=app;

