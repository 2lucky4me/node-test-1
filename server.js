const express = require('express')
const   app = express(),
        bodyParser = require('body-parser');
        port = 3080;


const users = [];
app.use(bodyParser.json())

app.get('/home/listUsers', (req,res) => {
    res.json(users);
})


app.listen(port, () => console.log(`Server listening on the port::${port}`))