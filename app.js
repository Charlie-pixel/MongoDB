const express = require('express');
const app = express();
const mongo = require('./utils/db.js');
const postRoute = require('./routes/posts.js');
const bodyParser = require("body-parser");
const cors = require('cors');

//app.use(cors);
app.use(bodyParser.json());
app.use('/posts', postRoute);

mongo.connectToDB();


app.get('/posts',(req, res)=>{
    res.send('Posts');
});



//ROUTES
app.get('/', (req, res) => {
    res.send('The server is running and tested using Postman app. Endpoint is /posts on localhost:3000');
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});