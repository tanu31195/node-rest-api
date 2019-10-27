/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 10/27/19, 10:59 PM
 * Copyright (c) 2019. All rights reserved.
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv/config');

//Middleware
app.use(bodyParser.json());
app.use(cors());
// app.use('/posts', () => {
//     console.log('Middleware running')
// });


//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('<H1>Hello World</H1>');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log('Connected to DB')
);

//Start listening to server
app.listen(3000);
