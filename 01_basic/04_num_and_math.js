const score = 400
console.log(score);

const balance = new Number (100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));          // tofixed = decimal ke 2 point tak jana


const othernum = 154.268
console.log(othernum.toPrecision(5));    // toprecision = only for given digit, such that given digit(3)- 123.547 output= 123

const hun = 10000200
console.log(hun.toLocaleString('en-IN'));  // tolocalestring( ) it used to , in digit and you use tolocalestring('en-IN') so it use , in indian system 


//+++++++++++++++++  MATHS  +++++++++++++++++

console.log(Math.abs(-4));         // abs = convert negative number to postive   //only negative not postitvie 

console.log(Math.random());
console.log (Math.ceil(Math.random()*11)+1);

const max = 20
const min = 10

Math.floor(Math.random() * (max - min + 1)) + min;
