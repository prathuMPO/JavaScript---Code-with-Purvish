class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
    }
}

const cha = new Teacher("chai", "chh@f.com", "14lp")

cha.addCourse()

const tea = new User("masas TEa")

tea.logMe()
cha.logMe()

console.log(cha instanceof User);