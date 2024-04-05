// const p = {
    //   fname : 'dhanu',
    //   lname : 'nimbh',
    //   get func () {
    //     return `${p.fname} ${p.lname}`
    //   },
    //   set func (value) {
    //     const parts = value.split(',');
    //     this.fname = parts[0];
    //     this.lname = parts[1];
    //   }
    // };
    // p.func = 'krutika ,tatte';
    // console.log(p);
    
    
    
    // const A = {
    //   fname : 'megha',
    //   lname : 'sarve',
    //   fun () {
    //     return `${A.fname} ${A.lname}`
    //   }
    // };
    // A.fname = "kruti"
    // A.lname = "tatte"
    // console.log(A);
    
// function sunday() {
//     return function() {
//         console.log("Our sunday is being waste :( ");
//     }
// }
// const l = sunday();
// function abc(stop){
//     stop();
// }
// abc(l);


// const arr = [5, 1, 3, 2, 6];
// function binary(X){
//     return X.toString(2);
// }
// const output = arr.map(binary);
// console.log(output);

// const output1 = arr.map((x) => x.toString(2));
// console.log(output1);

// const output2 = arr.filter((x) => x > 4);

// console.log(output2);



// const arr = [1, 2, 3, 4, 5]
// const sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


// const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((acc, curr) => {
//     acc.sum += curr;
//     acc.product *= curr;
//     return acc;
// }, { sum: 0, product: 1 });
// console.log(result.sum);
// console.log(result.product);


// const obj = {
//     maths: 50,
//     english: 80,
//     marathi: 90,
//     hindi: 100,
// };
// const values = Object.values(obj);
// const result = values.reduce((acc, curr) => {
//     acc.sum += curr;
//     acc.product *= curr;
//     return acc;
// }, { sum: 0, product: 1 });
// console.log(result.sum);
// console.log(result.product);
