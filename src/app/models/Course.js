const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const mongoose_delete = require('mongoose-delete');

const Course = new Schema({
  name: { type: String, default: ' ', maxLength: 255, required: true },
  description: { type: String, default: ' ', maxLength: 255, required: true },
  image: { type: String, default: ' ' },
  videoId: { type: String, default: ' ', required: true },
  slug: { type: String, slug: 'name', unique: true },
}, {
  timestamps: true,
});

Course.plugin(mongoose_delete, {
  overrideMethods: 'all',
  deletedAt: true
});

module.exports = mongoose.model('Course', Course);
