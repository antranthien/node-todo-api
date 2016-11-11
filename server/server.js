﻿const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
        });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };

//var newUser = new User({
//    email: 'antt@gmail.com'
//});

//newUser.save().then((doc) => {
//    console.log('Saved ', doc);
//}, (err) => {
//    console.log('Unable to save ', err);
//    });

//var newTodo2 = new Todo({
//    text: 'Learn C#',
//});

//newTodo2.save().then((doc) => {
//    console.log(JSON.stringify(doc, undefined, 2));
//}, (err) => {
//    console.log('Unable to save');
//    });