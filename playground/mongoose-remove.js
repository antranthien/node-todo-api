const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//    console.log(result);
//});

Todo.findByIdAndRemove('58298d7c0bb3dd3b0895e893').then((todo) => {
    console.log(todo);
});