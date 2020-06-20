const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  categories: [{ type: String, required: true, ref: "Category" }],
  publishedDate: { type: String, required: true }
});