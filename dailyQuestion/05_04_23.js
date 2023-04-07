// Daily Question - 05/04/2023
// 1. Write a program that reverses the order of the elements. without Array.reverse() e.g. arr.reverse()
//      a. The array of number
//      b. String. For example, if the input is “hello”, the output should be “olleh”.
// 2. Given two strings, write a program to check if they are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase, 
// such as “listen” and “silent”. Your program should return True if the two strings are anagrams and False otherwise. 
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 
// For example, “listen” and “silent” are anagrams of each other.
// 3. Given a string, write a program that checks if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that 
// reads the same forward and backward. 
// For example, “racecar” is a palindrome, while “hello” is not. The program should return True if the string is a palindrome and False if it is not.


//part 1 
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = ['h', 'e', 'l', 'l', 'o'];

//used .sort method to sort
arr1.sort((a, b) => b - a);
arr2.sort((a, b) => 0 - 1);


console.log(arr1);     
console.log(arr2);

// console.log(typeof arr1[0]);     
// console.log(typeof arr2[1]);

// console.log(typeof arr1);     
// console.log(typeof arr2);


//part 2 
const arr3 = ['l', 'i', 's', 't', 'e', 'n'];
const arr4 = ['s', 'i', 'l', 'e', 'n', 't'];

//rearrange the array
function reArr(arr){
  return arr.sort((a,b) => a - b);
}
 //call function
reArr(arr3);
reArr(arr4);

// compare the array
function compare(arr3, arr4){
if (arr3 === arr4) {
  return true;
} else {
  return false;
}
}

console.log(compare(arr3, arr4)); // result is false


// Ask ChatGPT
// function compareArrays(arr3, arr4) {
//   const sortedArr1 = arr3.slice().sort().reverse();
//   const sortedArr2 = arr4.slice().sort().reverse();
//   return sortedArr1.length === sortedArr2.length && sortedArr1.every((value, index) => value === sortedArr2[index]);
// }

// console.log(compareArrays(arr3, arr4)); // output: true




// part 3
// ตรวจสอบ value ใน string หาค่าที่ไม่มีคู่(ไม่ซ้ำ) 
// ถ้าเจอ 1 ตัว ให้ return true
// ถ้าเจอ 2 ตัว ให้ return false
// ถ้าไม่เจอให้ return true 

const arr5 = ['d', 'a', 'd', 'a', 'w', 'w', 's'];

function checkPalinDrome(arr) {

}

// ask ChatGPT






