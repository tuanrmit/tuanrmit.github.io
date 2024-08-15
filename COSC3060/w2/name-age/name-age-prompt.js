
const process = require('process');
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("What is your name? ", (name) => {
    rl.question("What is your age? ", (age) => {
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        rl.close();
    });
})