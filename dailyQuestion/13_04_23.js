// Daily Question - 13/04/2023 - ข้อเดียวพอครับ แต่ตึงอยู่
// ---
// Lila is a bank teller who processes credit card applications. One day, she notices that some of the credit card numbers on the applications seem to be invalid. She decides to investigate and learns about the Luhn algorithm, a mathematical formula used to validate credit card numbers.
// Lila wants to automate the process of validating credit card numbers using the Luhn algorithm. Can you help her write a program that can perform the Luhn algorithm on credit card numbers?

// Luhn algorithm - Credit Card Validation
// The Luhn algorithm is used to validate credit card numbers. The algorithm takes a string as input and does the following to validate the credit card number:
    // - Ignore all spaces. Reject number with less than two digits.
    // - Moving from right to left, double every second digit: for the number 1234, we double 3 and 1.
    // - After doubling a digit, sum the digits. So doubling 7 becomes 14 which becomes 5.
    // - Sum all the undoubled and doubled digits.
    // - The credit card number is valid if the sum ends with 0.
// ---
// Valid case :white_check_mark:
// For example, Credit card number: 4263 9826 4026 9299. The Luhn algorithm would follow these steps:
    // 1. Remove any non-digit characters (like spaces): 4263982640269299
    // 2. Double every second digit, starting from the rightmost digit:
        // a. (4*2) 2 (6*2) 3 (9*2) 8 (2*2) 6 (4*2) 0 (2*2) 6 (9*2) 2 (9*2) 9
        // b. 8 2 12 3 18 8 4 6 8 0 4 6 18 2 18 9
    // 3. If the result of doubling a digit is a two-digit number, add the two digits together:
        // a. 8 2 1+2 3 1+8 8 4 6 8 0 4 6 1+8 2 1+8 9
        // b. 8 2 3 3 9 8 4 6 8 0 4 6 9 2 9 9
    // 4. Sum all the digits:
        // a. 8 + 2 + 3 + 3 + 9 + 8 + 4 + 6 + 8 + 0 + 4 + 6 + 9 + 2 + 9 + 9 = 80
    // 5. If the total modulo 10 is equal to 0 (i.e., the total ends in 0), then the number is valid according to the Luhn algorithm. In this case, 80 is divisible by 10 (80 % 10 = 0), so the given number (4263 9826 4026 9299) is valid according to the Luhn algorithm.
// ---
// Invalid case :x:
// For example, let’s say the credit card number is 8273 1232 7352 0569. The Luhn algorithm would follow these steps:
// 1. Remove any non-digit characters (like spaces): 8273123273520569
// 2. Double every second digit, starting from the rightmost digit:
    // a. (8*2) 2 (7*2) 3 (1*2) 2 (3*2) 2 (7*2) 3 (5*2) 2 (0*2) 5 (6*2) 9
    // b. 16 2 14 3 2 2 6 2 14 3 10 2 0 5 12 9
// 3. If the result of doubling a digit is a two-digit number, add the two digits together:
    // a. 1+6 2 1+4 3 2 2 6 2 1+4 3 1+0 2 0 5 1+2 9
    // b. 7 2 5 3 2 2 6 2 5 3 1 2 0 5 3 9
// 4. Sum all the digits:
    // a. 7 + 2 + 5 + 3 + 2 + 2 + 6 + 2 + 5 + 3 + 1 + 2 + 0 + 5 + 3 + 9 = 57
// 5. If the total modulo 10 is equal to 0 (i.e., the total ends in 0), then the number is valid according to the Luhn algorithm. In this case, 57 is not divisible by 10 (57 % 10 ≠ 0), so the given number (8273 1232 7352 0569) is not valid according to the Luhn algorithm.
// ---
// Tips of the day
// เมื่อวานคุยกับทัชใน 1:1 ไปเรื่อง Business Logic ทัชสงสัยว่าที่เขาเรียกกันมันคืออะไร
// What is Business Logic in Software Development?
// แล้วถ้ามาจากผมล่ะ? ผมจะบอกว่า Business Logic มันไม่ใช่คำสวยหรูอะไรเลย มันก็แค่โค้ด Logic ที่เราเขียน 

// ผมไม่เข้าใจตัวอย่างครับ ที่ว่า right to left ของ 1234 5678 9012 3456 ทำไมมันนับจาก 6 0 8 2 4 0 2 4 นับจากขวาสุดทุกสองตัวต้องเป็น 6 4 2 9 ... รึป่าวครับ หรือผมเข้าใจผิดรึป่าววว


// 19_Kittitat (Touch/ทัช)
//   8 days ago
// ตอนนี้ได้แล้วครับ เดี๋ยวส่งไปทางแชทครับบบบ


// GenMentor_Mart (มาร์ท)
// :man-bowing:  8 days ago
// @19_Kittitat (Touch/ทัช)
//  อ๋าาาา อันนี้ผมผิดเอง ถ้านับจากขวามาซ้ายต้องเป็น
// 1234 5678 9012 3456
// 1  3   5   7   9   1   3  5
// ผิดตัวแรกผิดยาวเลย (edited) 