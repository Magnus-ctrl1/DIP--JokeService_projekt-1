// controller.js
const mongoose = require('mongoose');
const Joke = require('../models/Joke');
const config = require('../config');

mongoose.connect(config.databaseURI, {useNewUrlParser: true, useUnifiedTopology: true});

<<<<<<< HEAD


=======
>>>>>>> bbe6c17ed1676b332e942f490cbf4a586c8f9aa0
exports.createJoke = function (setup, punchline) {
    return Joke.create({
        setup,
        punchline
    });
};

exports.getJoke = function (jokeId) {
    return Joke.findById(jokeId).exec();
};

exports.getJokes = function () {
    return Joke.find().populate('joke').exec();
};

