console.log("start")
setTimeout(() => {
    console.log("timeout")
}, 2000)


setTimeout(() => {
    console.log("hi 2")
}, 2000);
console.log("end")



//run after every two seconds
let id = setInterval(() => {
    console.log("heello world")
}, 2000);


setTimeout(() => { clearInterval(id) }, 10000)
// clearInterval(id)


//Promises
//to execute asynchrons funtions in synchronise way.
//eg. when we ask data from backend it takes some time (we cant predict that time). and we want to manipulate or print data only after receiving it.