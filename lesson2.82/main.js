const names = 'Andrey'

function users(name) {
    return `Hello ${name}`
}

console.log(users(names))

// =====================================

function users(name) {
    return `Hello ${name}`
}

console.log(users('Andrey'))

const numbers = [8, 9, 33, 10, 11, 12, 13, 20]

function printNumbersGreaterThan10(numbers) {
    for( let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            console.log(numbers[i])
        }
    }
}
console.log(printNumbersGreaterThan10(numbers))

// =======================================================================

const calculator = (firstNumber, secondNumbers, operator) => {
    if (operator === 'minus') {
        return firstNumber - secondNumbers
    }
    if (operator === 'plus') {
        return firstNumber + secondNumbers
    }
    if (operator === 'division') {
        return firstNumber / secondNumbers
    }
    if (operator === 'multiplication') {
        return firstNumber * secondNumbers
    }
}
console.log(calculator(5, 7, 'minus'))
console.log(calculator(37, 84, 'plus'))
console.log(calculator(50, 5, 'division'))
console.log(calculator(9, 9, 'multiplication'))


// const users = ['jonh', 'Ann', 'Alex', 'Max']
// const numbers = [1, 2, 3]

// function checkForCopyItem(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return `There is no such item in the array`
// }

// console.log(checkForCopyItem(users, 'Alex')) 

// const checkForCopyItem = (array, item) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return `There is no such item in the array`
// }

// console.log(checkForCopyItem(numbers, 3)) 




// function sumNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// const result = sumNumbers(2, 3)
// console.log(result)
// console.log(sumNumbers(5, 5))

