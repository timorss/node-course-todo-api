
const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/Todo')
const { User } = require('./../server/models/User')

// Todo.remove({}).then((res) => {
//   console.log(res);
// })

// Todo.findOneAndRemove({}).then((res) => {
//   console.log(res);
// })

Todo.findByIdAndRemove('5ad766966633162f4882a772').then((res) => {
  console.log(res);
})