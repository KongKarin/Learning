// lesson 1 Var let Const
// var scope global
var fname = "Kong";
    fage = "25";

//let const scope block
function myFunc() {
 var fname = "Karin";
 let lname = "nap";
     lname = "naprang";

const pc = "intel";
    //   pc = "amd"; //it'll be error because const cannot reassign variable

console.log(fname);
console.log(lname);
} 
//call function
myFunc()
console.log(fname); // result is Karin because var is in function scope (and each switch for loop)
// console.log(lname); // error because .log out of the block of (lname)

// anoter example
function yourFunc() {
    if (true) {
        var name1 = "Mr.A";
        let name2 = "Mr.B";
        const name3 = "Mr.C";
    }
    console.log(name1); // result is Mr.A
    // console.log(name2); // error because out scope
    // console.log(name3); // error because out scope
}
//call function
yourFunc() 




// lesson 2 concade string 
let name = "John";
let lastname = "Doe";

function greeting() {
    return 'Hello, ' + name + ' ' + lastname;
}

greeting();

console.log(greeting());

// Template literals, Template Strings
function greeting() {
    return `Hello ${name} ${lastname}`;
}
//call function
greeting();

console.log(greeting());

// Lesson 3 default parametor
function greeting2(mr = 'John', greeting = 'welcome' ) // mr = 'John', greeting = 'welcome' are default parameter
{
    return `${greeting} ${mr}`;
}

console.log(greeting2('Smith')); //'smith' will instead 'John'
console.log(greeting2('Anna', 'Hello')); // 'Anna', 'Hello' will instead 'John', 'welcome'

// Lesson 4 Destructuring
// Old version
// const points = [20, 30, 40];

// const val1 = points[0];
// const val2 = points[1];
// const val3 = points[2];

// ES6 
const points = [20, 30, 40];
const [val1, , val3] = points; // [val1, , val3] skip value in array,    

console.log(val1, val3);

// old version
// const car = {
//     type: 'Honda',
//     color: 'Silver',
//     model: '2020'
// }
// const type = car.type;
// const color = car.color;
// const model = car.model;

// console.log(type, color, model);

// ES6
// const car = {
//     type: 'Honda',
//     color: 'Silver',
//     model: '2020'
// }
// const {type, model} = car; // in { } pick value that you want into { }

// console.log(type, model);

// Lesson 6 Object literal shorthand

    let type = 'Honda';
    let color = 'Silver';
    let model = 2020;

    // const car = {
    //     type1: type,
    //     color1: color,
    //     model1: model
    // }

// ES6
    const car = { type, color, model }
    console.log(car);

// Lesson 7 Arrow function
    function test() {
        return 'Hello World';
    }

    //make arrow function
    const arrow = () => 'Hello, John!';
    //const arrow2 = val => `Hello, ${val}!`;
    const arrow2 = (val, val2) => `Hello, ${val}! ${val2}!`;
    //syntax for many lines of code, have to add { }
    const arrow3 = (asd) => {
        let mynickname = asd.toUpperCase();
        return `Hello ${mynickname}!`;
    }; 

    console.log(arrow());
    console.log(arrow2('Kong', 'Im coding'));
    console.log(arrow3('Kong'));

// Lesson 8 Spread & Rest Operators
    //Spread operator
    const spread = ['Jhin', 'Jin', 'Jane'];
    console.log(...spread); // output: Jhin Jin Jane 

    const spread2 = ['June', 'Julie', 'Jube'];
    const mergSpread = [...spread, ...spread2];
    console.log(mergSpread); // output:['Jhin', 'Jin', 'Jane','June', 'Julie', 'Jube']

    //using with object
    const info = {
        name: "Jeeb",
        age: 26,
        married: false
    }

    const newInfo = { 
        car: "Lambo",
        color: "red"
    }
    const mergedInfo = { ...info, ...newInfo };
    console.log(mergedInfo); // output: { name: 'Jeeb', age: 26, married: false, car: 'Lambo', color: 'red' }
    
    //Rest
