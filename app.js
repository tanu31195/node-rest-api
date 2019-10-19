const express = require('express');

const app = express();

//Route
app.get('/', (req, res) => {
    res.send('<H1>Hello World</H1>');
});

//Start listening to server
app.listen(3000);
