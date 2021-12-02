import { mainOptions } from "./constants.js";

class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      credentials: 'include',
    })
      .then(this._checkResponse)

  }

  setUserInfo(dataUserName, dataUserEmail) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: dataUserName,
        email: dataUserEmail
      })
    })
      .then(this._checkResponse)
  }

  getMyMovies() {
    return fetch(this._url + '/movies', {
      credentials: 'include',
    })
      .then(this._checkResponse)
  }

  saveMovie(data) {
    return fetch(this._url + '/movies/', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image.url,
        trailer: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.image.formats.thumbnail.url,
        movieId: data.id,
      })
    })
      .then(this._checkResponse)

  }

  removeMovie(movieId) {

    return fetch(this._url + '/movies/' + movieId, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse)
  }

  register(name, email, password) {
    return fetch(this._url + "/signup", {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    })
  }

  login(email, password) {
    return fetch(this._url + "/signin", {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
  }

  logout() {
    return fetch(this._url + '/signout', {
      credentials: 'include',
    })
  }

}

const mainApi = new MainApi(mainOptions);

export default mainApi;