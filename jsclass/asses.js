//  Frappie Assesment 2

// 1. Write a JavaScript program to list the properties of a JavaScript object.

/*
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
const keys = Object.keys(student);
console.log(keys);
                */ 

// 2. Write a JavaScript program to delete the rollno property from the following 
// object. Also print the object before or after deleting the property.

/*
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
const A = delete student['rollno']
console.log(student);
*/

// 3. Write a JavaScript program to get the length of a JavaScript object.

/*
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12,
    school : 'high school'
};
    const A = Object.keys(student).length;
console.log(A);
*/

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) 
// of the following books.
/*
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   console.log(library);
   */

// 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.



// 6. Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]


// 7. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]



// 9. Write a JavaScript program to calculate circle area and perimeter.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

/*
const input = require("prompt-sync")();
const radius = input()
const area = Math.PI * Math.pow(radius, 2);
const perimeter = 2 * Math.PI * radius;
console.log('area of the circle is:-',area);
console.log('perimeter of the circle is:-', perimeter);
*/

// 10. Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :

// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];
// Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]


// 11. Write a JavaScript function to print all the methods in a JavaScript object.
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]



// 12. Write a JavaScript function to parse an URL.

// 13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.



// 14. Write a JavaScript function to retrieve all the values of an object's properties.



// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.



// 16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.



// 17. Write a JavaScript function to check whether an object contains a given property.



// 18. Write a JavaScript function to check whether a given value is a DOM element.
