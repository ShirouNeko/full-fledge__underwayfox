const mainModule = require('../models/mainModels');

const movie = async (req, res) => {
    const movieID = req.params.id;
    const movie = await mainModule.getMovieById(movieID);
    res.render('layout/moviePage', {movie: movie[0]})
}

module.exports = {
    movie
};