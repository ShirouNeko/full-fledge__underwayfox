/*
const variable_name = (req, res) => {

}
*/

const mainModule = require('../models/mainModels')

const homepage = async (req, res) => {
    let movies = await mainModule.getAllMovieNP();
    let promos = await mainModule.getAllPromo();

    // Limit promo displayed
    let promosLen;
    if (promos.length >= 6) {
        promosLen = 6;
    } else {
        promosLen = promos.length;
    }
    
    // Limit movie displayed
    let moviesLen;
    if (movies.length >= 4) {
        moviesLen = 4;
    } else {
        moviesLen = movies.length;
    }

    res.render('layout/homepage', {promos, promosLen, movies, moviesLen})
}

module.exports = {
    homepage
}