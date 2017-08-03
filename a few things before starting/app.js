const
    regeneratorRuntime = require("regenerator-runtime") //Need this bit for generators below

//Constants
const constantValue = 'banana'

/*
This would generate an error:
constantValue = 'orange'
*/

//Arrow Functions
console.log('Arrow Functions')

const subtract = (x, y) => {
    return x - y
}
console.log(subtract(3, 2)) //prints 1

const divide = (x, y) => x / y
console.log(divide(3, 2)) //prints 1.5

//Desctructuring
console.log('\nDestructuring')

const addAB = ({a, b}) => a + b
console.log(addAB({a: 4, b: 5})) //prints 9

const
    head = ([head, ...tail]) => head,
    tail = ([head, ...tail]) => tail

console.log(head([1, 2, 3, 4])) //prints 1
console.log(tail([1, 2, 3, 4])) //prints [2, 3, 4]

//Array Spreading
console.log('\nArray Spreading')

const
    array1 = [1, 2, 3],
    array2 = [...array1, 4, 5, 6]

console.log(array2) //prints [ 1, 2, 3, 4, 5, 6 ]

//Object Spreading
console.log('\nObject Spreading')

const
    object1 = {
        a: 1,
        b: 2
    },
    object2 = {
        ...object1,
        c: 3,
        d: 4
    }

console.log(object2) //prints { a: 1, b: 2, c: 3, d: 4 }

//Promises
const
    fs = require('fs')

//Here's how you might be used to dealing with asynchronous JavaScript
fs.readFile('someFile.txt', 'utf8', (err, data) => {
    console.log('\nCallback')

    if (err) {
        return console.log(err)
    }
    console.log(data)
})
/*
prints:
Callback
These are the contents of someFile.txt
Try to contain your excitement
*/

//But we can also abstract asynchronous code with promises like this
const
    promisify = require('es6-promisify'),
    readFile = promisify(fs.readFile)

readFile('someOtherFile.txt', 'utf8')
    .then((fileName, err) => {
        console.log('\nPromise')
        if (err) {
            throw err
        }
        return readFile(fileName.trim(), 'utf8')
    })
    .then((data, err) => {
        if (err) {
            throw err
        }
        console.log(data)
    })
    .catch(console.error)
/*
prints
Promise
These are the contents of the third file!
Ice cream for everyone!!!
*/

//The yield Keyword
console.log('\nThe yield Keyword')
const  
    starFunction = function* () {
        yield 'This'
        yield 'is'
        yield 'kinda'
        yield 'cool'
    },
    generator = starFunction()

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
/*
prints
The yield Keyword
This
is
kinda
cool
*/

//Pure Functions
console.log('\nPure Functions')

const
    add = (x, y) => x + y

console.log(add(1, 2))

/*
Pure functions only return values. They don't have side effects like printing to the screen, talking to a database, or changing variable values.

The add function above is pure because, given the same x and y, it will always return the same value. add(1, 2) will always return 3 no matter what else happens in your application.

Functional programmers like me say that when most of your code is purely functional it's much easier to think about.
*/

var
    someVar = 1,
    dependsOnSomeVar = x => x / someVar

console.log(dependsOnSomeVar(5)) //prints 5
someVar = 5
console.log(dependsOnSomeVar(10)) //now prints 2

/*
Because dependsOnSomeVar depends on the value of someVar, it might not behave in the way you expect.

The change from 1 to 5 is easy to see here, but imagine a much larger project. If values are mutable it can become difficult to understand the state of your application as it runs, since the state can be changed anywhere, anytime.

Of course, we still do need to change the state of our application, talk to databases, print to the screen, etc. Functional programmers are just more paranoid about where that stuff happens. We push it to the edges of our application. We make sure impure code is only in a few places rather than everywhere.

Anyway, this is the sales pitch for functional programming, we think it's easier. :)
*/
