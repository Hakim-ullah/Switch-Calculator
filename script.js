//    TASK  1 USING CONSOLE  //  
//  Create a function that greets the user using their name.  //
// function greet(personaluser) {
//     if (personaluser == `Hakim ullah`) {
//         return `How are you ${personaluser} my loyal user `
//     } else {
//         return `Hello '${personaluser}' i think you are my new user`
//     }
// }
// console.log(greet(`Hakim ullah`));
//    TASK  1  // 





// TASK 1 USING ALERT //
//  Create a function that greets the user using their name. //
// function greeting()  {
//       let userName = prompt(`Enter your name`)
// alert (`Hi ${userName} how are you doing today`)
// }
// greeting()
// TASK 1 USING ALERT //





//   TASK  2  //
// Write a function to add two numbers and display the result  //
// function Addition(num1,num2) {
//     let num = ( num1 + num2);
//     return num
// }
// console.log ( Addition(10,15) );
//   TASK  2  //




//  TASK 3 //
//  Create a function to calculate and return the area of rectengular. // 
// function Multiplication(width,height){
//     let formula = (width * height);
//     return formula
// }
// console.log( Multiplication(20,40)) ;
//  TASK 3 //




//  TASK 4 //
//  Write a function to check whether the number is even or odd. //
// function checking(num){
//     if ( num % 2 == 0 ) {
//       return `The number ${num} is Even `         
//     } else{ 
//       return `The number ${num} is Odd `       
//     }   
// }   
//      console.log(checking(12));
// console.log(checking(11));
//  TASK 4 //



//  TASK 5 //
// Build a simple calculator function that takes two numbers and an operator (+, -, , /). //
// function checking(num1,operator,num2){
//   if (operator == `+`) {
//              return num1+num2
//   } 
//    else if (operator == `-`) {
//     return num1-num2
//   }  
//   else if (operator == `*`){
//     return num1*num2
//   } 
//    else if (operator == `/`){
//     return num1/num2
//   }
//    else{
//     return `Invalid operators Supported operators are +, -, *, /, Check your operator again`
//   }
// } 
// console.log(checking(250,`+`,10));
//   TASK 5 //




//   TASK 6 //
// Make a function to convert temperature from Celsius to Fahrenheit. //
// function celsius(value){
//   return value*9/5+32
// }
// console.log(celsius(12));
//   TASK 6 //




//   MY EXTRA WORK //
// Make a function to convert temperature from Fahrenheit to Celsuis. //
// function Fahrenheit(value){
//   return (value-32)*5/9 
// } 
// console.log(Fahrenheit(53.6));
//   MY EXTRA WORK //




//   TASK 7 //
// Write a function to check if a number is positive, negative, or zero. //
// function checking(value){
// if (value > 0 ) {
//   return `The number ${value} is Positive`
// } else if (value < 0){
//   return `The number ${value} is Negative`
// } else {
//   return `The number ${value} is ZERO`
// } }
//   console.log(checking(-10));
//   TASK 7 //



//   TASK 8 //
// Create a function that prints the multiplication table of a given number (1 to 10) //
// function multiplicationTable (vaule){
//   for(let i = 1; i <=10; i++)
//   console.log(`${vaule} * ${i} = ${vaule * i} `);  
// } 
// console.log(multiplicationTable(5));
//   TASK 8 //




// MY EXTRA WORK //
// let x = 5;
// for (let i = 1; i<=10; i++){
//   console.log( `${x} * ${i} = ${x * i} `);
//   }
// MY EXTRA WORK //





//  TASK 9  // 
// Make a function to reverse a given string. //
// function reverseString(value){
//   return value.split(``).reverse().join("")
// }
// console.log(reverseString("30"));
//  TASK 9  // 






//  TASK 10 // 
// Write a function to find and return the largest among three numbers.//
// function find(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return `${num1} is the largest`
//     } else if (num2 > num1 && num2 > num3) {
//         return `${num2} is the largest`
//     } else if (num3 > num2 && num3 > num1) {
//         return `${num3} is the largest`
//     } else {
//         return `the numbers should be different from each other`
//     }
// }
// console.log(find(360, 550, 770));
//  TASK 10 //







//  MY EXTRA WORK //
// function findLargest(){
// let num1 = parseFloat( prompt(`Enter first number`) )
// let num2 = parseFloat( prompt(`Enter second number`) )
// let num3 = parseFloat( prompt(`Enetr third number`) )
// let largest = Math.max(num1,num2,num3)
// alert(`The largest number is ${largest}`)
// }
// findLargest()
//  MY EXTRA WORK //




// SECOND METHOD   //
// function findLargest() {
//     let num1 = parseFloat(prompt(`Enter first number`));
//     let num2 = parseFloat(prompt(`Enter second number`));
//     let num3 = parseFloat(prompt(`Enetr third number`));
//     let largest = Math.max(num1,num2,num3 );
//     if (largest === num1) {
//         alert(`The first prompt ${num1} is the largest`)
//     } else if (largest === num2) {
//         alert(`The second prompt ${num2} is the largest `)
//     } else {
//         alert(`The third prompt ${num3} is the largest `)
//     }
// }
      // findLargest()
// SECOND METHOD   //





      // THIRD METHOD  //
//       function findLargest() {
//    let numbers = prompt(`Enter three number seperated by spaces (e.g. 1 2 3 )`)
//    let numArray = numbers.split("")
//    let largest = Math.max(... numArray);
//    let index = numArray.indexOf(largest)
//    alert(` The ${index + 1} is the largest number (${largest}) `)
//       }
//       findLargest()
// THIRD METHOD  //




//  MY EXTRA WORK // 
// let numbers = [1,23,4,6,7,9,]
// let largest = Math.max(...numbers)
// console.log(`${largest} is the largest number in Array`)
//  MY EXTRA WORK // 


