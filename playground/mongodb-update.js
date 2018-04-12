// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  } else {
    console.log('connected to mongoDBserver');
  }

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5acf5e4f9448bf077116d7f7')
  // }, {
  //     $set: {
  //       completed: 'true'
  //     }
  //   }, {
  //     returnOrigonal: false
  //   }).then((res) => {
  //     console.log(res);

  //   })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5acd1b453a8692354c5cfef6')
  }, {
      $set: {
        name: 'timor',
      },
      $inc: {
        age: 1
      }
    }, {
      returnOrigonal: false
    }).then((res) => {
      console.log(res);
    })
  // db.close()
})