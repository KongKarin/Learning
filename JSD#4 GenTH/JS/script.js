// document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
function Hello() {
  alert("Helllo, World!");
//   document.getElementsById("text")
document.getElementById("text").innerHTML = "The button has been clicked";
  console.log("The button han been clicked");
}

// forEach 
const letters = ['a','b','c', 'd', 'a', 'c', 'a'];
let count = {}; //create empty object to keep track the count
letters.forEach(item =>{
    if (count[item]){ //check if we have an letter in
        count[item]++;
    }else{
        count[item] = 1;
    }
});
console.log(count);

// .map 
// const storeUSD = [5, 6, 7, 8];
​
// const storeEUR = storeUSD.map(value => value*=0.85);
​
// console.log(storeUSD);
// console.log(storeEUR);
​
​
​
let storeUSD = [5, 6, 7, 8];
​
function toEuros(value){
    value *= 0.85;
    return value;
}
​

// .filter 
let storeEUR = storeUSD.map(toEuros);
console.log(storeUSD);
console.log(storeEUR);

// const numbers =['apple','banana','orange','pineapple'];
// //filter only positive numbers
// const filtered = numbers.filter(n => n !== 'apple');    //if it match with this then add to new array
// console.log(filtered);
​
randomNumbers = [375, 200, 3.14, 7, 13, 852];
​
// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
    return num < 250;
  });
  console.log(smallNumbers);



  // reduce 
  //like sum -- can because for sum in your shopping basket
​
const numbers = [1, 2, 3, 4, 5];
//a=1, c=2 => 3
//a=3, c=3 => 6
//a=6, c=4 => 10
//a=10, c=5 => 15 
​
const sum = numbers.reduce((accumulator,currentValue) => accumulator+currentValue);
console.log(sum);


// object construction
let Car = function (make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function(name){
      console.log(`${name} is driving car `);
  };
  
};
​
let myCar = new Car('Nisan', 'A123', 2003);
console.log(myCar);
console.log(myCar.drive('Jack'));
​
let myCar1 = new Car('Honda', 'H435', 2010);
  console.log(myCar1);
  console.log(myCar1.drive('Jill'));