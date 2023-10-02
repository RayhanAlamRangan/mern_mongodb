//Application configuration


const express=require('express');

const app=new express();

const router=require('./src/route/api');
const json=new json()



//Application routes

app.use(json());
app.use('/api',router);













module.exports=app;