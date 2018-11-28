const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Film
let Hall = new Schema({
    hall_name:{
        type: String
      },
    row:{
        type: Number
      },
    column:{
        type: Number
      }
    
},{
    collection: 'halls'
});

module.exports = mongoose.model('Hall', Hall);