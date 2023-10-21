class User{
    constructor(username){
        this.uername = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const solo = new User("SOLO")
// console.log(solo.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@hgoo.com") 
console.log();
console.log();