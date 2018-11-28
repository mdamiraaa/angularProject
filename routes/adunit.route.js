
const express = require('express');
const app = express();
const adUnitRoutes = express.Router();

// Require AdUnit model in our routes module
let Film = require('../models/Film');
let Cinema = require('../models/Cinema');
//let Session = require('../models/Session');


// Defined store route
adUnitRoutes.route('/addfilm').post(function (req, res) {
  let film = new Film(req.body);
  film.save()
    .then(game => {
    res.status(200).json({'film': 'Film in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});




// Add cinema
adUnitRoutes.route('/addcinema').post(function (req, res) {
  let cinema= new Cinema(req.body);
  cinema.save()
    .then(game => {
    res.status(200).json({'cinema': 'Cinema in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});





// get film
adUnitRoutes.route('/getfilm').get(function (req, res) {
    Film.find(function (err, films){
    if(err){
      console.log(err);
    }
    else {
      res.json(films);
    }
  });
});

//Get cinema
adUnitRoutes.route('/getcinema').get(function (req, res) {
  Cinema.find(function (err, cinemas){
  if(err){
    console.log(err);
  }
  else {
    res.json(cinemas);
  }
});
});

// Defined edit route
adUnitRoutes.route('/editfilm/:id').get(function (req, res) {
  let id = req.params.id;
  Film.findById(id, function (err, film){
      res.json(film);
  });
});
//Edit cinema
adUnitRoutes.route('/editcinema/:id').get(function (req, res) {
  let id = req.params.id;
  Cinema.findById(id, function (err, cinema){
      res.json(cinema);
  });
});

//  Defined update route
adUnitRoutes.route('/update/:id').post(function (req, res) {
    Film.findById(req.params.id, function(err, film) {
    if (!film)
      return next(new Error('Could not load Document'));
    else {
        film.film_name = req.body.film_name;
        film.film_duration = req.body.film_duration;
        film.film_studio = req.body.film_studio;
        film.film_limit = req.body.film_limit;
        film.film_format = req.body.film_format;
        film.film_genre = req.body.film_genre;

        film.save().then(film=> {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

//add Session
adUnitRoutes.route('/addsession/:id').post(function (req, res) {
  Cinema.findById(req.params.id, function(err, cinema) {
  if (!cinema)
    return next(new Error('Could not load Document'));
  else {
    cinema.sessions.push(req.body) 
      cinema.save().then(cinema=> {
        res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
  }
});
});


adUnitRoutes.route('/addhall/:id').post(function (req, res) {
  Cinema.findById(req.params.id, function(err, cinema) {
  if (!cinema)
    return next(new Error('Could not load Document'));
  else {
    cinema.halls.push(req.body) 
      cinema.save().then(cinema=> {
        res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
  }
});
});
// Defined delete | remove | destroy route
adUnitRoutes.route('/deletefilm/:id').get(function (req, res) {
    Film.findByIdAndRemove({_id: req.params.id}, function(err, film){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


adUnitRoutes.route('/deletecinema/:id').get(function (req, res) {
  Cinema.findByIdAndRemove({_id: req.params.id}, function(err, cinema){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


adUnitRoutes.route('/:c_id/deletesession/:s_id').get(function (req, res) {
  Cinema.findById(req.params.c_id, function(err, cinema) {
    if (!cinema)
      return next(new Error('Could not load Document'));
    else {
      for(var i=0; i<=cinema.sessions.length; i++){
        cinema.sessions[i].id = req.params.s_id;
        cinema.sessions.remove(cinema.sessions[i])}
        cinema.save().then(cinema=> {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});
module.exports = adUnitRoutes;