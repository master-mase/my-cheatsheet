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