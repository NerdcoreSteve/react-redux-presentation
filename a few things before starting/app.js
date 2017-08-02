//Constants
const constantValue = 'banana'

/*
This would generate an error:
constantValue = 'orange'
*/

//Desctructuring

//Arrow Functions

//Array Spreading

//Object Spreading
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

console.log('\nobject spread')
console.log(object2)
/*
prints
{ a: 1, b: 2, c: 3, d: 4 }
*/

//Promises

//The yield keyword

//Pure functions
const
    add = (x, y) => x + y

console.log('\npure functions')
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
