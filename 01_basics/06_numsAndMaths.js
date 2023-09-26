const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 1123.89666656656565654545454545
// console.log(otherNumber.toPrecision(15)) //limit is 3 to 21

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ********** MATHS ***********************************

// console.log(Math);

// console.log(Math.abs(-4)); // only for - to +
// console.log(Math.round(4.8)); 
// console.log(Math.ceil(4.8)); 
// console.log(Math.floor(4.8)); 
// console.log(Math.min(4,2,8,9,7)); 
// console.log(Math.max(4,2,8,9,7)); 


console.log(Math.random()); // gives valus bw 0 and 1
console.log((Math.random()*10) + 1); 
 console.log((Math.random()*10) + 1);   // could be possible like 0.01 so multiply with 10 and add 1 get more than 1 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // to get minimum we added min at the end , max -min +1 is to get the range you want. for floor is to getnearest lowest int.