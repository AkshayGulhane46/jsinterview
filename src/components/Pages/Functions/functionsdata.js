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
   ``,
    code :
`const square = function(num){
    return num * num
}`,
    explaination : ""
}





