export const routes = [
  '/',
  '/movies',
  '/saved-movies',
  '/profile',
  '/signin',
  '/signup'
];

export const mainOptions = {
  url: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
    // 'authorization': "fde5bb74-e309-4d0b-b20e-21b47420feea"
  }
}

export const movieOptions = {
  url: 'https://api.nomoreparties.co',
  headers: {
    'Content-type': 'application/json',
    // 'authorization': "fde5bb74-e309-4d0b-b20e-21b47420feea"
  }
}
