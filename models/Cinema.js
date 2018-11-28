const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Hall = require('../models/Hall');
//let Session = require('../models/Session');

let Cinema = new Schema({
    cinema_name:{
        type: String
      },
    cinema_address:{
        type: String
      },
    sessions:{
        type:Array
    },
    halls:{
        type:Array
    }
   
},{
    collection: 'cinemas'
});

module.exports = mongoose.model('Cinema', Cinema);