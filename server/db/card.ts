export { };
const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: { type: String, requires: true, unique: true },
  columnId: { type: Schema.Types.ObjectId, requires: true, unique: true },
  order: { type: Number, requires: true },
  name: { type: String, requires: true },
});

module.exports = model('card', schema);
