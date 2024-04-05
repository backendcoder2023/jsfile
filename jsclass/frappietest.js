
// 1.Convert 24-hour time to 12-hour format with AM/PM

// const input = require("prompt-sync")();
// const timeString = input();
// const [hour, minute] = timeString.split(':').map(Number);

// if (hour > 12) {
//     console.log(hour - 12 + ':' + minute + ' PM');
// } else if (hour === 0) {
//     console.log('12:' + minute + ' AM');
// } else if (hour === 12) {
//     console.log('12:' + minute + ' PM');
// } else if (hour < 12) {
//     console.log(hour + ':' + minute + ' AM');
// } else {
//     console.log("Invalid time format");
// }

// 2. Generate and print the first n rows of Pascal’s triangle using nested loops.

// const input = require("prompt-sync")();
// const n = input()
// for (let i = 0; i < n; i++) {
//     let row = '';
//     let number = 1;
//     for (let j = 0; j <= i; j++) {
//         row += number + ' ';
//         number = number * (i - j) / (j + 1);
//     }
//     console.log(row);
// }

// 3. Given two matrices, write a program to multiply them using nested loops.

// const input = require("prompt-sync")();
// const A = input().split(",").map(Number);
// const B = input().split(",").map(Number);
// if (A.length !== B.length) {
//     console.log("same");
// } else {
//     const size = A.length;
//     let P = 0;
//     for (let i = 0; i < size; i++) {
//         for (let j = 0; j < size; j++) {
//             P += A[i] * B[j];
//         }
//     }
//     console.log(P);
// }


// 4. Write a function that takes two dictionaries and returns a new Object
// containing only the common keys and their corresponding values.



// 5. Write a JavaScript function that takes an object as an argument, sorts its values in
// ascending order, and returns a new object with the sorted values.

// function sort_obj(
//      inputObject = {
//         A: 30,
//         B: 10,
//         C: 20
//         },
// ) {
//     const key =  Object.values(inputObject)
//     console.log(key);
// };
// sort_obj()


// 6. Write a function that removes duplicate elements from an array of strings.
// Use any of the higher order function (map,reduce,filter)

/*
const input = require("prompt-sync")();
const prompt = input().split(' ');
const Fruit = prompt.filter((item, index) => {
    return prompt.indexOf(item) === index;
});
console.log(Fruit);
*/

// 7. Write a function that takes an array of nested arrays and returns a
// flattened array (with no nested arrays).

// const input = require("prompt-sync")();
// const prompt = input().split(',')
// console.log(prompt);

// 8.Remove Falsy Values:
// Create a function that filters out falsy values (such as false, null, 0, "",
// undefined, and NaN) from an array.

/*
const inputArray = [1, null, 2, "", 3, undefined, 0, "XYZ"];
const i = [null, "", undefined, NaN]; 
const output2 = inputArray.filter((item) => !i.includes(item));
console.log(output2);
*/

