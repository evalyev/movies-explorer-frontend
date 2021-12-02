import {movieOptions} from "./constants.js";

class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this._url + "/beatfilm-movies")
      .then(this._checkResponse)
      .then(res => {
        res.forEach(element => {
          element.image.url = this._url + element.image.url;
          element.image.formats.thumbnail.url = this._url + element.image.formats.thumbnail.url;
        });
        return res;
      })

  }
}

const moviesApi = new MoviesApi(movieOptions);

export default moviesApi;