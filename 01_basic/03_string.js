const  name = "Ayush"
           //  01234
const repoNumber = 50

// console.log(name + repoNumber); this is old model, don not try
console.log(`Hello everyone my name is ${name} and my repo count is ${repoNumber}`);  // this is new model 

console.log(name.length);
console.log(name[4]);
console.log(name.charAt(4));     // kon se indexing pe kon sa character hai
console.log(name.indexOf('u'))   // character kon se indexing pe hai

const newstring = name.substring(0,4)
console.log(newstring);

const anotherstring = name.slice(-4,4)
console.log(anotherstring);

const name2 = "    Ayush    "
console.log(name2);          // space ke sath print hoga
console.log(name2.trim());   // trim space hata dega staring se aur ending se

const url = "https://ayush.com/ayush%20kumar"

console.log(url.replace('%20', '-'));      //replace function is used to replace '%20' to '-'

console.log(url.includes('ayush'))         //include fuction is used to find any element in variables  and then, output is true or flase


