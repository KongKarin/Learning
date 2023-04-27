// 1. You are given an array of integers. Write a program that finds the largest number in the array and returns it. 
// The program should take the array as an input and output the largest number. For example, if the array is [4, 6, 8, 2, 10], 
// the program should output 10 as it is the largest number in the array. Make sure your program works for arrays of any size and contains only positive integers.
// 2. Continuing from the previous question, now you need to find the second-largest number in the same array.
// 3. You are given an array of integers. Write a program that checks if the array is sorted in non-decreasing order, 
// which means that each element in the array is greater than or equal to the previous element. Your program should return true if the array is sorted and false otherwise.


//My best
//Part 1 
const num = [4, 6, 8, 2, 10];
const maxIndex = num.indexOf(Math.max(...num));

console.log(Math.max(...num));


// //Ask chatGPT

// // Part 1: Find the largest number in the array
// function findLargestNumber(arr) {
//     let largestNumber = arr[0]; // Assume the first element is the largest number
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largestNumber) {
//         largestNumber = arr[i]; // Update largestNumber if a larger number is found
//       }
//     }
//     return largestNumber;
//   }
  
//   // Example usage
//   const numbers = [4, 6, 8, 2, 10];
//   const largestNumber = findLargestNumber(numbers);
//   console.log('GPT ' + largestNumber); // Output: 10
  
//   // Part 2: Find the second-largest number in the same array
//   function findSecondLargestNumber(arr) {
//     let largestNumber = arr[0];
//     let secondLargestNumber = null;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largestNumber) {
//         secondLargestNumber = largestNumber; // Update secondLargestNumber if a new largest number is found
//         largestNumber = arr[i]; // Update largestNumber to the new largest number
//       } else if (arr[i] < largestNumber && (secondLargestNumber === null || arr[i] > secondLargestNumber)) {
//         secondLargestNumber = arr[i]; // Update secondLargestNumber if a number is smaller than largestNumber but larger than the current secondLargestNumber
//       }
//     }
//     return secondLargestNumber;
//   }
  
//   // Example usage
//   // const numbers = [4, 6, 8, 2, 10];
//   const secondLargestNumber = findSecondLargestNumber(numbers);
//   console.log('GPT ' + secondLargestNumber); // Output: 8
  

//   // Part 3: Sort the array
//   function sortArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//           let temp = arr[i]; // Swap the two elements
//           arr[i] = arr[j];
//           arr[j] = temp;
//         }
//       }
//     }
//     return arr;
//   }
//   // Example usage
//   console.log(sortArray(numbers)); // Output: [2, 4, 6, 8, 10]

//   //Check if the array is sorted by Non-Decreasing condition
//   function isNonDecreasing(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < arr[i-1]) {
//         return false; // If any element is less than the previous element, return false
//       }
//     }
//     return true; // If all elements are greater than or equal to the previous element, return true
//   }
  
//   // Example usage
//   console.log(isNonDecreasing(numbers)); 


