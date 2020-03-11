# Arrays

Organizing and storing data is a foundational concept of programming.

One way we organize data in real life is by making lists. Let’s make one here:

New Year's Resolutions:
1. Keep a journal 
1. Take a falconry class
2. Learn to juggle

In JavaScript, as an array:

```js
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
```

Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.

One way we can create an array is to use an array literal. An array literal creates an array by wrapping items in square brackets []. Each content item inside an array is called an element.

## Accessing Elements

Each element in an array has a numbered position known as its index. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. 

```js
let cities = ['New York','Beijing','Nairobi'];
cities[0]
```

In the code snippet above:

- cities is an array that has three elements.
- We’re using bracket notation, [] with the index after the name of the array to access the element.
- cities[0] will access the element at index 0 in the array cities. You can think of cities[0] as accessing the space in memory that holds the string 'New York'.

You can also access individual characters in a string using bracket notation and the index. For instance, you can write:

```js
const hello = 'Hello World';
console.log(hello[6]); // Output: W
```

## Update Elements

Once you have access to an element in an array, you can update its value.

```js
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn';
console.log(seasons); //Output: ['Winter', 'Spring', 'Summer', 'Autumn']
```

The line, seasons[3] = 'Autumn'; tells our program to change the item at index 3 of the seasons array to be 'Autumn' instead of what is already there.


