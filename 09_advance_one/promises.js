const promiseOne = new Promise(function(resolve, reject) {
    // Do an Async task
    // DB calls, Cryptpgraphy, network

    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("Async Task 2 ")
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@learning.com"})
    }, 1000)

})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Trudju", password:"Poldhh"})
        }
        else{
            reject('ERROR: Something went wrong!')
        }
    }, 1000)
    
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username

}).then((username) =>{
console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise is either resolved or rejected"))




const promsieFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javscript", password:"wdvjbwbv"})
        }
        else{
            reject('ERROR: Js went wrong!')
        }
    }, 1000)
});

async function consumePromiseFive(){
   try {
    const response =  await promsieFive
   console.log(response);
   }catch(error){
    console.log(error);
   }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = fetch('https://api.github.com/users/prathuMPO')
//     const data = response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// this code is for next lecture:

// fetch('https://api.github.com/users/prathuMPO')
// .then((response) => {
//     return response.json()

// })qqqw
// .then((data) =>{
//     console.log(data);
// })
// .catch((error) => console.log(error))


