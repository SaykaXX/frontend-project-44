console.log('Welcome to the Brain Games!');
const readlineSync = require('readline-sync');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
