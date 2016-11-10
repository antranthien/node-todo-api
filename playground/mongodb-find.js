const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log('Error');
    }

    // find; create a cursor
    // ToArray: return a promise
    //db.collection('Todos').find({
    //    _id: new ObjectID("5824521607d319ce6ddadd59")
    //}).toArray().then((docs) => { 
    //    console.log('Todos');
    //    console.log(JSON.stringify(docs, undefined, 2));
    //}, (err) => {
    //    console.log('Unable to fetch documents');
    //    }); 

    //db.collection('Todos').count().then((count) => {
    //    console.log(count);
    //}, (err) => {
    //    console.log(err);
    //});


    //db.close();
});