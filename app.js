const express = require('express');

const users = require('./users.json');

const app = express();

app.get("/",(req, res) => {
 
 return   res.send("Welcome to Home page")

});

app.get("/users",(req, res) => {

   return res.send(users)
    
});


app.listen(2346, function() {
    console.log('listening on port 2346');
})