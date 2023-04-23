export const maps = {
    topic : "Maps",
    question : "what is map ",
    answer : 
   `1. A Map holds key-value pairs where the keys can be any datatype.
2. A Map remembers the original insertion order of the keys.
3. A Map has a property that represents the size of the map.`,

    code :
`const nums = [1,2,3,4];
console.log("nums is => " + nums);
const multiplyThree = nums.map((num,i,nums) => {
return num * 3 ;
// num is an individual number 
// i is the index 
// nums is the actual array we used
})`,
    explaination : "[3,6,9,12]"
}


export const filter= {
    topic : "Filter",
    question : "what is Filter ",
    answer : 
   `
1. The filter() method creates a new array filled with elements that pass a test provided by a function.

2. The filter() method does not execute the function for empty elements.

3. The filter() method does not change the original array.`,

    code :
`const nums2 = [1,2,3,4];
console.log("nums2 is => " + nums2);
const moreThanTwo = nums.filter((num) => {
    return num > 2;
})`,
    explaination : "[3,4]"
}


export const reduce= {
    topic : "Reduce",
    question : "what is Reduce ",
    answer : 
   `1. The reduce() method executes a reducer function for array element.
   2. The reduce() method returns a single value: the function's accumulated result.
   3. The reduce() method does not execute the function for empty array elements.
   4. The reduce() method does not change the original array.
   
   Function is 
   array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
   i. At the first callback, there is no return value from the previous callback.
   ii. Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
   iii. If an initial value is supplied, this is used, and the iteration starts from array element 0.
   `,
    code :
`const nums3 = [1,2,3,4];
const sum = nums3.reduce((acc,curr,i,nums3) =>{
    return acc+curr;
}, 0); 
`,
    explaination : "10"
}

export const FiltervsForeach= {
    topic : "ForEach",
    question : "what is Difference Betweeen Map and forEach ",
    answer : 
   `1. Map doesn't update the input array 
2. but forEach will update the input array 
3. Map will return the new array.
4. forEach will not return an array.
5. In map we can chain it with filter as it returns array
6. forEach we cannot chain anyting as it doenst returns anyting.
7. 
   `,
    code :
`const arr = [2,3,4,5]
const mapResult = arr.map((ar) => {
    return ar+2; // Map will not change the array but will give us new arrray 
})

const forEachResult = arr.forEach((ar,i)=>{
    arr[i] = ar + 3; // this will not return anything but will change the original array
})
console.log(forEachResult,mapResult,arr); // for each result will be null
// mapResult will be [4,5,6,7] and arr will be now [5,6,7,8]
`,
    explaination : "undefined  [4, 5, 6, 7]  [5, 6, 7, 8]"
}

export const op1= {
    topic : "Map Students in Capital",
    question : "Return Name of Students in Capital letters",
    answer : 
   `let students = [
{name:"akshay" , rollNo : 12 , marks: 30},
{name:"ramesh" , rollNo : 22 , marks: 31},
{name:"rambhau" , rollNo : 42 , marks: 33},
];
   `,
    code :
`const names = students.map(stu =>{
    return stu.name.toUpperCase();
})
console.log(names);
`,
    explaination : " ['AKSHAY', 'RAMESH', 'RAMBHAU']"
}

export const op2= {
    topic : "Filter Students whose marks > 30 ",
    question : "Return only Student whose marks greater than 30",
    answer : 
   `let students2 = [
{name:"akshay" , rollNo : 12 , marks: 30},
{name:"ramesh" , rollNo : 22 , marks: 31},
{name:"rambhau" , rollNo : 42 , marks: 33},
];
`,
    code :
`const names2 = students2.filter((stu) =>{
    return stu.marks > 30;
})
console.log(names2);
`,
    explaination : `
0:{name: 'ramesh', rollNo: 22, marks: 31}
1:{name: 'rambhau', rollNo: 42, marks: 33}
` 
}

export const op3= {
    topic : "Add all marks by Reduce",
    question : "Return Sum of marks of students",
    answer : 
   `let students2 = [
{name:"akshay" , rollNo : 12 , marks: 30},
{name:"ramesh" , rollNo : 22 , marks: 31},
{name:"rambhau" , rollNo : 42 , marks: 33},
];
`,
    code :
`const sum2 = students2.reduce((acc,curr) => acc + curr.marks , 0)
// accumulator and current pointer is used in Reduce method 
// first sum value is sent as 0 
console.log(sum2);
`,
    explaination : `
94
` 
}


export const op4= {
    topic : "Chaining Demo",
    question : "Return names of students who scored than particular marks",
    answer : 
   `let students2 = [
{name:"akshay" , rollNo : 12 , marks: 30},
{name:"ramesh" , rollNo : 22 , marks: 31},
{name:"rambhau" , rollNo : 42 , marks: 33},
];
`,
    code :
`const namesgreater = students2.filter((stu) => stu.marks > 30).map(stu=>stu.name)
`,
    explaination : `
    'AKSHAY', 'RAMESH', 'RAMBHAU']
` 
}


export const op5= {
    topic : "Chaining Demo 2",
    question : "",
    answer : 
   `let students2 = [
{name:"akshay" , rollNo : 12 , marks: 30},
{name:"ramesh" , rollNo : 22 , marks: 31},
{name:"rambhau" , rollNo : 42 , marks: 33},
];

return total marks of studens with students with marks 
greater than 60 after 20 makrs added to those who scored less than 30
we will check if any student have marks less than 60
then if less than 60 then add 20 marks grace 
then filter students who make marks greater than 60
then add all of the marks 
`,
code :`
const totalmarks = students2.map((stu) => {
    if(stu.marks < 60){
        stu.marks = stu.marks + 20;
    }
    return stu
}).filter(stu => stu.marks > 60)
.reduce((acc,curr) => acc + curr.marks , 0);
`,
    explaination : `
    149
` 
}