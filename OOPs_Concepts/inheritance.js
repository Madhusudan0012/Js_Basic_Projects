class User {
    constructor(username){
        this.username  = username;

    }
    logMe() {
        console.log(`USERNAME WILL BE ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username)
        this.email = email;
        this.password = password;

    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

    const chai = new Teacher("Madhusudan" , "madhusudanchauhan62@gmail.com" , "232  ");
    chai.addCourse();
    // console.log(chai)


    const masalaTea = new User("masalachai");
    masalaTea.logMe()



