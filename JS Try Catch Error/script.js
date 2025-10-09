// let a = prompt('Enter first number');
// let b = prompt('Enter second number');

// let sum = a + b;

// console.log('The sum is', sum);
// This code gives 2+2=22 it appends actually we want 2+2=4
// So we use try catch to handle this error


//Correct code
let a = prompt('Enter first number');
let b = prompt('Enter second number');

if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid input, please enter numeric values only');
}
// if input is not a number it throws an error
let sum = parseInt(a) + parseInt(b); // converting string to number

function main(){
try {
    console.log('The sum is', sum*x);
return true;
}
catch (error) {
    console.log('An error occurred:', error.message);
    return false;
}
finally {
    console.log('Execution completed.');
}
}
main();
// try {
//     console.log('The sum is', sum*x); // x is not defined it will throw an error
// }
// catch (error) {
//     console.log('An error occurred:', error.message);
// }
// finally {
//     console.log('Execution completed.');
// }        
// finally block is always executed whether there is an error or not
// It is used to close resources like file, database connection etc.
// It is optional
// If there is no error in try block catch block is skipped
// If there is an error in try block catch block is executed
// If there is an error in catch block it is not handled
// If there is an error in finally block it is not handled
// finally block is executed after try and catch blocks
// finally block is executed even if there is a return statement in try or catch block
// finally block is executed even if there is a break or continue statement in try or catch block
// finally block is executed even if there is an error in try or catch block
// finally block is executed even if there is a throw statement in try or catch block
// finally block is executed even if there is a nested try catch block in try or catch block
// finally block is executed even if there is a nested function in try or catch block
// finally block is executed even if there is a nested async function in try or catch block
// finally block is executed even if there is a nested promise in try or catch block
// finally block is executed even if there is a nested setTimeout in try or catch block
// finally block is executed even if there is a nested setInterval in try or catch block
// finally block is executed even if there is a nested event listener in try or catch block
// finally block is executed even if there is a nested XMLHttpRequest in try or catch block


// finally block is executed even if there is a nested fetch in try or catch block

