const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const user1Id = new ObjectID()
const user2Id = new ObjectID()
const users = [{
    _id: user1Id ,
    email: "antt@yahoo.com",
    password: "myPassword",
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: user1Id, access: 'auth' }, 'abc123').toString()
    }]
}, {
    _id: user2Id,
    email: "duc.nguyen@yahoo.com",
    password: "myPassword2"
    }];

const todos = [{
    _id: new ObjectID(),
    text: "First todo",
    completed: false
}, {
    _id: new ObjectID(),
    text: "Second todo",
    completed: true
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers};