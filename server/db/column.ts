export { };
const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: { type: String, requires: true, unique: true },
  name: { type: String, requires: true },
});

module.exports = model('columns', schema);
