const express = require('express');
const app = express();
const products = require('./routes/products');
const favorite = require('./routes/favourites');
const setFavorite = require('./routes/setFavourite');
const search = require('./routes/serach');
const cors = require('cors');
require('dotenv').config();


//These middlewares are used to extract the data and make them available on req.body object
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

//serving static files
app.use(express.static('../client-angular-navigus'));


//These are the routing middlewares
app.use('/products',products);
app.use('/search',search);
app.use('/setFavorite',setFavorite);
app.use('/favorite',favorite);


//extracting port value from environment variable
const {PORT} = process.env;

//starting the node server on the port defined by the variable @port
app.listen(PORT,() => {
    console.log(`Listening on the post ${PORT}`);
});