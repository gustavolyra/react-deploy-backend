const mongoose = require('mongoose');

const jokerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastJoke: {
    type: Date,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
  record: {
    type: Number,
    require: true,
    validade(value) {
      if (value < 0) {
        throw new Error('Recorde não pode ser negativo');
      }
    },
  },
});

const jokerModel = mongoose.model('joker', jokerSchema, 'joker');

module.exports = { jokerModel };
