'use strict';

// First console Aplication
const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const lastfilm = prompt('What movie have you watched lately?', ''),
		gradefilm = prompt('Send grade of this film', '');
    
	if (lastfilm != null && gradefilm != null && lastfilm != '' && gradefilm != '' && lastfilm.length < 50) {
		personalMovieDB.movies[lastfilm] = gradefilm;
		console.log('Yes');
	} else {
		console.log('Error 404');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log(`You have watched too little films: ${personalMovieDB.count}`);
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log(`You a classical watcher: ${personalMovieDB.count}`);
}  else if (personalMovieDB.count >= 30) {
	console.log(`You are kinoman: ${personalMovieDB.count}`);
}  else console.log(`Eror 404: ${personalMovieDB.count}`);

console.log(personalMovieDB);

//---------------------------------------------------------------------

// const num  = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too much');
// } else {
//     console.log('Right');
// }

// (num === 50) ? console.log('Right') : console.log('Error');

// switch (num) {
//     case 49:
//         console.log('49');
//         break;
//     case 100:
//         console.log('100');
//         break; 
//     case 50:
//         console.log('50');
//         break; 
//     default:
//         console.log('Not today');
//         break;
// }

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++; 
// } while (num < 55);

// for (let i = 0; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// let result = '';
// const length = 10;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`); 
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`); 
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);   
//         }  
//     }  
// }

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
// 	for (let j = 0; j < lines - i; j++) {
// 		result += ' ';
// 	}
// 	for (let j = 0; j < 2 * i + 1; j++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }

// console.log(result);


