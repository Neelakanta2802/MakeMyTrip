// // client ---- server

// // request --------->.  server

// //               <-------------------response

// // http://localhost:3000/api.

// // username and password
// // type ? JSON ? xml. ? html code ? formData
// // {
// //     "name":"shiva",
// //     "password":12345
// // }
// //                                                              "user logged in succesfillly"
// // req----------------> server.  database shiva 12345 register? true or                      false "wrong user credentials "

// // hypertrasfeer protocol

// // communicate ? http

// // package install
// // http methods ? get post put delete

// // import http from 'http';

// const http = require('http');

// // req ? frontend
// // res ? server

// const server = http.createServer((req, res)=>{
//     if(req.url=="https://www.makemytrip.com/" && req.method==="get"){
//         nenu na database lo velli data fetch forntend resposne return chesta

//         return res.end({
//             message:"hi this is makemytrip first page response "
//         })
//     }

//     // login api endpoint
//  if(req.url=="https://www.makemytrip.com/login/" && req.method==="post"){
// // process database username and passwod
//         return res.end({
//             message:"found username and password "
//         })
//     }

// })

// server express.js server

// route('/login', (req, res)=>{
//     res.send("hello")
// })

const http = require("http");
const express = require("express");

const app = express();

// app.use data eh format? json

app.use(express.json());

// /
// path address
app.get("/", (req, res) => {
  res.send("Hi Girisha");
});


app.get("/login", (req, res) => {
  res.send("Hi this is login endpoint");
});
// address port changes track 

app.listen(3000,()=>{
      console.log("Server stared check now")
})