const name =""
const nickname = "null"
console.log(name || nickname)

//using turthy and falsy values

//if both are falsy then it give last falsy
// truthy will return first true value

let a = 12 
let b;
console.log(a + b)

let c = 12
let d;
console.log(a + (b||0)
)


// AND OPERTAOR

// **and will always search for first falsy value **
//ex:
const e = "apple"
const f = ""
console.log(e && f) // its is giving nothing in out put but there is a valu appe so this is the prblm with AND.

//AND will search first falsy value and last truthy value
// where as OR will first search first truthy value and last falsy value

const g = "hello"
const h ="hi"
console.log(g&&h&&"namaste")//it take last truthy value

//exercise

console.log(3||2||1)
console.log(""||0||2
)
console.log(""||null||undefined
)
console.log(3&&2&&1)