"Use strict";
const numberOFims = prompt ('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
    count: numberOFims,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const Pavel = prompt ('Один из просмотренных последних фильмов?', ''),
      Andrei = prompt ('На сколько оцените его?', ''),
      Anton = prompt ('Один из просмотренных последних фильмов?', ''),
      Gera = prompt ('На сколько оцените его?', '');
      personalMovieDB.movies[Pavel] = Andrei;
      personalMovieDB.movies[Anton] = Gera;
      console.log(personalMovieDB);