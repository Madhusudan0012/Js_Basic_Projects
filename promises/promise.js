// const promiseOne = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Asyc task is complete");
//         resolve()
//     }, 1000);
// })


// promiseOne.then(function(){
//     console.log("promise consumed")
// }) 

// new Promise(function (resolve , reject){
//     setTimeout(function(){
//         console.log("Async function is called");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Asyc task 2 completed ")
// })


// const PromiseThree = new Promise(function(resolve , reject){
//         setTimeout(function(){
//             resolve({username : "Madhusudan singh chauhan" , email : "madhusudanchauhan62@gmail.com" })
//         }, 1000)
// })

// PromiseThree.then(function(user){
//     console.log(user);
// })


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Madhusudan Singh Chauhan" , email : "madhusudanchauhan62@gmail.com"});
        }else{
            resolve('Error : something went wrong')
        }
        

    }, 1000 )
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)

}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The Promise either is resolved or rejected "))


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "javascript developer " , email : "madhusudanchauhan62@gmail.com"});
        }else{
            resolve('Error : Js went wrong')
        }
        

    }, 1000 )

})

async function consumePromiseFive() {
   const response =  await promiseFive
    console.log(response)
}
consumePromiseFive()