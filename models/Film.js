
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Film
let Film = new Schema({
    film_name:{
        type: String
      },
    film_duration:{
        type: String
      },
    film_studio:{
        type: String
      },
    film_limit:{
        type: String
      },
    film_format:{
        type: String
      },
    film_genre:{
        type: String
      },
    film_image:{
        type: String
      },
    film_desc:{
        type: String
    }
},{
    collection: 'films'
});

module.exports = mongoose.model('Film', Film);