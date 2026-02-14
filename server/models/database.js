const mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.connect("mongodb://127.0.0.1:27017/RecipeBlog");
=======
mongoose.connect("mongodb://127.0.0.1:27017/recipeblog");
>>>>>>> ff04cec (Fix: Explicitly set collection names for Categories and Recipes)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');