import Api from '@/services/Api'

export default {
  index () {
    return Api().get('movies')
  },
  show (movieId) {
    return Api().get(`movies/${movieId}`)
  },
  post (movie) {
    return Api().post('movies', movie)
  },
  put (movie) {
    return Api().put(`movies/${movie.id}`, movie)
  }
}
