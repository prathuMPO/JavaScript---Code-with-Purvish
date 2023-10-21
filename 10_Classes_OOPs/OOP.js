const user = {
    username: "SoloFacts",
    loginCount: 12,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user detail frokm Database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Solo", 12, true)
const userTwo = new User("ChaiWithTea", 11, false)
console.log(userOne);


