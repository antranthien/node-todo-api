//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
//    if (err) {
//        return console.log('Unable to connect to the server');
//    }

//    console.log('Connected to the server');

//    //db.collection('Todos').insertOne({
//    //    text: 'Something to do',
//    //    completed: false
//    //}, (err, result) => {
//    //    if (err) {
//    //        return console.log('Unable to insert a collection');
//    //    }

//    //    console.log(JSON.stringify(result.ops, undefined, 2));
//    //    });

//    // Insert a new doc into the collection Users

//    db.collection('Users').insertOne({
//        name: 'An Tran',
//        age: 26,
//        location: 'Norway'
//    }, (err, result) => {
//        if (err) {
//            return console.log('Unable to insert a document into the Users collection');
//        }

//        console.log(result.ops[0]._id.getTimestamp());
//        });
//    db.close();
//});

