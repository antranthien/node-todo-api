﻿const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (err) => {
        res.status(400).send(err);
        });
});

app.get('/todos/:id', (req, res) => {

    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid ID');
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send({});
        }
        res.send({todo});
    }).catch((err) => {
        return res.status(400).send();
        });
});

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid ID');
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send(todo);
    }).catch((err) => {
        return res.status(400).send();
        });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
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