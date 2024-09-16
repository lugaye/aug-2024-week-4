
function secondButton(){
    alert('This is from an external JS file.');
}

let myCollection = [20, 'web', 1.234, 1.5, 'student']

console.log(myCollection[4])

let person = {
    name: "John",
    age: 45,
    career: 'student',
    height: 6.5,
    language: 'French',
    gender: 'Male',
    email: 'john@mail.com'
}

console.log(person["email"])

//dot notation - objectName.name
//bracket notation objectName["age"]

let a = 2;
a = 10;
let b = 5;

//comparison operators - compare two values
console.log(a == b) // equal to (value)
console.log(a === b) // strict equal to (value & data type)
console.log( a != b ) // not equal to (value)
console.log( a !== b ) // strict not equal to (value & data type)
console.log( a > b) // greater than
console.log( a >= b) // greater than or equal to
console.log( a < b) // less than
console.log( a <= b) // less than or equal to

//logical operators
let isAdmin = true;
let hasAccess = true;

// AND - && ( both expressions must evaluate to true )
console.log( isAdmin && hasAccess )

// OR - || ( either of the expressions must evaluate to true )
console.log( isAdmin || hasAccess )

// NOT - ! ( negates an expression )
console.log(!isAdmin);

function square(number){
    return number * number;
}

console.log(square(10))

let greet = function(name) {
    console.log('Hello, ' + name);
};

greet("John")

let helloWorld = (name) => {
    console.log('Hello World. This is ' + name + '. I have written my first arrow function. ')
};

helloWorld('Jane');



