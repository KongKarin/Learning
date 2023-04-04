// Daily Question - 04/04/2023
// 1. Given an integer array, write a program to:
//      - find the sum of all numbers in the array.
//      - find the average of all numbers in the array.
//      - find the median of the array.
//          *Hint - Array need to be sorted first
// 2. Given a positive integer n, write a program to find its factorial, denoted by n!. The factorial of a number is the product of all positive integers from 1 to n.  
//    For example, if n = 5, then 5! = 5 x 4 x 3 x 2 x 1 = 120. Write a program that takes an integer n as input and outputs its factorial.


// part1
//1) set arry of numbers 
        // * create sort array functions
//2) find sum of all numbers
//3) find average of all numbers (take sum divided by n of numbers)
//4) find median

const nums = [1, 5, 7, 9, 10, 13]

// sum
let sum = 0;

nums.forEach( i => {
    sum += i;
});
console.log(sum);

// avrage
let avr = sum / nums.length;
console.log(Math.floor(avr)); 
// console.log(avr);

// median
function median(values){
    if(values.length ===0) throw new Error("No inputs");
  
    values.sort(function(a,b){
      return a-b;
    });
  
    let half = Math.floor(values.length / 2);
    
    if (values.length % 2)
      return values[half];
    
    return (values[half - 1] + values[half]) / 2.0;
  }
console.log(median(nums));


// part 2
// from part 1: const nums = [1, 5, 7, 9, 10, 13];

// 1)create factorial function:
function factorialize(num) { 
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

// 2) update the factorial of each index in the array
const arr = nums;
const newArray = arr.map((element) => {
  return factorialize(element);
});

console.log(newArray); 



