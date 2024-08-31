const express=require('express')
require('dotenv').config()
const app=express()

const port = 4000

app.get('/',(req,res)=>{
    res.send("Hello Aditya! I am fucking proud on you")
})

app.get('/twitter',(req,res)=>{
    res.send("Welcome to Twitter")
})

app.get('/youtube',(req,res)=>{
    res.send("Kindly increase your subcriber")
})

app.get('/facebook',(req,res)=>{
    res.send("Welcome to facebook !")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app is listening on ${port}`)
})

app.get('/Ramnagar',(req,res)=>{
    res.send("post the video of ramnagar")
})

app.get('/JaiShreeRam',(req,res)=>{
    res.send("ram bhagwan")
})









