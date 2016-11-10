const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log('Error');
    }

    console.log('Connected to the server');

    //deleteMany
    //db.collection('Todos').deleteMany({ text: 'Something to do' }).then((result) => {
    //    console.log(result);
    //});

    //deleteOne
    //db.collection('Todos').deleteOne({ completed: false }).then((result) => {
    //    console.log(result);
    //});

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (error) => {
        console.log(error);
        });
});