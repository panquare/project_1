"Use strict";
const numberOFims = prompt ('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
    count: numberOFims,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const Pavel = prompt ('Один из просмотренных последних фильмов?', ''),
         Andrei = prompt ('На сколько оцените его?', '');


    if (Pavel != null && Andrei != null && Pavel != '' && Andrei  != '' && Pavel.length < 50) {
        personalMovieDB.movies[Pavel] = Andrei;     
        console.log('done!');
    } else {
        console.log('Error!');
        i--;
    }  
    if (personalMovieDB.count < 10) {
       console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count <= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }


    personalMovieDB.movies[Pavel] = Andrei;     
    
}

    console.log(personalMovieDB);