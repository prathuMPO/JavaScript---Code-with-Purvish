

function sayMyName(){
    console.log("h");
    console.log("u");
    console.log("u");
    console.log("h");
    console.log("y");
    console.log("h");
    console.log("d");
}

// sayMyName          // => Refrence 
// sayMyName()            // => Execution


// function addTwoNumbers(number1, number2){    //number1, number 2 are parameters .
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){    //number1, number 2 are parameters .
    // 
    
    return number1 + number2
    
}
const result = addTwoNumbers(3,5)       // 3, "a " are Arguments or alues

// console.log("result:" , result);

function loginUserMsg(username = "sam"){
    if(username === undefined){
        console.log("please entre a username");
        return  
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg("Purvish"))
console.log(loginUserMsg()) // when you pass nothing you gor=t like undefined just loggedin


function calculateCartPrice(val1, val2, ...num1){      // ... is rest operator here to get as many as values 
    return num1

}
console.log(calculateCartPrice(200,400,502));

const user = { 
    username: "Poru",
    price: 149
}

function handleObject(anyobject){
    console.log(` Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)



const myNewArr = [200,400,560,145]

function returnSecondval(getArr){
    return getArr[1]
}
console.log(returnSecondval(myNewArr))