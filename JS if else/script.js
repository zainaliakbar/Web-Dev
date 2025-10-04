let age=23;

if(age>18){
    console.log("You are eligible for vote");
}
else{
    console.log("You are not eligible for vote");
}

age += 5; // increment operator
console.log(age);

if(age==18){  // comparison operator !=, === : equal value and type , >, <, >=, <=, !== : not equal value and type
    console.log("You are eligible for vote");
}

var num=3; //not equal cuz we comparing string with number
if(num==="3"){
    console.log("Equal value and type");
}
else{
    console.log("Not equal value and type");
}
// logical operators : && (and), || (or), ! (not)

// termary operator
x=5;
y=10;
var result=(x>y) ? "x is greater" : "y is greater"; 
console.log(result);