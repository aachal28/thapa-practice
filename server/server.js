const express = require("express");
const app = express();

app.get("/",(req, res) => { 
    res.status(200).send('welcome to mern first project for backend');

});

app.get("/register",(req, res) => { 
    res.status(200).send('welcome to register');

});
//to acess root

const PORT = 5000; // pass port 
app.listen(PORT, () =>{
    console.log('server is running at port: ${PORT}');
});