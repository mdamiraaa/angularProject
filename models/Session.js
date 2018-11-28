const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Film
let Session = new Schema({
  
    film:{
        type: Object
      },
    date:{
        type: String
      },
    time:{
        type:String
    },
    hall:{
        type:Object
    }
   
});

module.exports = mongoose.model('Session', Session);