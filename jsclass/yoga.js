// 1) Question: Write a function that takes a string as input and returns the reversed version of the string.
// Sample Input: "hello"
// Sample Output: "olleh"

/*const prompt = require("prompt-sync")();
const input = prompt();
let B = input.split('').reverse().join('');
console.log(B); */

// 2) Question: Create a function that takes an array of numbers as input and returns the sum of all the numbers.
// Sample Input: [1, 2, 3, 4, 5]
// Sample Output: 15

/* const input1 = require("prompt-sync")(); 
const userInput = input1();
const numbers = userInput.split(" ").map(Number);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); */


// 3) Question: Write a function that takes a string as input and returns true if the string is a palindrome, and false otherwise.
// Sample Input: "racecar"
// Sample Output: true


// const input2 = require("prompt-sync")(); 
// const user = input2();
// let C = user.split('').reverse().join('');
// if (C === user) {
//     console.log(true);
// } else {
//     console.log(false);
// } 

// 4) Question: Implement a function that takes two arrays as input and returns a new array containing elements that are present in both arrays.
// Sample Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Sample Output: [3, 4]

 /* const input = require("prompt-sync")(); 
const userInput = input("Enter space-separated values: ");
const Array = userInput.split(" ");
const admin = input("Enter space-separated values: ");
const Array1 = admin.split(" ");
const common = Array.filter(element => Array1.includes(element));
console.log(common); */

// 5) Question: Create a function that takes a number as input and returns true if it's a prime number, and false otherwise.
// Sample Input: 7
// Sample Output: true
/*
    const prompt = require("prompt-sync")();
    const num = prompt()
    if (num <= 1) {
        console.log(false);
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) { 
            console.log();(false);
        }
    }
    console.log(true);
*/
  
// 6) Question: Write a function that takes an array of strings as input and returns the longest string in the array.
// Sample Input: ["apple", "banana", "pineapple", "orange"]
// Sample Output: "pineapple"

/*
const input = require("prompt-sync")(); 
const userInput = input("Enter space-separated values: ");
const Array = userInput.split(" ");
if (userInput in Array){
    console.log(true);
}
else{
    console.log(false);
}*/

// 7) Question: Implement a function that takes a sentence as input and returns the number of vowels (a, e, i, o, u) in the sentence.
// Sample Input: "This is a sample sentence."
// Sample Output: 7

/*
const input = require("prompt-sync")(); 
const userInput = input();
let A = ['a', 'e', 'i', 'o', 'u']
let C = 0;
for (let i of userInput){
    if (A.includes(i.toLowerCase())){
       C++; 
    }   
}
console.log(C); */

// 8) Question: Create a function that takes a string as input and returns the string with all vowels replaced by asterisks (*).
// Sample Input: "hello world"
// Sample Output: "h*ll* w*rld"

/*
const input = require("prompt-sync")();
const A = input();
const vowels = /[aeiou]/gi; 
const B = A.replace(vowels, '*'); 
console.log(B);
*/

// 9) Question: Write a function that takes an array of numbers as input and returns a new array containing only the even numbers from the input array.
// Sample Input: [1, 2, 3, 4, 5, 6]
// Sample Output: [2, 4, 6]

/*
const input = require("prompt-sync")();
const A = input()
const Array = A.split(' ')
let B = [];
for (let i = 0; i <= Array.length; i++){
    if ( i % 2 != 0){
        B.push(Array[i]);
    }
}
console.log(B);*/

// 10) Question: Implement a function that takes a string as input and returns the frequency of each character in the string as an object.
// Sample Input: "hello"
// Sample Output: {h: 1, e: 1, l: 2, o: 1}

/*
const input = require("prompt-sync")();
const A = input()
const B = {}
for (let i of A){
    B[i] = (B[i] || 0)+1
}
console.log(B);
*/

// 11) Question: Write a JavaScript program to find the sum of all numbers between 1 and a given number using a loop.
// Sample Input: num = 7
// Sample Output: The sum of numbers from 1 to 7 is 28

/*
const input = require("prompt-sync")();
const A = input().split(' ').map(Number)
for (let i of A){
    const sum = i.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}
*/

// 12) Question: Write a JavaScript program to find the factorial of a given number using a loop.
// Sample Input: num = 5
// Sample Output: The factorial of 5 is 120

/*
const input = require("prompt-sync")();
const A = input()
if(A === 0 || A === 1){
    console.log('1');
}
let result = 1;
for(let i = 2; i <= A; i++){
    result *= i;
}
console.log(result);
*/

// 13) Question: Write a JavaScript program to check if a given number is prime or not using a loop.
// Sample Input: num = 13
// Sample Output: 13 is a prime number
/*
const input = require("prompt-sync")();
const A = parseInt(input());
if (A <= 1) {
    console.log(`${A} is not a prime number`);
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(A); i++) {
        if (A % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${A} is a prime number`);
    } else {
        console.log(`${A} is not a prime number`);
    }
}
*/

// 14) Question: Write a JavaScript program to generate Fibonacci series up to a given number using a loop.
// Sample Input: num = 10
// Sample Output: Fibonacci series up to 10: 0, 1, 1, 2, 3, 5, 8

/*
const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number: "));
let fib = [];
fib[0] = 0;
fib[1] = 1;
for (let i = 2; fib[i - 1] + fib[i - 2] <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("Fibonacci series up to", num + ": " + fib.join(', '));
*/

// 15) Question: Write a JavaScript program to count the number of digits in a given number using a loop.
// Sample Input: num = 12345
// Sample Output: The number of digits in 12345 is 5

/*
const input = require("prompt-sync")();
const A = input().split('').map(Number);
let B = A.length;
console.log(B);
*/

// 16) Question: Write a JavaScript program to reverse a given number using a loop.
// Sample Input: num = 12345
// Sample Output: Reversed number of 12345 is 54321

/*
const input = require("prompt-sync")();
const A = input()
let B = A.split('').reverse();
console.log(B);
*/

// 17) Question: Write a JavaScript program to find the sum of digits of a given number using a loop.
// Sample Input: num = 12345
// Sample Output: The sum of digits of 12345 is 15

/*
const input = require("prompt-sync")();
const A = input().split('');
const sum = A.reduce((acc, curr) => acc + parseInt(curr), 0);
console.log(sum);
*/

// 18) Question: Create a Set with the numbers 1, 2, and 3. Show the Set.
// Input: None
// Output: Set {1, 2, 3}

/*
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);
*/

// 19) Question: Add the number 4 to the Set {1, 2, 3}. Show the modified Set.
// Input: Set {1, 2, 3}, value to add: 4
// Output: Set {1, 2, 3, 4}

/*
const  set = new Set([1, 2, 3]);
set.add(4);
console.log(set);
*/

// 20) Question: Check if the number 2 exists in the Set {1, 2, 3, 4}.
// Input: Set {1, 2, 3, 4}
// Output: true


/*
const  set = new Set([1, 2, 3, 4]);
const yes = set.has(2);
console.log(yes);
*/

// 21) Question: Remove the number 3 from the Set {1, 2, 3, 4}. Show the modified Set.
// Input: Set {1, 2, 3, 4}, value to remove: 3
// Output: Set {1, 2, 4}

/*
const  set = new Set([1, 2, 3, 4]);
set.delete(3);
console.log(set);
*/

// 22) Question: Get the size of the Set {1, 2, 4}.
// Input: Set {1, 2, 4}
// Output: 3

/*
const  set = new Set([1, 2, 4]);
const length = set.size;
console.log(length);
*/

// 23) Question: Clear all elements from the Set {1, 2, 4}. Show the modified Set.
// Input: Set {1, 2, 4}
// Output: Set {}

/*
const  set = new Set([1, 2, 4]);
set.clear();
console.log(set);
*/

// 24) Question: Convert the Set {1, 2, 3} into an array.
// Input: Set {1, 2, 3}
// Output: [1, 2, 3]

/*
const set = new Set([1, 2, 3]);
const array = Array.from(set);
console.log(array);
*/

//25)  Question: Given a list of integers, use map to double each element.
// Sample Input: [1, 2, 3, 4, 5]
// Output: [2, 4, 6, 8, 10]

/*
const Arr = [1, 2, 3, 4, 5];
const List = Arr.map((value) => value * 2);
console.log(List);
*/

// 26) Question: You are given a list of strings containing both letters and numbers. Use filter to keep only the strings that contain digits.
// Sample Input: ['abc123', 'def', 'ghi456']
// Output: ['abc123', 'ghi456']

/*
const input = ['abc123', 'def', 'ghi456'];
const string = input.filter((str) => /\d/.test(str));
console.log(string);
*/

// 27) Question: Given a list of integers, use reduce to find the sum of all elements.
// Sample Input: [1, 2, 3, 4, 5]
// Output: 15

/*
const arr = [1, 2, 3, 4, 5];
const new1 = arr.reduce((acc, curr) => acc + curr, 0);
console.log(new1);
*/

// 28) Question: You are given a list of strings representing sentences. Use map to split each sentence into words.
// Sample Input: ['Hello world', 'This is a sentence', 'Python is awesome']
// Output: [['Hello', 'world'], ['This', 'is', 'a', 'sentence'], ['Python', 'is', 'awesome']]

/*
const prompt = require("prompt-sync")();
const input = prompt();
const sentences = input.split(','); 
const words = sentences.map(sentence => sentence.split(' '));
console.log(words);
*/

// 29) Question: Given a list of integers, use filter to keep only the even numbers.
// Sample Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 4, 6, 8, 10]

/*
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Arr = input.filter((input) => input % 2 == 0);
console.log(Arr);
*/

// 30) Question: You are given a list of dictionaries containing the information of students (name, age, and score). Use reduce to find the total sum of scores.
// Sample Input: [{'name': 'Alice', 'age': 20, 'score': 85}, {'name': 'Bob', 'age': 22, 'score': 75}, {'name': 'Charlie', 'age': 21, 'score': 95}]
// Output: 255 (Explanation: Sum of 85, 75, and 95)
// const prompt = [{'name': 'Alice', 'age': 20, 'score': 85}, {'name': 'Bob', 'age': 22, 'score': 75}, {'name': 'Charlie', 'age': 21, 'score': 95}];
// const words = prompt.map( prompt=> prompt.split(' '));


// 31) Question: Given a list of integers, use map to square each element.
// Sample Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]



// 32) Question: You are given a list of strings representing sentences. Use filter to keep only the sentences longer than 10 characters.
// Sample Input: ['Hello world', 'This is a long sentence', 'Python is great']
// Output: ['This is a long sentence']

// 33) Question: Given a list of integers, use reduce to find the maximum element.
// Sample Input: [10, 25, 8, 15, 30]
// Output: 30

// 34) Question: You are given a list of dictionaries containing the information of students (name, age, and score). Use filter to keep only the students whose score is above 80.
// Sample Input: [{'name': 'Alice', 'age': 20, 'score': 85}, {'name': 'Bob', 'age': 22, 'score': 75}, {'name': 'Charlie', 'age': 21, 'score': 95}]
// Output: [{'name': 'Alice', 'age': 20, 'score': 85}, {'name': 'Charlie', 'age': 21, 'score': 95}]

// 1. Write a Python program to triple all numbers in a given list of integers. Use Python map.

/*
const input = require('prompt-sync')();
const prompt = input().split(' ').map(Number);
const List = prompt.map(value => value * 3);
console.log(List);
*/

// 2. Write a Python program to add three given lists using Python map and lambda.

/*
const input = require('prompt-sync')();
const A = input().split(' ').map(Number);
const B = input().split(' ').map(Number);
const C = input().split(' ').map(Number);
const arr = A.concat(B, C);
const List = arr.map(value => value + value);
console.log(arr);
console.log(List);
*/

// 3. Write a Python program to listify the list of given strings individually using Python map.

// const input = require('prompt-sync')();
// const prompt = input()


// 4. Write a Python program to create a list containing the power of said number in bases raised to the corresponding number in the index using Python map.

/*
const input = require('prompt-sync')();
const A = input().split(' ').map(Number);
const List = A.map(value => value ** value);
console.log(List);
*/

// 5. Write a Python program to square the elements of a list using the map() function.

/*
function square(){
const input = require('prompt-sync')();
const A = input().split(' ').map(Number);
const List = A.map(value => value ** value);
console.log(List);
}
square();
*/

// 6. Write a Python program to convert all the characters into uppercase and lowercase and eliminate duplicate letters from a given sequence. Use the map() function.

/*
const input = require('prompt-sync')();
const prompt = input().split('')
const upper = prompt.map(char => char.toLocaleUpperCase());
const lower = prompt.map(char => char.toLocaleLowerCase());
const newupper = new Set(upper);
const newlower = new Set(lower);
console.log(newlower);
console.log(newupper);
*/

// 7. Write a Python program to add two given lists and find the difference between them. Use the map() function.

// const input = require('prompt-sync')();
// const prompt = input()
              
// 8. Write a Python program to convert a given list of integers and a tuple of integers in a list of strings.

// const input = require('prompt-sync')();
// const prompt = input()


// 9. Write a Python program to create a new list taking specific elements from a tuple and convert a string value to an integer.


// 10. Write a Python program to compute the square of the first N Fibonacci numbers, using the map function and generate a list of the numbers.

/*
const input = require("prompt-sync")();
const num = input()
fib = []
fib[0] = 0;
fib[1] = 1;
for (let i = 2; fib[i - 1] + fib[i - 2] <= num; i++){
    fib[i] = fib[i - 1] + fib[i - 2]
}
console.log(fib.join(','));
*/

// 11. Write a Python program to compute the sum of elements of an array of integers. Use the map() function.

// const input = require("prompt-sync")();
// const num = input().split(',').map(value => parseInt(value.trim()));
// let sum = 0;
// num.forEach(value => sum += value);
// console.log(sum);

// 12. Write a Python program to find the ratio of positive numbers, negative numbers and zeroes in an array of integers.

// function ration(number){
//     const P = number.filter(num => num > 0).length;
//     const t = number.length;
//     if (t === 0){
//         return 0;
//     }else{
//         const result = P / t;
//         return result;
//     }
// }
// const result = ration(number);


// 13. Write a Python program to count the same pair in two given lists. use map() function.



// 14. Write a Python program to interleave two lists into another list randomly. Use the map() function.


// 15. Write a Python program to split a given dictionary of lists into list of dictionaries using the map function.


// 16. Write a Python program to convert a given list of strings into a list of lists using the map function.


// 17. Write a Python program to convert a given list of tuples to a list of strings using the map function.

// Question 1:
// Write a JavaScript function to check whether an input is an array or not.

// Test Data:
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));

// Expected Output:
// false
// true

// //

// // Question 2:
// Write a JavaScript function to clone an array.

// Test Data:
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// Expected Output:
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// //

// // Question 3:
// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// Test Data:
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// Expected Output:
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// //

// // Question 4:
// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// Test Data:
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// Expected Output:
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// //

// // Question 5:
// Write a simple JavaScript program to join all elements of the following array into a string.

// Sample array: myColor = ["Red", "Green", "White", "Black"];

// Expected Output:
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// //

// // Question 6:
// Write a JavaScript program which accepts a number as input and inserts dashes (-) between each two even numbers. For example, if you accept 025468, the output should be 0-254-6-8

// //

// // Question 7:
// Write a JavaScript program to find the most frequent item of an array.

// Sample array: var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// //

// // Question 8:
// Write a JavaScript program which accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.

// //

// // Question 9:
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// //

// // Question 10:
// Write a JavaScript function to get a random item from an array.

// //

// // Question 11:
// Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.

// Test Data:
// console.log(renderArray(6, 0));
// console.log(renderArray(4, 11));

// Expected Output:
// [0, 0, 0, 0, 0, 0]
// [11, 11, 11, 11]

// You have an array of arrays containing numbers. Transform each inner array into an object with keys as "index" and "value" representing the index and value of each element respectively.

// Sample Input:

// javascript
// Copy code
// [[10, 20, 30], [40, 50, 60], [70, 80, 90]]
// Sample Output:

// javascript
// Copy code
// [[{ index: 0, value: 10 }, { index: 1, value: 20 }, { index: 2, value: 30 }], [{ index: 0, value: 40 }, { index: 1, value: 50 }, { index: 2, value: 60 }], [{ index: 0, value: 70 }, { index: 1, value: 80 }, { index: 2, value: 90 }]]
// Manipulating strings with regular expressions:
// Given an array of strings containing dates in the format "YYYY-MM-DD", transform each string to the format "DD/MM/YYYY".

// Sample Input:

// javascript
// Copy code
// ['2023-05-15', '2023-06-20', '2023-07-25']
// Sample Output:

// javascript
// Copy code
// ['15/05/2023', '20/06/2023', '25/07/2023']
// Calculating exponential moving averages:
// Given an array of numbers representing data points, calculate the exponential moving average for each point using a specified smoothing factor (alpha).

// Sample Input:

// javascript
// Copy code
// [10, 20, 30, 40, 50]
// Sample Output (with alpha = 0.5):

// javascript
// Copy code
// [10, 15, 22.5, 31.25, 40.625]
// Transforming and filtering objects in an array:
// You have an array of user objects with name and age properties. Transform each object to include only users above a certain age threshold.

// Sample Input:

// javascript
// Copy code
// [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 20 }]
// Sample Output (age threshold = 25):

// javascript
// Copy code
// [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }]
// Calculating differences between consecutive elements:
// Given an array of numbers, calculate the differences between consecutive elements and store them in a new array.

// Sample Input:

// javascript
// Copy code
// [10, 15, 20, 25, 30]
// Sample Output:

// javascript
// Copy code
// [5, 5, 5, 5]

// You have an array of strings representing key-value pairs separated by a delimiter. Transform each string into an object with corresponding keys and values.

// Sample Input:

// javascript
// Copy code
// ['name:John', 'age:25', 'city:New York']
// Sample Output:

// javascript
// Copy code
// [{ name: 'John' }, { age: '25' }, { city: 'New York' }]
// Formatting dates:
// Given an array of timestamps, convert each timestamp to a human-readable date format.

// Sample Input:

// javascript
// Copy code
// [1613530200000, 1613616600000, 1613703000000]
// Sample Output:

// javascript
// Copy code
// ['Feb 17, 2021', 'Feb 18, 2021', 'Feb 19, 2021']
// Calculating statistics from an array of objects:
// You have an array of objects representing students with their exam scores. Calculate the average score for each student and add it as a new property to each object.

// Sample Input:

// javascript
// Copy code
// [{ name: 'John', scores: [80, 75, 90] }, { name: 'Alice', scores: [85, 95, 92] }]
// Sample Output:

// javascript
// Copy code
// [{ name: 'John', scores: [80, 75, 90], averageScore: 81.67 }, { name: 'Alice', scores: [85, 95, 92], averageScore: 90.67 }]
// Merging and transforming arrays of objects:
// You have two arrays of objects representing employees' basic information and their corresponding salaries. Merge the arrays based on the employee ID and add a new property totalSalary to each object.

// Sample Input:

// javascript
// Copy code
// const basicInfo = [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }];
// const salaries = [{ id: 1, salary: 50000 }, { id: 2, salary: 60000 }];
// Sample Output:

// javascript
// Copy code
// [{ id: 1, name: 'John', salary: 50000, totalSalary: 50000 }, { id: 2, name: 'Alice', salary: 60000, totalSalary: 60000 }]
// Grouping and counting occurrences:
// Given an array of strings representing fruit names, count the occurrences of each fruit and return an object with fruit names as keys and their respective counts as values.

// Sample Input:
// javascript
// Copy code
// ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// Sample Output:
// javascript
// Copy code
// { apple: 3, banana: 2, orange: 1 }

// Question: You are given an array of student objects, where each object contains the student's name and their scores in three subjects: Math, Science, and History. Write a series of array method-based operations to perform the following tasks:

//     Filter out students who have scored less than 60 in any subject.
//     Calculate the average score for each subject across all students.
//     Find the student(s) with the highest total score.
//     Sort the students based on their total score in descending order.

// Input Array:

// javascript

// const students = [
//     { name: 'Alice', scores: { math: 80, science: 70, history: 85 } },
//     { name: 'Bob', scores: { math: 55, science: 60, history: 45 } },
//     { name: 'Charlie', scores: { math: 75, science: 90, history: 65 } },
//     { name: 'David', scores: { math: 90, science: 85, history: 95 } },
// ];

// Expected Outputs:

//     Filtered Array:

//     javascript

// [
//     { name: 'Alice', scores: { math: 80, science: 70, history: 85 } },
//     { name: 'Charlie', scores: { math: 75, science: 90, history: 65 } },
//     { name: 'David', scores: { math: 90, science: 85, history: 95 } },
// ]

// Average Scores:

// javascript

// { math: 75, science: 76.25, history: 72.5 }

// Top Scorer(s):

// javascript

// [{ name: 'David', scores: { math: 90, science: 85, history: 95 } }]

// Sorted Array:

// javascript

//     [
//         { name: 'David', scores: { math: 90, science: 85, history: 95 } },
//         { name: 'Charlie', scores: { math: 75, science: 90, history: 65 } },
//         { name: 'Alice', scores: { math: 80, science: 70, history: 85 } },
//         { name: 'Bob', scores: { math: 55, science: 60, history: 45 } },
//     ]

// KB
// how can i make scores into array
// ChatGPT

// You can convert the scores of each student into an array using the map method. Here's how you can do it:

// javascript

// const students = [
//     { name: 'Alice', scores: { math: 80, science: 70, history: 85 } },
//     { name: 'Bob', scores: { math: 55, science: 60, history: 45 } },
//     { name: 'Charlie', scores: { math: 75, science: 90, history: 65 } },
//     { name: 'David', scores: { math: 90, science: 85, history: 95 } },
// ];

// const scoresArray = students.map(student => {
//     return [student.scores.math, student.scores.science, student.scores.history];
// });

// console.log(scoresArray);

// This will output an array of arrays where each inner array contains the scores of a student in the order of Math, Science, and History:

// csharp

// [
//   [80, 70, 85],
//   [55, 60, 45],
//   [75, 90, 65],
//   [90, 85, 95]
// ]


// KB
// ChatGPT

// It looks like you're trying to split the scores of each student as strings into individual characters and then iterate over them. However, since students[i].scores is an object, you cannot use the split method directly on it. If you want to iterate over the scores of each student, you should access them directly as numbers. Here's the corrected code:

// javascript

// const students = [
//     { name: 'Alice', scores: { math: 80, science: 70, history: 85 } },
//     { name: 'Bob', scores: { math: 55, science: 60, history: 45 } },
//     { name: 'Charlie', scores: { math: 75, science: 90, history: 65 } },
//     { name: 'David', scores: { math: 90, science: 85, history: 95 } },
// ];

// for (let i = 0; i < students.length; i++) {
//     const scores = students[i].scores;
//     for (let key in scores) {
//         console.log(scores[key]);
//     }
// }

// This code will iterate over each student, then iterate over each subject (math, science, history) and log the score for each subject.
// KB
// const students = [
//     { name: 'Alice', scores: { math: 80, science: 70, history: 85 } },
//     { name: 'Bob', scores: { math: 55, science: 60, history: 45 } },
//     { name: 'Charlie', scores: { math: 75, science: 90, history: 65 } },
//     { name: 'David', scores: { math: 90, science: 85, history: 95 } },
// ];
// Filter out students who have scored less than 60 in any subject
// give me the easy and accurate code
// ChatGPT

// Here's an easy and accurate way to filter out students who have scored less than 60 in any subject:

// javascript

// const students = [
//     { name: 'Alice', scores: { math: 80, science: 70, history: 85 } },
//     { name: 'Bob', scores: { math: 55, science: 60, history: 45 } },
//     { name: 'Charlie', scores: { math: 75, science: 90, history: 65 } },
//     { name: 'David', scores: { math: 90, science: 85, history: 95 } },
// ];

// const filteredStudents = students.filter(student => {
//     return Object.values(student.scores).every(score => score >= 60);
// });

// console.log(filteredStudents);

// This code uses the filter method to iterate over each student and only keeps those who have scored 60 or more in all subjects. The every method is used to check if every score is greater than or equal to 60 for each student.
// KB


// const students = [
//     { name: 'Alice', scores: { math: 80, science: 70, history: 85 } },
//     { name: 'Bob', scores: { math: 55, science: 60, history: 45 } },
//     { name: 'Charlie', scores: { math: 75, science: 90, history: 65 } },
//     { name: 'David', scores: { math: 90, science: 85, history: 95 } },
// ];


// for (let i=0;i<students.length;i++){
//     if (students[i].scores.math <= 60){
//         const l= Object.create(students[i].scores)
//     };
//     if (students[i].scores.science <= 60){
//         const l= Object.create(students[i].scores)
//     }
//     if (students[i].scores.history <= 60){
//         const l= Object.create(students[i].scores)
//     }
// }

// console.log(l);
// correct it
// ChatGPT

// It looks like you're trying to create a new object l for students who have scored less than or equal to 60 in any subject. However, the variable l is being redeclared inside each if block, so it will only contain the last student who meets the condition. Here's a corrected version that uses an array to store all students who have scored less than or equal to 60 in any subject:

// javascript

// const students = [
//     { name: 'Alice', scores: { math: 80, science: 70, history: 85 } },
//     { name: 'Bob', scores: { math: 55, science: 60, history: 45 } },
//     { name: 'Charlie', scores: { math: 75, science: 90, history: 65 } },
//     { name: 'David', scores: { math: 90, science: 85, history: 95 } },
// ];

// let lowScorers = [];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].scores.math <= 60 || students[i].scores.science <= 60 || students[i].scores.history <= 60) {
//         lowScorers.push(Object.create(students[i].scores));
//     }
// }

// console.log(lowScorers);

// In this corrected version, lowScorers is an array that stores the scores of all students who have scored less than or equal to 60 in any subject.
// KB

// let lowScorers = [];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].scores.math >= 60 || students[i].scores.science >= 60 || students[i].scores.history >= 60) {
//         lowScorers.push(Object.create(students[i].scores));
//     }
// }

// console.log(lowScorers);  correct it 
// ChatGPT

// To correct the code so that it filters out students who have scored less than 60 in any subject, you should change the >= to <= in the if condition. Here's the corrected code:

// javascript

// let lowScorers = [];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].scores.math < 60 || students[i].scores.science < 60 || students[i].scores.history < 60) {
//         lowScorers.push(Object.create(students[i].scores));
//     }
// }

// console.log(lowScorers);

// This code will now correctly filter out students who have scored less than 60 in any subject and store their scores in the lowScorers array.
// KB
// Replying to:
// *   Filter out students who have scored less than 60 in any subject.

// let lowScorers = [];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].scores.math >= 60 || students[i].scores.science >= 60 || students[i].scores.history >= 60) {
//         lowScorers.push(Object.create(students[i].scores));
//     }
// }

// console.log(lowScorers);
// ChatGPT

// The code you provided is almost correct, but it filters out students who have scored greater than or equal to 60 in any subject. To filter out students who have scored less than 60 in any subject, you need to change the >= to < in the if condition. Here's the corrected code:

// javascript

// let lowScorers = [];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].scores.math < 60 || students[i].scores.science < 60 || students[i].scores.history < 60) {
//         lowScorers.push(Object.create(students[i].scores));
//     }
// }

// console.log(lowScorers);

// This code will now correctly filter out students who have scored less than 60 in any subject and store their scores in the lowScorers array.

// function sum(a,b){
//     console.log(a+b);
// }
// sum(2,4);

const re = require("prompt-sync")();
const input = re().split(",").map(Number)
newarr = input[0]
for (let i = 0; i < input.length; i++){
    if ( input[i] > newarr){
        newarr = input[i];
    }
}
console.log(newarr);
