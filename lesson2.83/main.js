
const user = {
    alex: {
        name: 'Andrey',
        age: 22,
        isAdmin: false
    }
}

console.log(user)

const characteristic = {
    andrey: {
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

characteristic.andrey.sayHello('Andrey')

const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 23,
        isAdmin: true
    },
    {
        name: 'bob',
        age: 23,
        isAdmin: false
    },
    {
        name: 'anna',
        age: 23,
        isAdmin: true
    },
    {
        name: 'anna',
        age: 23,
        isAdmin: true
    }
]

let usersNotAdmin = 0

for(let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
        usersNotAdmin = usersNotAdmin + 1  //usersNotAdmin++
    }
}

console.log("Количество простых пользователей: " + usersNotAdmin)

// const users = [
//     {
//         name: 'alex',
//         age: 23,
//         isAdmin: false
//     },
//     {
//         name: 'john',
//         age: 23,
//         isAdmin: true
//     },
// ]

// users.push({
//     name: 'ivan',
//     age: 30,
//     isAdmin: true
// })

// for(let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }

// const foo = 'hello world'
// console.log(foo.toUpperCase())


// const users = {
//     alex: {
//         age: 22,
//         isAdmin: true
//     },
//     john: {
//         age: 20,
//         isAdmin: false,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(users.john)
// users.john.sayHello('Tom')


// const user = {
//     name: 'Alex',
//     age: 22,
//     isAdmin: false
// }

// console.log(user.name)