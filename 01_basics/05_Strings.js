const name = "Solofacts"
const repoCount = 50

// console.log(name + repoCount + " value ") old syntax

console.log(`Hello my name is ${name} and my repo count is toooo ${repoCount}`)

const gameName = new String('purvishvvb')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "  purvish  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://purvish.com/purvish%20chaudhryyy"

console.log(url.replace('%20', '-'));

console.log(url.includes('premam'))

console.log(gameName.split('-'))