const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const Yelp = require('yelp');

const yelp = new Yelp({
  consumer_key: 'I99PMmb1CkMFfhzlB61pfw',
  consumer_secret: 'alNPp4amX29cL7W1bk7CFCTGs_s',
  token: 'siRCHaLjg3VQ6WKg9ucatTYL4nBj8y16',
  token_secret: 'oDI0qwW2uja9gIqPs9aQNizddmc'
});

const app = express();
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const port = process.env.PORT || 8888;        // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();              // get an instance of the express Router

// See http://www.yelp.com/developers/documentation/v2/search_api

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {

});

// more routes for our API will happen here
// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/:location/:countryCode/:veg*?')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
      const catFilter = req.params.veg === 'vegetarian' ? `vegan,vegetarian` : `vegan`;
        yelp.search({ location: req.params.location, cc: req.params.countryCode, category_filter: catFilter, radius_filter: '30000' })
        .then(function (data) {
          res.json({ restaurants: data });
        })
        .catch(function (err) {
          console.error(err);
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
