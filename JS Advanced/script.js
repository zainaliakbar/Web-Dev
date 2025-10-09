// Destructuring Assignment
// Array Destructuring
let [x,y,...rest] = [1,2,3,4,5,6,7];

console.log(x,y,rest);

let o={
    a:1,
    b:2,
}

let {a,b} = o;
console.log(a,b); // we used this to extract values from objects

//Spread Syntax
function sum(x,y,z){
    return x+y+z;
}

let arr=[1,2,3];
console.log(sum(arr[0],arr[1],arr[2])); // old way
console.log(sum(...arr)); // new way using spread syntax
