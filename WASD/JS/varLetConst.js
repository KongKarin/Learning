// lesson Var let Const
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
    console.log(name2); // error because out scope
    console.log(name3); // error because out scope
}





// lesson concade string 
let name = "John";
let lastname = "Doe";

function greeting() {
    return 'Hello, ' + name + ' ' + lastname;
}

greeting();

console.log(greeting());

// Template literals, Template Strings
function greeting() {
    return 'Hello, ' + name + ' ' + lastname;
}

greeting();

console.log(greeting());



