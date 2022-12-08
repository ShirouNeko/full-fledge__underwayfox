require('dotenv').config();

const express = require('express')
const routerHomepage = require('./routes/homepageRoute')
const routerNowPlaying = require('./routes/nowPlaying')
const routerUpcoming = require('./routes/upcomingRoute')
const routerPromos = require('./routes/promosRoute')
const routerMovie = require('./routes/movieRoute')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));


app.use('/movie', routerMovie);
app.use('/', routerHomepage);
app.use('/nowPlaying', routerNowPlaying);
app.use('/upcoming', routerUpcoming);
app.use('/promo', routerPromos);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))