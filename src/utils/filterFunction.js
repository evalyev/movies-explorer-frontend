export function searchMovies(movies, searchText, isShort) {
  let indexies = [];

  let searchTextList = null;
  if (searchText.length > 0 && searchText.includes(' ')) {
    searchTextList = searchText.split(' ');

    if (searchTextList?.length > 0) {

      searchTextList.forEach(search => {
        let delItems = 0;
        indexies.forEach(index => {
          movies.splice(index-delItems, 1);
          delItems++;
        })
        indexies = [];

        movies.forEach((movie, index) => {
          const nameList = movie.nameRU.split(' ');
          let isTruth = false;

          nameList.forEach(name => {
            if (name.toLowerCase().includes(search.toLowerCase())) {
              isTruth = true;
            }
          });

          if (!isTruth) {
            indexies.push(index);
          }
          else if (isShort && movie.duration >= 40) {
            indexies.push(index);
          }
        })

      })

    }


  }
  else {
    if (searchText.length === 0) {
      movies.forEach((movie, index) => {
        if (isShort && movie.duration >= 40) {
          indexies.push(index);
        }
      })

      let delItems = 0;
      indexies.forEach(index => {
        movies.splice(index - delItems, 1);
        delItems++;
      })
    }
    else {
      movies.forEach((movie, index) => {
        const nameList = movie.nameRU.split(' ');
        let isTruth = false;

        nameList.forEach(name => {
          if (name.toLowerCase().includes(searchText.toLowerCase())) {
            isTruth = true;
          }
        });

        if (!isTruth) {
          indexies.push(index);
        }
        else if (isShort && movie.duration >= 40) {
          indexies.push(index);
        }
      })

      let delItems = 0;
      indexies.forEach(index => {
        movies.splice(index - delItems, 1);
        delItems++;
      })
    }

  }

  return movies;

}