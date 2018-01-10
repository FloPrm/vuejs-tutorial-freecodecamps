import Api from '@/services/Api'

export default {
  index () {
    return Api().get('movies')
  },
  post (movie) {
    return Api().post('movies', movie)
  }
}
