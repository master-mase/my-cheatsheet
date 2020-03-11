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

## Array methods

One of an array’s built-in properties is length and it returns the number of items in the array. We access the .length property just like we do with strings.

```js
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length); // Output: 2
```

- We use dot notation, chaining a period with the property name to the array, to access the length property of the newYearsResolutions array.

One method, .push() allows us to add items to the end of an array.

```js
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
```

1. We access the push method by using dot notation, connecting push to itemTracker with a period.
1. Then we call it like a function. That’s because .push() is a function and one that JavaScript allows us to use right on an array.
1. .push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.
1. Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.

Another array method, .pop(), removes the last item of an array.

```js
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); // Output: [ 'item 0', 'item 1' ]
console.log(removed); // Output: item 2
```

1. In the example above, calling .pop() on the newItemTracker array removed item 2 from the end.
1. .pop() does not take any arguments, it simply removes the last element of newItemTracker.
1. .pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
1. .pop() is a method that mutates the initial array.

There are many more array methods than just .push() and .pop(). .pop() and .push() mutate the array on which they’re called. However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods. Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others.

## Arrays and functions

What happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?

Take a look at the following example where we call .push() on an array inside a function. Recall, the .push() method mutates, or changes, an array:

```js
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
```

1. The flowers array that has 3 elements.
1. The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
1. We call addFlower() with an argument of flowers which will execute the code inside addFlower.
1. We check the value of flowers and it now includes the 'lily' element! The array was mutated!

So when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we’re actually passing the function is a reference to where the variable memory is stored and changing the memory.

## Nested Arrays

When an array contains another array it is known as a nested array. Examine the example below:

```js
const nestedArr = [[1], [2, 3]];
```

To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:

```js
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
```

Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3]. Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.

```js
const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
```

- In the second console.log() statement, we have two bracket notations chained to nestedArr. We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array, we use nestedArr[1][0] and we get the value of 2.

- Arrays are lists that store data in JavaScript.
- Arrays are created with brackets [].
- Each item inside of an array is at a numbered position, or index, starting at 0.
- We can access one item in an array using its index, with syntax like: myArray[0].
- We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
- Arrays have a length property, which allows you to see how many items are in an array.
- Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
- Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
- Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
- Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
- Arrays mutated inside of a function will keep that change even outside the function.
- Arrays can be nested inside other arrays.
- To access elements in nested arrays chain indices using bracket notation.