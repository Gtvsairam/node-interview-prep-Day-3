//1) How do you create a simple Express.js application?
const express = require("express");
const app = express();
app.get("/", (req,res) =>{
    res.send("hello world..!!")
})
app.get("/Info", (req,res) =>{
    res.send("<h2>Hello im Gtv sairam </h2>")
})
app.listen(5000, ()=>{
    console.log("server is running");
})

//2) Implementation of all type of exports in backend application
const data = require("./data")

app.get("/data", (req,res) =>{
    res.send(data);
})

//3) Create a middleware which will be applicable to all the routes.
const middleware = (req, res, next) => {
    console.log("middleware is working");
    next();
  };
  
  app.use(middleware);

//4) const cors = require("cors");
    const cors = require("cors")
app.use(cors()); // for all routes

app.get("/home", (req, res) => {
  res.send("cors working");
});



