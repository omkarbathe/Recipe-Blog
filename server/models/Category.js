const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.'
  },
  image: {
    type: String,
    required: 'This field is required.'
  },
});

<<<<<<< HEAD
module.exports = mongoose.model('Category', categorySchema);
=======
module.exports = mongoose.model('Category', categorySchema,'Categories');
>>>>>>> ff04cec (Fix: Explicitly set collection names for Categories and Recipes)
