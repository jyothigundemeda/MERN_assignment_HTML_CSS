//tables
console.log("tables")
const a = 2
for(let i =1; i<11; i++){
    console.log(a+"*"+i+"="+a*i)
}
//using nested for

for (let i = 1; i<10;i++){
    for (let j = 1; j<12;j++){
        let product = i*j 
        console.log(i + "x" + j + "=" + product)

    }
    console.log("---------------")
}


//star patterns
//repeat : it is a string method ..oka string ni ene sarlu kavali ante ani sarlu repaet cheskovachu
let text ="hi "
console.log(text.repeat(3))
//similarly
for (let i=1;i<5;i++){
    console.log(text.repeat(i))
}

let symbol = "* "
for (let i = 6; i>1;i--){
    console.log(symbol.repeat(i))
}