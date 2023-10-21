// let myName = "SOLO     "

// console.log(myName.truelength());

let myHeros = ["Thor", "ShaktiMan"]

let heroPower = {
    thor: "hammer",
    shaktiman: "Pencil",

    getShaktiPower: function(){
        console.log(`Shaktiman power is ${this.getShaktiPower}`);
    }
}

Object.prototype.SOLO = function(){
    console.log(`SOLO is present everywhere`);
}

Array.prototype.heySOLO = function(){
    console.log(`Say hello to SOLO`);
}


heroPower.SOLO()


myHeros.SOLO()
myHeros.heySOLO()
// heroPower.heySOLO()



// inheritance:- ==========

const User = {
    name: "CHai",
    email: "chai@google.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Approach:- syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiWithSOLO    "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUserName.trueLength()

"SOLO".trueLength()
"Icdio".trueLength()

