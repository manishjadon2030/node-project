const express = require('express')
const app = express()
const path = require('path')

const Port = 3000


app.get('/',(req,res)=>{
   const filepath=path.join(__dirname,'home.html')
   res.sendFile(filepath,err=>{
    if(err){
        res.status(err.status).end()
    }
   })
})

app.get('/about',(req,res)=>{
    const filepath = path.join(__dirname,'about.html')
    res.sendFile(filepath,(err)=>{
        if(err){
            res.console.log("not found").end()
        }
       
    })
})
app.get('/contact',(req,res)=>{
    const filepath = path.join(__dirname,'contact.html')
    res.sendFile(filepath,(err)=>{
        if(err){
            res.console.log("not found").end()
        }
       
    })
})




app.listen(Port,(err)=>{
    if(err){
        console.log("server fail to run at 3000")
    }else{
        console.log("server is running at 3000")
    }
})