const router = require('express').Router()
const moviesServices = require('./movies.services');

//? Este es el prefijo: /movies - que se congigura en app.js

router.get('/', moviesServices.getAllMovies)
router.post('/',moviesServices.postMovie )
router.get('/:id', moviesServices.getMovieById)
router.delete('/:id', moviesServices.deleteMovie)
router.patch('/:id', moviesServices.patchtMovie)
router.put('/:id', moviesServices.putMovie)

module.exports = router
