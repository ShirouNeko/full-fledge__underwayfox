const mainModule = require('../models/mainModels')
const promos = async (req, res) => {
    const promo = await mainModule.getAllPromo();
    res.render('layout/promo', {promo});
}

module.exports = {
    promos
}