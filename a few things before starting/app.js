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
console.log(subtract(3, 2))
//prints 1

const divide = (x, y) => x / y
console.log(divide(3, 2))
//prints 1.5

const stringReturner =
    () => 'this function returns a string'
console.log(stringReturner())
//prints this function returns a string

const increment = x => x + 1
console.log(increment(1))
//prints 2

//If you're returning an object with a one-liner
//you need to wrap the object in parentheses
const returnObject = () => ({a: 1, b: 2})
console.log(returnObject())
//prints { a: 1, b: 2 }

//Desctructuring
console.log('\nDestructuring')

const addAB = ({a, b}) => a + b
console.log(addAB({a: 4, b: 5})) //prints 9

const {thing} = {
    thing: 'this is a thing',
    stuff: 'this is some stuff'
}
console.log(thing)
//Prints this is a thing

const divideRename = ({x: a, y: b}) => a / b
console.log(divideRename({x: 1, y: 2}))
//Prints 0.5

//Map
console.log('\nMap')

console.log([1, 2, 3].map(x => 2 * x))
//prints [2, 4, 6]

console.log(
    [1, 2, 3]
        .map(x => 2 * x)
        .map(x => x + 3)
        .map(x => x * x))
//prints [ 25, 49, 81 ]

console.log(
    ['Fluttershy', 'Twilight Sparkle', 'Pinkie Pie']
        .map((x, i) => (i + 1) + ') ' + x)
        .join('\n'))
/*
prints 
1) Fluttershy
2) Twilight Sparkle
3) Pinkie Pie
*/

//Object Shorthand
console.log('\nObject Shorthand')

const
    superHero = (name, secretIdentity, powers) => ({
        name, secretIdentity, powers
    })
console.log(
    superHero(
        'Spider-Man',
        'Peter Parker',
        [
            'Wall crawling',
            'Super Strength',
            'Spider Sense'
        ]))
/*
Prints
{ name: 'Spider-Man',
  secretIdentity: 'Peter Parker',
  powers: [ 'Wall crawling', 'Super Strength', 'Spider Sense' ] }
*/

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

//Default Arguments
console.log('\nDefault Arguments')
const
    defaultAdd = (x = 1, y = 2) => x + y
console.log(defaultAdd(3, 4))
//prints 7
console.log(defaultAdd(3))
//prints 5
console.log(defaultAdd())
//prints 3

//Pure Functions
console.log('\nPure Functions')

const
    add = (x, y) => x + y

console.log(add(1, 2))
//prints 3

/*
Pure functions only return values. They don't have side effects like printing to the screen, talking to a database, or changing variable values.

The add function above is pure because, given the same x and y, it will always return the same value. add(1, 2) will always return 3 no matter what else happens in your application.

Functional programmers like me say that when most of your code is purely functional it's much easier to think about.
*/

var
    someVar = 1,
    dependsOnSomeVar = x => x / someVar

console.log(dependsOnSomeVar(5))
//prints 5

someVar = 5

console.log(dependsOnSomeVar(10))
//now prints 2

/*
Because dependsOnSomeVar depends on the value of someVar, it might not behave in the way you expect.

The change from 1 to 5 is easy to see here, but imagine a much larger project. If values are mutable it can become difficult to understand the state of your application as it runs, since the state can be changed anywhere, anytime.

Of course, we still do need to change the state of our application, talk to databases, print to the screen, etc. Functional programmers are just more paranoid about where that stuff happens. We push it to the edges of our application. We make sure impure code is only in a few places rather than everywhere.

Anyway, this is the sales pitch for functional programming, we think it's easier. :)
*/

//Filter
console.log('\nFilter')

console.log(
    [1, 2, 3, 4, 5]
        .filter(x => x % 2 !== 0))
//prints [1, 3, 5]

//Reduce
console.log('\nReduce')

console.log(
    [1, 2, 3, 4]
        .reduce((sum, x) => sum + x, 0))
//Prints 10

console.log(
    'reverse'
        .split('')
        .reduceRight((str, c) => str + c, ''))
//Prints esrever
