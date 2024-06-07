const num = 100
const value = new Number(500)
console.log(num);
console.log(value);
const val = 1000000
console.log(val.toLocaleString('en-IN'));//uses commas based on indian number system since en-IN mentioned but by default international ns 
console.log(value.toFixed(2));

console.log(Math);
let min = 10
let max = 30
console.log(Math.round(Math.random()*(max - min)) + min)