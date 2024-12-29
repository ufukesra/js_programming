const utilities=require('./5_Utility');// import from the same directory
const test = require('../day01/6_Test');// import from a different directory

console.log(utilities.square(5));
console.log(utilities.cube(5));

console.log(test.calculate(5, 3, '+'));