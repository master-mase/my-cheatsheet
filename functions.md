# Functions

In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration. Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name, or an identifier.

A function declaration consists of:

- The function keyword.
- The name of the function, or its identifier, followed by parentheses.
- A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.

```javascript
function getReminder() {
  console.log('Water the plants.')
}

getReminder()
```
The code inside a function body runs, or executes, only when the function is called. To call a function in your code, you type the function name followed by parentheses.

## Parameters

When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

```javascript
function calculateArea(width, height) {
  console.log(width, height);
}
```

In the diagram above, calculateArea(), computes the area of a rectangle, based on two inputs, width and height. The parameters are specified between the parenthesis as width and height, and inside the function body, they act just like regular variables. width and height act as placeholders for values that will be multiplied together.

When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.

```javascript
calculateArea(10, 6)
```

In the function call above, the number 10 is passed as the width and 6 is passed as height. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared.

```javascript
const rectWidth = 10
const rectHeight = 6

calculateArea(rectWidth, rectHeight)
```

The variables rectWidth and rectHeight are initialized with the values for the height and width of a rectangle before being used in the function call. By using parameters, calculateArea() can be reused to compute the area of any rectangle!

Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

```javascript
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```

## Return

When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.

```javascript
function rectangleArea(width, height) {
  let area = width * height 
}
console.log(rectangleArea(5, 7)) // Prints undefined
```

The rectangleArea() is invoked with the arguments 5 and 7. But when we went to print the results we got undefined. In fact, the function worked fine, and the computer did calculate the area as 35, but we didn’t capture it but we can, with the keyword return!

```javascript
function calculateArea(width, height) {
  let area = width * height;
  return area
}
```

To pass back information from the function call, we use a return statement. To create a return statement, we use the return keyword followed by the value that we wish to return. Like we saw above, if the value is omitted, undefined is returned instead.

When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed. Look at the example below:

```javascript
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
```

If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. The second return statement width * height will not run.

The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.

We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:

```javascript
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59
```

In the example above:

- getFahrenheit() is called and 15 is passed as an argument.
- The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
- multiplyByNineFifths() takes the argument of 15 for the number parameter.
- The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
- 27 is returned back to the function call in getFahrenheit().
- getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
- Finally, 59 is returned back to the function call getFahrenheit(15).

We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.

## Function Expressions

Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

To declare a function expression:

- Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.
- Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

```javascript
const plantNeedsWater = function(day){
  if (day === 'Wednesday'){
  return true
  }
  else {
  return false;
  }
}

console.log(plantNeedsWater('Tuesday')) // Output: False
```

## Arrow Functions

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:

```javascript
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
```

JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:

Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

```javascript
// Zero parameters
const functionName = () => {};
// One or more parameters
const functionName = (paramOne, paramTwo) => {};
```

A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

```javascript
// Single-Line block
const sumNumbers = number => number + number;
// Multi-Line block
const sumNumbers = number => {
  const sum = number + number;
  return sum;
}
```

So if we have a function:

```javascript
const squareNum = (num) => {
  return num * num;
};
```

We can refactor the function to:

```javascript
const squareNum = num => num * num;
```

- The parentheses around num have been removed, since it has a single parameter.
- The curly braces { } have been removed since the function consists of a single-line block.
- The return keyword has been removed since the function consists of a single-line block.

## Higher-order functions

Functions in javascript are so called first-class citizens, i.e. they can be passed around just like variables.

### Simple logger

Consider the following:

```javascript
const log = text => console.log(text);
log('logged') // output: logged
```

What if we wanted to add an identifier to different log-functions?
A simple solution one would consider is adding another parameter to the function:

```javascript
const log = (id, text) => console.log(`${id}: ${text}`);
log('warn', 'logged') // output: warn: logged
```

But now we have to give the id to the function every time we call it.
Let's use *higher-order functions* to make this more ergonomic:

```javascript
function createLogger(id) {
  const logger = text => console.log(`${id}: ${text}`);
  return logger
}
const warnLogger = createLogger('warn')
warnLogger('higher-order functions') // output: warn: higher-order functions
```

Make it neater with arrow functions:

```javascript
const createLogger = id => text => console.log(`${id}: ${text}`);
const warnLogger = createLogger('warn')
warnLogger('higher-order functions') // output: warn: higher-order functions
```

> Using parameters to create new functions which are then called with more parameters is called currying, a key concept in functional programming.
