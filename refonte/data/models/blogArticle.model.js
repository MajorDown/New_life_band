import mongoose from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const BlogArticleSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  date: { type: string, required: true },
  poster: { type: String, required: true },
  comments: [{ type: String }],
  content: [
    {
      type: { type: String, required: true },
      src: { type: String, required: true },
      alt: { type: String },
    },
  ],
});

BlogArticleSchema.plugin(uniqueValidator);

module.exports =
  mongoose.models.blogArticle ||
  mongoose.model("blogArticle", BlogArticleSchema);
