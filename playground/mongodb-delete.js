// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  } else {
    console.log('connected to mongoDBserver');
  }

  //deleteMany
  // db.collection('Todos').deleteMany({ text: 'eat lunch' }).then((res) => {
  //   console.log(res);
  // })
  //deleteOne
  // db.collection('Todos').deleteOne({ text: 'eat lunch' }).then((res) => {
  //   console.log(res);
  // })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ text: 'eat lunch' }).then((res) => {
  //   console.log(res);
  // })
  db.collection('Users').deleteMany({ name: 'timor' })
  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5acd1bcbf3e3130ccc0c498a') }).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
  })
  // db.close()
})