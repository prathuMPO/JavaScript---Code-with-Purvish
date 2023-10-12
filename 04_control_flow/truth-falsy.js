const userEmail = []

if(userEmail){
    console.log(" got your email")
} else{
    console.log("dont have it")
}

// faley values:

// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// truthy values:

// "0", 'false', " "(space given), [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}

// Nullish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10 // first one would be output
val1 = null ?? 10
val2 = undefined ?? 15

console.log(val2);

// terniary operator

// condition ? true : false

const iceTeaprice = 100

iceTeaprice >= 80 ? console.log("less than 80") : console.log("morethsn 80")

