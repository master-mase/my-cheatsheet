/* Ternary Operator: In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement. */
let isNightTime = true;
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

/* We can use a ternary operator to perform the same functionality: The condition, isNightTime, is provided before the ?. Two expressions follow the ? and are separated by a colon : */
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

/* The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}. Inside the parentheses (), a condition is provided that evaluates to true or false. If the condition evaluates to true, the code inside the curly braces {} runs, or executes.  */
if (true) {
    console.log('This message will print!'); 
  } 

/* If...Else Statements */
let sale = true;
sale = false;
if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}

/* Else If Statements: We can add more conditions to our if...else with an else if statement. */
let stopLight = 'yellow';
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

/* Comparison Operators 
Less than: <, Greater than: >, Less than or equal to: <=, Greater than or equal to: >=, Is equal to: ===, Is NOT equal to: !== */
let hungerLevel = 7
if (hungerLevel <= 7) {
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
}

/* Logical Operators
We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators: the and operator (&&)the or operator (||) the not operator, otherwise known as the bang operator (!) */

if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
} else {
    console.log('Stop');
}
/* When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. */

/* If we only care about either condition being true, we can use the || operator: */
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}
/* When using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true. In the code example above, if either day === 'Saturday' or day === 'Sunday' evaluates to true the if‘s condition will evaluate to true and its code block will execute. */

/* The ! not operator reverses, or negates, the value of a boolean: */
let excited = true;
console.log(!excited); // Prints false
let sleepy = false;
console.log(!sleepy); // Prints true
/* Essentially, the ! operator will either take a true value and pass back false, or it will take a false value and pass back true. */

/* Truthy and Falsy
Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value— you’ll only check to see if the variable has been assigned a value. */
let myVariable = 'I Exist!';
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

let numberOfApples = 0;
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

/* In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment: */
let defaultName = username || 'Stranger';