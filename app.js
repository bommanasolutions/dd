const express=require('express')
const app=express();
app.get("/",(requset,response)=>response.json({message:"its running..........."}))
app.listen(1212,()=>console.log("app is running....."))