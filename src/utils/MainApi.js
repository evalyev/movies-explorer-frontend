import {mainOptions} from "./constants.js";

class MainApi {
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

  getUserInfo() {
    return fetch(this._url + '/users/me')
      .then(this._checkResponse)

  }

  setUserInfo(dataUserName, dataUserEmail) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: dataUserName,
        email: dataUserEmail
      })
    })
    .then(this._checkResponse)
  }

  getMyMovies() {
    return fetch(this._url + '/movies')
      .then(this._checkResponse)
  }

  saveMovie(data) {
    return fetch(this._url + '/movies', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        data
      })
    })
      .then(this._checkResponse)

  }

  removeMovie(movieId) {

    return fetch(this._url + '/cards/' + movieId, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

}

const mainApi = new MainApi(mainOptions);

export default mainApi;