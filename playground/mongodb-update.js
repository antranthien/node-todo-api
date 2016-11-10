const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log('Error');
    }

    console.log('Connected to the server');

    //db.collection('Todos').findOneAndUpdate({
    //    _id: new ObjectID("5824781b07d319ce6ddadd5c")
    //}, {
    //        $set: {
    //            completed: true
    //        }
    //    }, {
    //        returnOriginal: false
    //}).then((result) => {
    //        console.log(result);
    //    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("58244abe4398df1544e3fdff")
    }, {
            $inc: {
                age: 5
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });
});