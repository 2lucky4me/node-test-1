const express = require('express');
const DBClient = require('./mongodb');
const path = require('path');

const   app = express(),
        bodyParser = require('body-parser');
        port = 3080;


const users = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/home/listUsers', (req,res) => {
    res.json(users);
})


app.listen(port, () => console.log(`Server listening on the port::${port}`))