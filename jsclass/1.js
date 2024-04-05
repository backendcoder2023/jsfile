// let api="https://www.youtube.com/watch?v=gSDncyuGw0s&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP"
// let A = fetch(api)
// console.log(A);

// const PromptSync = require("prompt-sync");
// var userInput = prompt("Enter elements for the list, separated by commas:");
// var userList = userInput.split(",");
// userList = userList.map(function(item) {
//     return item.trim();
// });
// console.log("User list:", userList)

// function last_digit(num){
//     // write your code here
//      a = list[num]
//     // return the answer
//   }
  
//   exports.last_digit = last_digit;

// let arr = ["I", " love", "my firends"];
// let a = arr.slice(3,5,'i', 'hate', 'myself');
// console.log(a);

// let arr = [1,2,3,4,5]
// arr.forEach(function(elements,index)){
//     console.log(index,elements);
// };

// const matrix = [[1,2,3],[4,5,6],[8,9,1]];

// for(let row of matrix){
//     console.log(rowString);
// }

// let A = window.prompt("what's your name ? ")
// const prompt = require("prompt-sync")();
// let A = prompt("what's your name ? ");
// let B = A.split(" ");
// console.log(Number(B))


// const prompt = require("prompt-sync")();
// let q = prompt("enter your no ");
// for(let i = 0; i<=q; i++)
// {
//     a[i]
// }
// for(let i =0; i <=a; i++)
// {
//     console.log(a[i]);
// }


// const readlineSync = require("readline-sync"); // Correct import statement
// let a = readlineSync.question("Enter a string: ");
// const p = a.length; // Use const for p

// if (p >=10) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

// const k = require("readline-sync");
// let o = k.question("Enter string: ");
// let p = "aeiouAEIOU";
// let c = 0;

// for (let i = 0; i < o.length; i++) {
//     if (p.includes(o[i])) {
//         c++;
//     }
// }
// console.log(c);

// const k = require("readline-sync");
// let p=k.question("enter string");
// let t= "";
// for (let i = 0; i < p.length; i++) {
//     let char =p[i];
//     if (char === char.toUpperCase()) {
//         t += char.toLowerCase();
//     } else if (char === char.toLowerCase()) {
//         t += char.toUpperCase();
//     } else {
//         t+= char;
//     }
// }
// console.log(t);
// const h=require("readline-sync");
// let r=h.question("enter sting: ");
// let y=h.question("enter occu");
// let result = "";

// for (let i = 0; i < r.length; i++) {
//     if (r[i] !== y) {
//         result += r[i];
//     }
// }
// console.log(result);   

// const readlineSync = require("readline-sync");
// let str = readlineSync.question("Enter string: ");
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "e") {
//         count++;
//     }
// }
// console.log(count); 

// const prompt = require("prompt-sync")();
// let r = prompt("enter string: ");
// p=r.length
// console.log(r.slice(-4));

// const prompt = require("prompt-sync")();
// let r = prompt("enter string: ");
// r =r.trim()
// console.log(r)  

// const prompt = require("prompt-sync")();
// let r = prompt("Enter string: ");
// let f = r.split(' ').join('');
// console.log(f); 

// const prompt=require("prompt-sync")()
// let u= prompt("enter sting");
// const startIndex =prompt("enter starindex here");
// const endIndex = prompt("enter the endindex here");

// const result = u.substring(startIndex, endIndex + 1);
// console.log(result); 

// const prompt=require("prompt-sync")()
// let r=prompt("enter first string" );
// let y=prompt("enter second string here");
// console.log(r+y); 

// const r=require("readline-sync");
// let f=r.questionInt("enter first number here");
// let u=r.questionInt("enter second number here");
// let sum=f+u;
// console.log(sum); 

// const readlineSync = require("readline-sync");
// let inputString = readlineSync.question("Enter string: ");
// let outputList = [];

// for (let char of inputString) {
//     outputList.push(char);
// }
// console.log(outputList);
// ["dhanu", "kruti", "megha","koko"].forEach(alert);                                
// let arr = [1,2,15];
// arr.sort();
// // alert(arr);
// console.log(arr);

// function C(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// console.log(C(9, 10));

// let name = 'dhanu,kruti,megha';
// let arr = name.split(',');
// console.log(arr);

// const prompt=require("prompt-sync")()
// let A = parseInt(prompt())
// let B = prompt()
// let C = parseInt(prompt())
// console.log(A);
// console.log(B);
// console.log(C);

// const prompt=require("prompt-sync")()
// let A = prompt()
// console.log(A);

// const prompt = require("prompt-sync")();
// let A = prompt();
// let B = prompt();
// [A, B] = [B, A];
// console.log(A);
// console.log(B);

// const prompt = require("prompt-sync")();
// let A = parseInt(prompt());
// let B = parseInt(prompt());
// let P = A+B
// let Q = A % B
// let R = A / B
// let S = A - B
// console.log(P,Q,R,S);

// const prompt = require("prompt-sync")();
// let A = parseInt(prompt());
// let B = parseInt(prompt());
// let P = A % B
// console.log(P); 

// const prompt = require("prompt-sync")();
// const A = parseInt(prompt("Enter the value of A: "));
// const B = parseInt(prompt("Enter the value of B: "));
// let result = -1;
// for (let i = A - 1; i > 0; i--) {
//     if (i % B === 0) {
//         result = i;
//         break;
//     }
// }
// if (result !== -1) {
//     console.log(`The largest number less than ${A} that can be evenly divided by ${B} is: ${result}`);
// } else {
//     console.log(`There is no number less than ${A} that can be evenly divided by ${B}`);
// }

// const prompt = require("prompt-sync")();
// let A = parseInt(prompt());
// if(A % 2 == 0){
//     console.log('even');
// }
// else{
//     console.log('odd');
// }

// const prompt = require("prompt-sync")();
// const input = prompt();
// const numbers = input.split(" ");
// const parsedNumbers = numbers.map(Number);
// console.log(parsedNumbers);

// const B = [1, 1, 2, 2, 3, 3];
// const a = new Set(B);
// console.log(a);

// const obj = {
//     abc: {
//         k:10
//     }
//   };
//   console.log(obj.abc.k)

// const R = require("readline-sync")
// key = R.question()
// value = R.question()
// Object.key = value
// console.log(Object);

// const  a = require("readline-sync")
// name = a.question()
// email = a.question()
// note = a.questionInt()
// password = a.question()
// value = a.question()
// Object.name = name
// Object.email = email
// Object.note = note
// Object.password = password
// console.log(Object);
// var string = "KruKtiASDF"
// let swapped = '';
// for (let i = 0; i < string.length; i++) {
//     let char = string.charAt(i);
//     if (char === char.toUpperCase()) {
//     swapped += char.toLowerCase();
//     } else {
//     swapped += char.toUpperCase();
//     }
// }
// console.log(swapped);

// let user = {
//     name: "dhanu",
//     age: 30,
//     "first name": "nav gurukul"
// }

// if (!(age in user)){
//     console.log("yes");
// }else{
//     console.log("no");
// }
// delete user["first name"]
// user["first name"] = user["first name"].slice(0,3);
// console.log(user);
// console.log(user["first name"]);

// let arr = [];
// let arr1 = [];
// for(let i = 0; i<5; i++){
//     let input = prompt("enter number:")
//     arr[i] = input;
    // arr[i] = input;
// }
// console.log(arr);
// console.log(arr1);

// let data = new Set([1,2,3,4,5,6,7,8,9,5,4,3])
// // data.forEach(item =>{
// //     console.log(item*10);
// // })
// data.add("dhanu")
// console.log(data);

// let a = {
//     fname : 'yahoo',
//     lname : 'Baba',
//     age : 21,
//     email : 'dhanu@navgurukul.org'
// }
// console.log(a); 

// console.log(typeof(a));
// let a = '10'
// let b = 9
// let c = a + b
// console.log(c);

// let cal = {
//     des : "this is cal",
//     sum(a,b){
//         return a +b;
//     },
//     sub(a,b){
//         return a-b;
//     },
// }
// let result = cal.sub(2,5)
// console.log(result); 

// "use strict"

// function sayHi(){
//     console.log(this);
// }
// sayHi();

// function User(id,name,age,role,email){
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.role = role;
//     this.email = email;
// }

// let user1 = new User(1,'dhanu', 21, 'admin', 'dhanu@gmail');
// console.log(user1);


// let user = {
//     first : "dhanu",
//     last : " kruti",
//     age : 24,
//     gendar :"female",
//     date : new Date()
// }

// let result = JSON.stringify(user, 2);
// console.log(result);
// console.log(typeof result);
// console.log(user);


// function average_salary(sal1, sal2, sal3, sal4, sal5) {
//     let result =  (sal1 + sal2 + sal3 + sal4 + sal5) / 5;
//     if(result > 50000){
//       return "yes";
//     }else{
//       return "no";
//     }
//   }
//   sal1 = 10000, sal2 = 20000, sal3 = 30000, sal4 = 50000, sal5 = 40000

// console.log(average_salary(sal1, sal2, sal3, sal4, sal5));


// let carCompany = "BMW";
// let modelyear = "2024";

// let user = {
//     name : 'john',
//     age : 90,
//     "first name" : "nav gurukul",
//     [carCompany + modelyear] : "Random value"//computed properties
// }
// user["first name"] = user["first name"].slice(0,3);
// console.log(user);

// let name = "dhanu"
// let age = "21";
// let user1 = {
//     name,  //shorthand
//     age,
//     last : "yes"
// }
// if("last" in user1){
//     console.log("exist");
// }else{
//     console.log("not exist");
// }

// for (let i in user1){
//     console.log(user1[i]);
// }
// console.log("last" in user1);

// let name = "nigam";
// let age = "19";

// let obj = {
//     name,
//     age,
//     kiran : {
//         name,
//         age,
//         dhanu : {
//             name,
//             age,
//         }
//     }
// }
//  obj.hkj=67
//  let newobj = {...obj}  //clonig
//  newobj.hkj=67
//  console.log(newobj);
// let newobj = structuredClone(obj);
// newobj.kiran.name = "komal"
// console.log(obj);
// console.log(newobj);
// // console.log(a,b);
// l = {as:23}

// // let b = {...obj}
// obj = Object.assign({...l},obj)
// // b.jkh = 12
// // console.log(c)
// console.log(l);
// console.log(obj);

// const numbers = [1, 2, 3, 4, 5, 6];
// let l = [...numbers]
// console.log(l);
// const [one, two, ...nmbnm] = numbers;
// console.log(...numbers);

let obj = {
    month : "short",
    day : "2-digit",
    year : "numeric",
}
const currentDate = new Date();
const formattedDate = {
    month: currentDate.toLocaleDateString('en-US', { month: obj.month }),
    day: currentDate.toLocaleDateString('en-US', { day: obj.day }),
    year: currentDate.toLocaleDateString('en-US', { year: obj.year })
};
console.log(formattedDate);

