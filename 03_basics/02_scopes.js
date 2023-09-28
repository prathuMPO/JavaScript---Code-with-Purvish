var c = 300

let a= 300  // global scope
if(true){    // block scope
    let a = 10
const b= 25
var c = 30
console.log("inner:", a);

}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "poukl"

    function two(){
        const website = "reddit"
        console.log(username);
        console.log(website);

    }

    two()
}

one()

if(true){
    const username = "ploip"
    if(username === "ploip"){
        const website = " youtube"
        console.log(username + website)
    }
}

//*********** interestinf ********** */

function addOne(num){
    return num + 1
}
// console.log(addOne(5))

const addTwo = function(num){
    return num + 2
}
addTwo(5)