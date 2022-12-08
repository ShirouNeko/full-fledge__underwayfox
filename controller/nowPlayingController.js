const mainModule = require('../models/mainModels')

const nowPlaying = async (req, res)  => {
    const movies = await mainModule.getAllMovieNP();
    res.render('layout/nowPlaying', {movies})
}

module.exports = {
    nowPlaying
}