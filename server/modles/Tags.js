const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
})

module.exports = model.mongoose('Tags', tagSchema)
