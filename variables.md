# Variables
label and store data in memory. 

There are only a few things you can do with variables:

1. Create a variable with a descriptive name.
1. Store or update information stored in a variable.
1. Reference or “get” information stored in a variable. 

```javascript
var favoriteFood = 'pizza'  // string
var numOfSlices = 8         // number
var pizzaDay = true         // boolean
```

If we don’t assign a value to a variable declared using the let keyword, it automatically has a value of undefined. 
let price;

```javascript
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350
```

Mathematical Assignment Operators

```javascript
let x = 20;
x -= 5; // Can be written as x = x - 5, Output: 15
let y = 50;
y *= 2; // Can be written as y = y * 2, Output: 100
let z = 8;
z /= 2; // Can be written as z = z / 2, Output: 4
let a = 10;
a++; // Output: 11
let b = 20;
b--; // Output: 19
```

String Concatenation with Variables
let myPet = 'armadillo';

```javascript
console.log('I own a pet ' + myPet + '.'); // Output: 'I own a pet armadillo.'
```

String Interpolation: We can insert, or interpolate, variables into strings using template literals.

```javascript
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`); // Output: I own a pet armadillo.
```

If you need to check the data type of a variable’s value, you can use the typeof operator. 

```javascript
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean
```