// 38. Write a program to print 1 to 10 numbers using a while loop
// let i = 1
// while(i<=10){
//     console.log(i)
//     i++

// }



// 44. Write a program to print 1 to 100 numbers using a for loop

// for (let i=1; i<=100; i++)
//     {
//     console.log(i);
//     }

// 45. Write a program to print 100 to 1 number using a for loop

// for(let i= 100; i>=1; i--){
//     console.log(i)
// }


// 47. Write a program to print 15 to 10 numbers using for Loop


// for(let i=15; i>=10; i--){
//     console.log(i)
// }

// 48. Write a program to print 1 to 10 even numbers using a for loop

// for(let i=2; i<=10; i=i+2){
//     console.log(i)
// }  


// 50. Write a program to print 1 to 10 numbers using a do while loop


// let i = 1;

// do{
//     console.log(i)
//     i=i+1
// }
// while(i<=10);


// 56. Write a program first ten multiples of 4 using a while loop (4, 8, 12, 16…)


// let count = 1;
// let multiple = 4;

// while (count <= 10) {
//   console.log(multiple * count);
//   count++;
// }


// 58. Write a program Factors of 24 using while loop
// (Factors of 24 are 1, ,3, 4, 6, 12, 24)


// for(i=1;i<=24;i=i+i){

//     if(24%i===0){
//         console.log(i)
//     }
// }

// 59. Write a program to print reverse of digits of numbers

// let numbers=[1,2,3,4,5]

// let reversednumbers=[]

// for (let number of numbers.reverse()){

//     reversednumbers.push(number)

// }

// console.log(reversednumbers);



// or 

// let numbers=[1,2,3,4,5]

// let revnumbers = numbers.reverse()

// console.log(revnumbers)




// 59. Write a program to print reverse of digits of numbers

// let number = 12345; // Example number
// let reverse = 0;

// while (number != 0) {
//   let digit = number % 10;
//   reverse = reverse * 10 + digit;
//   number = Math.floor(number / 10);
// }
// console.log(reverse);



// 60. Write a program to read 5 numbers and print only the even numbers

// let number = [1,2,3,4,5]

// for (let evenum of number){
//     if(evenum%2==0){
//         console.log(evenum)
//     }
// }

// 61. Write a program to print the Fibonacci number series up to a given number.
// Expected out 17 -: 0 1 1 2 3 5 8 13



// 62. Write a program to check if a given number is an Armstrong number or not.


// let number = 153

// let numbersplit = number.toString().split('');

// let numberpow = numbersplit.length

// let sum = 0

// for (let amgnum of numbersplit ){

//     sum = sum + Math.pow(parseInt(amgnum), numberpow)

// }

// if (sum == number){

//     console.log(`${number} is a Armstrong number`)
// }
// else{

//     console.log(`${number} is not a Armstrong number`)

// }




// 73. Can you write a function that takes an array and returns a new array with only the
// unique elements?


// let arr=[1,2,3,4,5,6,3,4,5,8,9,10,24,23,45,9,7,6];

// let uniquearr=[];

// function newarray(){

//     uniquearr= new Set(arr)
    
//     console.log(uniquearr)

// }

// newarray();



// 74. Can you write a function that takes an array and returns the sum of all the elements?


// let arr=[1,2,3,4,5]
// let sum= 0

// function suming(){

//     for(let sums of arr){

//         sum= sum+ sums
//     }

//     console.log(sum)

// }

// suming();

// 75. Can you write a function that takes an array and returns the index of the first
// occurrence of a given value?

// let arr=[1,2,3,4,5]

// let uservalue=3;

// function indexreturns(){

//    indexreturnedvalue = arr[uservalue-1]

//    return indexreturnedvalue;
// }

// console.log(indexreturns());

// swap two numbers without extra variable?


// let a=10;
// let b =20;


// [a,b]= [b,a]

// console.log(a,b);


// How to verify given object is empty or not?

// let obj={a:10,b:'Ron',c:7}

// if(Object.keys(obj).length == 0){
//     console.log("The object is empty")
// } 

// else{
//     console.log("The object is not empty")
// }

// how to verify given array is empty or not?
// let obj=[10,120,234,39]

// if(obj.length == 0){
//     console.log("The array is empty")
// } 

// else{
//     console.log("The array is not empty")
// }



// 74. Can you write a function that takes an array and returns the sum of all the elements?

// let arr=[1,2,3,4,5]

// function sumofarr(){

//     let sum=0;
//     for (let add of arr){
//         sum= sum+add
//     }
//     console.log(sum)
// }

// sumofarr();


// 93. How to Access Items from Arrays in JavaScript

// let arr =[1,2,3,4,5]
// console.log(arr[1])

// or 

// for( array of arr ){

//     console.log(array)

// }

// 94. How to Access the Last Item from an Array in JavaScript.

// let arr =[1,2,3,4,5]

// console.log(arr.pop());
// or
// console.log(arr[arr.length-1]);

// 95. How to Access All Items from Array Using for Loop in JavaScript
//  let array =[1,23,34,5,66,7]
// for(let i=0; i<=array.length-1;i++){
//     console.log(i)
// }

// 96. How to Create Array of Objects in JavaScript

// let arrobj = [{name:"db",age:21,gender:"male"},{name:"ra",age:21,gender:"female"},{name:"kk",age:21,gender:"female"}]

// for( let ao of arrobj ){

//     console.log(ao)

// }

// or

// console.log(arrobj[0].name)
// console.log(arrobj[1].name)
// console.log(arrobj[2].name)


// 98 . How to Create 2D Array in JavaScript

// let D2array= [

//     [1,2,3,4],
//     [7,7,8,9,5],
//     [6,3,5,66,45,7,29]

// ]

// console.log(D2array[1])
// used to get Element inside Array of Array
// console.log(D2array[2][1])


// 99. Simple Program to Sum of 2D Array in JavaScript

// let D2array= [
//     [1,2,3,4],
//     [7,7,8,9,5],
//     [6,3,5,66,45,7,29]
// ]
// let sum=0;
// for ( let d2a of D2array ){
//     for(let add of d2a ){
//         sum=sum+add;
//     }
// }
// console.log(sum)

// 101. JavaScript Array Push Method

// let arr=[1,2,3,4,5,6,8,9,10]

// arr.push(6);

// console.log(arr)



// 105. JavaScript Array Splice Method Explanation


// let myArray = [1, 2, 3, 5];
// myArray.splice(3, 0, 4); // Syntax: array.splice(index, howManyToRemove, item1, item2, ...)
// console.log(myArray); // Output: [1, 2, 3, 4, 5]



// let arr=[1,2,3,4,6,7,8,9]

// arr.splice(4,0,5)

// console.log(arr)












