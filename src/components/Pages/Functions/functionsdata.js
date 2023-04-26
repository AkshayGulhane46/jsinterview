export const functionDeclaration = {
    topic : "Function Definations",
    question : "what is function declaration",
    answer : 
   `Function Declaration is just the function with its implementation`,
    code :
`function squaredeclare(number) {
    return number * number
}`,
    explaination : ""
}


export const firstClassFunction = {
    topic : "First Class Function",
    question : "what is first class function",
    answer : 
   `1. we can pass functions as parameters of another function 
2. here the square will be passed as parameter of displaySquare()`,
    code :
`function displaySquare(fn){
    console.log("Square is" + fn(5));
}
// here the square will be passed as parameter of displaySquare()
displaySquare(square);
`,
    explaination : "25"
}

export const functionExpression = {
    topic : "Function Expression",
    question : "what is function Expression",

    answer : 
   `Function expression is the function which is assigned to a variable`,
    code :
`const square = function(num){
    return num * num
}`,
    explaination : ""
}

export const iife = {
    topic : "IIFE",
    question : "what is IIFE",
    answer : 
   `1. this will give 1 because the inner function will check x in its outer function
2. this is called closure and on outer scope x is 1 `,
    code :
`(function(x){
    return(function(y){
        console.log(x);
    })(2)
})(1)
`,
    explaination : "1"
}


export const functionScope = {
    topic : "Function Scope",
    question : "what is Function Scope",
    answer : 
   `1. Function will be read from top to bottom
2. First of all 60 will be printed
3. Control will go to GetScore()
4. Control will go to add()
5. In every function the variables are act as in function Scope `,
    code :
`const num1 = 20;
const num2 = 3;
const name = "Akshay";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}
console.log(multiply()); // 60
// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;
  function add() {
    return name scored num1 + num2;
  }
  return add();
}
console.log(getScore()); // "Akshay scored 5"
`,
    explaination : "60 Akshay scored 5"
}


export const Hoisting = {
    topic : "Hoisting",
    question : "what is Hoisting",
    answer : 
   `
1. Functions are hoisted different than variables
2. Functions are hoisted completly 
3. complete function is copied to the scope 
    `,
    code :
`functionname();
// hoisting place for the x 
function functionname(){
   console.log(x); // this will give undefined as its a variable and this variable will be hoisted over the function
   let x = 5; 
   console.log("inside functionname function");
}
`,
    explaination : "undefined as x is hoisted on function scope"
}


export const op1 = {
    topic : "Hoisting based Question",
    question : "what is output",
    answer : 
   `
1. why x is undefined under function 
2. in JS execution Hoisting is a 2 step process
3. 1. it will initialize the complete code 
4. 2. it will initialize the local scope
5. so once compiler comes under function() it will look for x and if it is not defined now
6. it will print undefined as its not yet initiliaze
7. so when we have variable in our local scope we will not check for variable in global

    `,
    code :
`var x = 21;
var fun = function(){
    console.log(x);
    var x = 22;
}
fun();
`,
    explaination : "undefined"
}


export const paramsVSArgs = {
    topic : "Params VS Aruguments",
    question : "what is difference between params and arguments",
    answer : 
   `
1. we recieve num here so its PARAMS
2. We Send 5 here so 5 is a Arguments
`,
    code :
`function parmsvsargs(num){ // we recieve num here so its PARAMS
    console.log(num * num);
}

parmsvsargs(5); // We Send 5 here so 5 is a Arguments
`,
    explaination : "25"
}

export const spreadVsRest = {
    topic : "Spread VS Rest",
    question : "what is difference between Spread and Rest",
    answer : 
   `
1. we recieve arr in multiplys() here so its REST operator
2. we send ...arr here so its called SPREAD operator
`,
    code :
`function multiplys(...arr){ // we recieve arr here so its REST operator
    console.log(arr[0] + arr[1])
}

var arr = [2,9];
multiplys(...arr); // we send arr here so its called SPREAD operator
`,
    explaination : "11"
}

export const op2 = {
    topic : "Output Based Question on Spread vs Rest",
    question : "What is output",
    answer : 
   `
1. First 3 args will be assiged to a,b,c
2. Remaining will be send to ...nums
3. Always remember that rest operator should be last in declaration
`,
    code :
`const fn = (a,b,c,...nums) =>{
    console.log(a,b,c,nums);
}
fn(1,2,3,4,5,6,7,8);`,
    explaination : "1,2,3,[4,5,6,7,8]"
}

export const arrowFunctions = {
    topic : "Arrow Fuctions",
    question : "What is Difference between Normal Functions and Arrow Functions",
    answer : 
   `
1. arrow function needs to be added to a variable
2. there should be return keyword added to arrow function
3. argument keyword is not accessed in arrow functions
`,
    code :
`function square2(num){
    return num * num;
}

const square3 = (num) =>{
    return num * num;
}
//2 inplicit 'return keyword 

const square4 = (num) => num * num 

// 3 arguments

function fn1(){
    console.log(arguments);
}
fn1(1,2,4,5);

// we cant get arguments like above in arrow finctuons
// const fnarrow = () => {
//     console.log(arguments);
// }
// fnarrow(1,2,3,4,5);

`,
    explaination : ""
}


export const thiskeyword = {
    topic : "This keyword in Arrow Functions",
    question : "How to use 'this' in Arrow Functions",
    answer : 
   `
1. This will point to local object when used under normal function
2. This will point to global Object when used under arrow function
`,
    code :
`let user = {
    username:"akshay",
    rc1:() => {
        console.log("hello" + this.username); // this will point to global object
    },
    rc2(){
        console.log("hello" + this.username); // this will point to local username object
    }
};

user.rc1(); // undefined
user.rc2(); // akshay 
`,
    explaination : "undefined akshay"
}



















