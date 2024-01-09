const firstNumber = 5
const secondNumber = 5

let result = null

if ( firstNumber === secondNumber) {
    let result = null
    result = firstNumber + secondNumber
} else {
    result = secondNumber - firstNumber
}

console.log(result)













'use strict'

function test() {
    let foo = null
    return foo
}

let foo = 123
console.log(foo)
console.log(test())