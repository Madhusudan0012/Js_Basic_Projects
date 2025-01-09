// const user = {
//     username : "Madhusudan Singh Chauhan",
//     loginCount : 8, 
//     signedCount : true, 

//     getUserDetails: function(){
//         // console.log(`Username :${this.username}`);
//         console.log(this)


//     }

// }
 
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// const promiseOne = new Promise()
// const date = new Date() 

class User {
    constructor(username, LoginCount, isloggedin) {
        this.username = username;
        this.LoginCount = LoginCount;
        this.isloggedin = isloggedin;
        // return this;


    }
}

// user("Madhusudan");
// console.log(user.username);

const userone = new User("Madhusudan singh chauhan" , 11, true)
console.log(userone);
const usertwo = new User("Chai aur code" , 18 , true)
console.log(usertwo);