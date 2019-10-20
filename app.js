/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 10/20/19, 4:13 PM
 * Copyright (c) 2019. All rights reserved.
 */

const express = require('express');

const app = express();

//Route
app.get('/', (req, res) => {
    res.send('<H1>Hello World</H1>');
});
app.get('/posts', (req, res) => {
    res.send('<H1>Posts</H1>');
});

//Start listening to server
app.listen(3000);
