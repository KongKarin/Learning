let phone = function (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.use = function(name){
        console.log(`${name} is driving car `);
    };
    
};

// let myPhone = new phone('iPhone', '12', 2020);
// console.log(myPhone);
// console.log(myPhone.use('Jack'));

// let myCar1 = new phone('Honda', 'H435', 2010);
// console.log(myCar1);
// console.log(myCar1.drive('Jill'));