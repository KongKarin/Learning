// let phone = function (make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.use = function(name){
//         console.log(`${name} is driving car `);
//     };
    
// };

// let myPhone = new phone('iPhone', '12', 2020);
// console.log(myPhone);
// console.log(myPhone.use('Jack'));

// let myCar1 = new phone('Honda', 'H435', 2010);
// console.log(myCar1);
// console.log(myCar1.drive('Jill'));



let weAreBus = {
  type: ['oil', 'gas', 'electric'],
  color: ['red', 'green', 'yellow'],
  year: [2010,2015,2020],
  busInfo(){
  console.log('Bus Infomations:'),
  console.log('Type: ' + (weAreBus.type)),
  console.log('Color: ' + (weAreBus.color));
  console.log('Year: ' + (weAreBus.year));
  }
//   test: function() { 
//     return this.type + this.color + this.year;
//   }
 };

weAreBus.busInfo()
// console.log(weAreBus.test());



// weAreBus.forEach(element => {
    
// });





// const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

// const nums = [1, 50, 75, 200, 350, 525, 1000];

// //  Choose a method that will return undefined
// cities.forEach(city => console.log('Have you visited ' + city + '?'));



// function IceCreamMaking(flavor, type, toppings) {
//     this.type = type;
//     this.flavor = flavor;
//     this.toppings = toppings;
  
//     this.make = function () {
//       return `${this.flavor.charAt(0).toUpperCase()}${this.flavor.slice(1)} ${
//         this.type
//       } served with ${this.toppings.slice(
//         0,
//         toppings.length - 1
//       )} and ${this.toppings.slice(-1)}. 😉`;
//     };
//   }
  
//   const vanillaFlavor = new IceCreamMaking("vanilla", "gelato", [
//     "almond",
//     "caramel suace",
//   ]);

//  console.log(vanillaFlavor());
