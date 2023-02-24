'use strict';

const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastfilm = prompt('What movie have you watched lately?', ''),
      gradefilm = prompt('Send grade of this film', ''),
      lastfilm2 = prompt('What another movie have you watched lately?', ''),
      gradefilm2 = prompt('Send grade of this film', '');

personalMovieDB.movies[lastfilm] = gradefilm;
personalMovieDB.movies[lastfilm2] = gradefilm2;

console.log(personalMovieDB);

// console.log(personalMovieDB.count);

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;
// console.log(incr +' ' + decr);

// alert('Who are you?');

// const result = confirm('Are you here?');

// const result = prompt('Hoq old are you?', '18');
// console.log('type: ' + typeof(result) + '\nvalue: ' + result);

// const answers = [];

// answers[0] = prompt('What is your name?', 'Someone');
// answers[1] = prompt('Hoq old are you?', '18');
// answers[2] = prompt('Your female?', 'Man');

// console.log(answers);
// document.write(answers);

// const name = prompt('What is your name?', 'Name');

// alert(`Hello ${name} :)`);