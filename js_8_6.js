// // 1
// // for (let i = 1; i<=12; i++) {
// //     for (let j = 1; j <= 12; j++) {
// //     console.log(i, "x", j, "=", j*i);
// // }
// // }


// // 2
// // let max = 12;
// // let output = "";

// // for (let i = 1; i <= max; i++) {
// //   for (let j = 1; j <= max; j++) {
// //     output += `${j} × ${i} = ${j * i}  \t`;
// //   }
// //   output += "\n"; 
// // }

// // console.log(output);


// // 3
// let sumEven = 0;
// let sumOdd = 0;
// let sumMultiple3 = 0;
// let sumMultiple5 = 0;
// let sumPrime = 0;

// for (let i = 1; i <= 100; i++) {
//   // Even numbers
//   if (i % 2 === 0) sumEven += i;

//   // Odd numbers
//   if (i % 2 !== 0) sumOdd += i;

//   // Multiples of 3
//   if (i % 3 === 0) sumMultiple3 += i;

//   // Multiples of 5
//   if (i % 5 === 0) sumMultiple5 += i;

//   // Prime numbers (optimized check)
//   let count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) count++;
//   }
//   if (count === 2) sumPrime += i;
// }

// console.log("Sum of even numbers:", sumEven);
// console.log("Sum of odd numbers:", sumOdd);
// console.log("Sum of multiples of 3:", sumMultiple3);
// console.log("Sum of multiples of 5:", sumMultiple5);
// console.log("Sum of prime numbers:", sumPrime);

// // 4
// let a = 0;
// let b = 1;

// while (b <= 100) {
//   console.log(b);
//   let next = a + b;
//   a = b;
//   b = next;
// }
