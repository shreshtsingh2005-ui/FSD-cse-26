function register(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("register here")
    resolve();

    },10000)
})
function login(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    console.log("login here")
    cb();

    },5000)
})
function getdata(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    console.log("fetch data from DB")
    cb();

    },4000)
})
function displaydata(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    console.log("view user data")

    },6000)
})
register() 
             .then(login)
             .then(getdata)
             .then(displaydata)
             .catch((err)=>{
                console.log("Error:",err)
             })
console.log("call another application")

