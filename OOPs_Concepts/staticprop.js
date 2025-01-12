class User {
    constructor(username){
        this.username = username;
    }
    logMe() {
        console.log(`login in that page ${this.username}`);
    }
    createId(){
         return `123`
    }
}

const Madhusudan = new User("Madhusudan")
// console.log(Madhusudan.createId()) 

class Teacher extends User {
    constructor(username , email){
        super(username);
        this.email =email;

    }
}

const iphone = new Teacher("iphone" , "iphone@phone.com")

iphone.logMe();