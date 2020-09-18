let numberOfFilms = prompt('How much films did you look?', 0),
    lastMovie = prompt('What the last movie what you watch?'),
    movieMark = prompt('What mark of this film?')


let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

personalMovieDB.movies = {
    [lastMovie] : movieMark
}

console.log(personalMovieDB);
