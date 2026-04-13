
const express = require("express");
const http = require("http");
const cors = require('cors');

const app = express();

// app.use data eh format? json

app.use(express.json());

const corsOptions = {
  origin: '*', // Multiple origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};
app.use(cors(corsOptions));

let users = [];
// /
// path address
app.get("/", (req, res) => {
  res.send({"message":"server Running Successfully"});
});


app.post("/signup", (req, res) => {
  const{name,email,password} = req.body;
  const existingUser = users.find((user) =>{
    return user.email === email ;
  });
  if(existingUser) {
    return res.status(400).json({message:"user Already exists"});
  }
 const newUser = {
  name:name,
  email:email,
  password:password
 }
 users.push(newUser);
  res.status(201).json({
    message:"user created Succesffully"
  });
});
// address port changes track 

app.post("/login", (req,res) => {
  const{email,password} = req.body;
  const existingUser = users.find((user) => {
    return user.email === email;
  });
  if(!existingUser){
    return res.status(404).json({message:"Email dosn't exist"});
  }
  if(existingUser.password !== password){
    return res.status(400).json({
      message:"Invalid email or password"
    });
  }
  res.status(200).json({
    message:"Login successful"
  });



});
app.get("/users",(req,res) => {
  const safeUsers = users.map( (user) => {
    return {
      name:user.name,
      email:user.email
    };
  });
  return res.status(200).json({
    users:safeUsers
  });
} )

app.listen(3000,()=>{
      console.log("Server stared check now")
})