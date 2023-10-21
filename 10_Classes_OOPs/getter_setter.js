class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}SOLO`
    }

    set password(value){
        this._password = value
    }

}

const SOLO = new User("Dff@yahho.com", "aBc")
console.log(SOLO.password);
console.log(SOLO.email);