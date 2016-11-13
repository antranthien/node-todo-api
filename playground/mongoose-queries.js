const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '582788c709beee16f86dcec1ss';

//if (!ObjectID.isValid(id)) {
//    console.log('ObjectID is not valid');
//}
//Todo.find({
//    _id: id
//}).then((todos) => {
//    console.log(todos);
//    });

//Todo.findOne({
//    _id: id
//}).then((todo) => {
//    console.log(todo);
//    });

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log(todo);
}).catch((err) => {
    console.log(err);
    });

const userId = '5824a6991ee0f137fcd8a575';

User.findById(userId).then((user) => {
    if (!user) {
        return console.log(`Cannot find the user with id ${userId}`);
    }

    console.log(user);
}).catch((err) => {
    console.log(err);
    });