const {Movie} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const movies = await Movie.findAll({
        limit: 10
      })
      res.send(movies)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the movies'
      })
    }
  },
  async show (req, res) {
    try {
      const movie = await Movie.findById(req.params.movieId)
      res.send(movie)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the movie'
      })
    }
  },
  async post (req, res) {
    try {
      const movie = await Movie.create(req.body)
      res.send(movie)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the movie'
      })
    }
  },
  async put (req, res) {
    try {
      await Movie.update(req.body, {
        where: {
          id: req.params.movieId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to edit the movie'
      })
    }
  }
}
