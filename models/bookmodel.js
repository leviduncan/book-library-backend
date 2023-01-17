const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  ISBN: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: false },
  genre: { type:String, required: false }
})

module.exports = mongoose.model("BookLib", BookSchema)