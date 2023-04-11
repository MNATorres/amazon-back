const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  calification: {
    type: Number,
    required: true,
  },
  numComments: {
    type: Number,
  },
  certification: {
    type: Boolean,
  },
  alexa: {
    type: Boolean,
  },
  certificationClimate: {
    type: Boolean,
  },
  price: {
    type: Number,
  },
  starRatings: {
    type: Number,
  },
});


module.exports = mongoose.model('Product', productSchema);