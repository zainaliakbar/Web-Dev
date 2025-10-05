function intro(name) {
    console.log("hi "+ name);
    console.log(name + "plays");
    console.log(name + "sleeps");
}
intro("zain");

function sum(a,b){
    return a+b;
}
console.log(sum(2,3));

function checkeven(num){
    if(num % 2 == 0){
        return "even";
    }
    else{   
        return "odd";
    }
}

console.log(checkeven(4));

/*
The intro2 function is called an "arrow function" or "arrow function expression" in JavaScript.
It is defined using the arrow syntax: (parameters) => { ... }
*/

const intro2 = (num) => {
    console.log("The number is: " + num);
    console.log(num + " squared is " + (num * num));
    console.log(num + " cubed is " + (num * num * num));
}

intro2(2);