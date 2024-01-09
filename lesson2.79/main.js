const age = 22

if (age >= 18) {
    console.log('Вы совершеннолетний')
} else {
    console.log('Вам еще нет 18')
}

age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам еще нет 18')

switch (age) {
    case 18: 
        console.log('Маловат еще')
        break;
    case 22:
        console.log ('В самый раз')
        break;
    default:
        console.log ('Нет такого возраста')
        break;
}

// =======================================================================

const firstNumber = 5
const secondNumber = 20

let resilt = null

if (firstNumber === 10 && secondNumber === 20) {
    resilt = firstNumber + secondNumber
    console.log(resilt)
} else {
    resilt = secondNumber - firstNumber
    console.log(resilt)
}

const alex = 'admin'

if (alex === 'user') {
    console.log('Alex in user')
} else if (alex === 'vip') {
    console.log('Alex is vip user')
} else {
    console.log('Alex is admin')
}

alex === 'admin' ? console.log('Alex is admin') : console.log('Alex is not admin')