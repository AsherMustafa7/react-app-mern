const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;
// we are using dotenv to load environment variables from a .env file
// so we can use process.env.PORT to get the port number from the .env file
// why we are using dotenv?
// because we don't want to hardcode the port number in the code, we want to keep it in a separate file
// so that we can change it easily without changing the code
// what is the meaing of saying that we need the port from an enviroment variable?
// it means that we can set the port number in a .env file and use it in the codenpm
app.listen(PORT,()=>{
    console.log('server is running on port ' + PORT);
    // and to run the server , we go to package.json and in the scripts section we add "start": "nodemon index.js"
    // nodemon is a module that automatically restarts the server when file changes are detected
    // so like when we chnage something in the file then the server automatically gets updated
    // here we have installed nodemon globally using npm install -g nodemon
})
app.get('/ping',(req,res)=>{
    res.send('pong , my name is asher');
    // this is a simple endpoint that returns 'pong' when we hit the /ping endpoint
    // we can test this endpoint by going to http://localhost:8080/ping in the browser
    // or using a tool like Postman or curl
})