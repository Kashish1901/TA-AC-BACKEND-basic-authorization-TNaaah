var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  description: String,
  likes: Number,
  commemnts: [String],
  author: String,
  slug: String,
});

articleSchema.pre("save", function (next) {
  var title = this.title;
  if (title && this.isModified(title)) {
    this.slug = slugger(title, { replacement: "_" });
    next();
  } else {
    next("title not available");
  }
});

module.exports = mongoose.model("Article", articleSchema);
