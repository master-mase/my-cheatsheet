# Loops

A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. The generic term iterate when referring to loops; iterate simply means “to repeat”.

When we need to reuse a task in our code, we often bundle that action in a function. Similarly, when we see that a process has to repeat multiple times in a row, we write a loop. Loops allow us to create efficient code that automates processes to make scalable, manageable programs.

## For Loop

Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a for loop.

The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

A for loop contains three expressions separated by ; inside the parentheses:
- an initialization starts the loop and can also be used to declare the iterator variable.
- a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
- an iteration statement is used to update the iterator variable on each loop.

```js
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
```

1. The initialization is let counter = 0, so the loop will start counting at 0.
1. The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
1. The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
1. The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.

Inside the for loop, one can use the [comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator) (,) to execute multiple statements

```javascript
const a = ['0123456789', '0123456789', '0123456789', '0123456789', '0123456789', '0123456789', '0123456789', '0123456789', '0123456789', '0123456789']
for (let i = 0, j = 9; i <= 9; i++, j--)
  console.log('a[' + i + '][' + j + '] = ' + a[i][j]);
```

Outputs

```
a[0][9] = 9
a[1][8] = 8
a[2][7] = 7
a[3][6] = 6
a[4][5] = 5
a[5][4] = 4
a[6][3] = 3
a[7][2] = 2
a[8][1] = 1
a[9][0] = 0
```
