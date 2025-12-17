const isvalid= true
if (isvalid){
    console.log("hello")
}


const islog = false
if (islog){
    console.log("h")
}

const userage = 20
if (userage >18){
    console.log("eligible")

}

// const readlineSync = require("readline-sync");
// const age = readlineSync.question("how old are u?")
// if (age >18){
//     console.log("eligible")
// }
// else{
//     console.log(ne)
// }

// const readlineSync = require(readline-sync);
// const marks = readlineSync.question("enter marks");
// if (marks>85) {
//     console.log("good")
// }

// const readlineSync = require("readline-sync")
// const number = readlineSync.question("enter num?")
// if (number%2 == 0){
//     console.log("even")
// }
// else if (number < 0){
//     console.log("neg")
// }
// else{
//     console.log("not even")
// }


// const mark = 50;
// (mark < 40)?console.log("work hard"):console.log("keep it up")

// const age = 19;
// result = (age > 18)?("eligible"):("NE")
// console.log(result)

const mark = 90
result = (mark<30)? "work hard" : (mark<50)? " btter work h" : (mark <70)? "better" : (mark<85)? "a garde": "genius"
console.log(result)