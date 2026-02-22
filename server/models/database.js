const mongoose = require('mongoose');
mongoose.connect("mongodb://admin:admin123@recipe-db:27017/recipeblog?authSource=admin");

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');