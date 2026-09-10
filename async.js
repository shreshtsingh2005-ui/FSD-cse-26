function register(){
    setTimeout(()=>{
    console.log("register here")

    },10000)
} 
function login(){
        setTimeout(()=>{
    console.log("login here")

    },5000)
} 
function getdata(){
        setTimeout(()=>{
    console.log("fetch data from DB")

    },4000)
} 
function displaydata(){
        setTimeout(()=>{
    console.log("view user data")

    },4000)
} 
function waitfordelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt){




    }
}
register();
login();
getdata();
displaydata();
console.log("call another application")

