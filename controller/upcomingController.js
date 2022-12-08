const mainModule = require('../models/mainModels')

const upcoming = async (req, res) => {
    const movies = await mainModule.getAllMovieUC();
    res.render('layout/upcoming', {movies})
}

module.exports = {
    upcoming
}