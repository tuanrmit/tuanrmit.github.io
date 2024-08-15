// Receive a name and an age from command line
// Print out name and age

const chalk = require('chalk');

let name = process.argv[2];
let age = process.argv[3];

console.log(`Name: ${chalk.red(name)}`); // chalk.red(process.argv[2]);
console.log(`Age:  ${chalk.blue(age)}`);
