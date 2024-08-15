let scores = [];

scores[0] = 1;
scores[1] = 15;
scores[2] = 7;
scores[3] = 10;
scores[4] = 34;

let teams = ["Tigers", "Bisons", "Eagles", "Cobras"];

console.log(scores);
console.log(teams);
console.log(`${scores}`);
console.log(`${teams}`);

// map
let text = ['tom', 'and', 'jerry'];
let caps = text.map(t => t.toUpperCase());
console.log(`${caps}`);

//find
let movies = [
    'Fantastic Four',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
]
let movie = movies.find(movie => movie.includes('Mrs.'));
console.log(`${movie}`);

//filter
let nums = [1,2,3,4,5,6,7,8,9];
let smallNums = nums.filter(n => n<5);
console.log(smallNums);

//every
let words = ['dog', 'cat', 'mouse', 'elephant'];
words.every(word => word.length === 3);

// some
words.some(word => word.length === 3);

//reduce
// sum
[3,5,7,9,11].reduce((x, currentValue) => x + currentValue);

//max
[3,5,7,9,11].reduce((x, currentMax) => (Math.max(x, currentMax)));