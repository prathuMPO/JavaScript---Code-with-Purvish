// singleton

//object literals



//Object.create = aonther wayto create objects 


const mySym = Symbol("key1")


const JsUser = {
    name: "Purvish",
    "full name": "Purvish V Mangroliya",
    [mySym]: "myKey1",
    age: 26,
    location: "Surat",
    email: "purveshkravyl@yahoo.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Sat"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser["mySym"]);

JsUser.email = "prokliam@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "prokliam@vvyug.com"
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello BC kya kr rha hain?");
}

JsUser.greeting2 = function(){
    console.log(`Hello BC kya kr rha hain?, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());