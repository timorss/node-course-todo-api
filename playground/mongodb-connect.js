// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  } else {
    console.log('connected to mongoDBserver');
  }

  // db.collection('todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     console.log('unable to insert todo', err);
  //   } else {
  //     console.log(JSON.stringify(res.ops, undefined, 2))
  //   }
  // })

  // db.collection('Users').insertOne({
  //   name: 'timor',
  //   age: 29,
  //   location: 'tel aviv'
  // }, (err, res) => {
  //   if (err) {
  //     console.log('unable to insert user', err);
  //   } else {
  //     console.log(res.ops[0]._id.getTimestamp());
  //   }
  // })

  db.close()
})