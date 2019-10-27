/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 10/27/19, 10:59 PM
 * Copyright (c) 2019. All rights reserved.
 */

const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);
