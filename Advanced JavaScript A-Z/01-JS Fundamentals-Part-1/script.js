//VS code shortcuts working on JS

//CTLR + D
//select a text area and use this short cut to select all similar texts and update or delete 

//Alt + arrow up or down
//move text/code line up or down

//alt + shift + a
//comment out multi line

//alt + shift + arrow down
//copy line of code down

//CTRL + /  single line commnet




// Working with varibales in JavaScript

     let js = 'amazing';
     
      40 + 30 - 4;
      console.log(40 + 30 - 4);

      console.log('fara');

      console.log(23);


      let firstNameOne = "fara";
      let first = 'fara'
      let last = 'j'
      
      console.log(firstNameOne);
      console.log(firstNameOne);
      console.log(firstNameOne);

// better code writting wth camelCase notation. 
// think of variables as a box that you store things in it and you are able to take each item out when needed to use, look at or destroy it. 
// -in JavaScript you can compare these real-life examples declaring or calling upon a variables you use in your code. 

let pets = "cats, dogs";
let catName = "sally";
let dogsAges = [2, 5];

// logging results into console
console.log(pets) // cats, dogs
console.log(catName) // sally
cosole.log(dogsAges[0]) // 2



////////////////////////Data Types//////////////////////////////
///1; - [Objects]
///2 - [Primitives]
/// -----Primitives------
///1 - [Number] floating point numbers
///2 - [Strings] like sentence word characters or texts 
///3 - [boolean] are used to make decesions  true or false 
///4 - [undefined] value in a variable is not defined, set or stored, empty value or parameters 
///5 - [Null] also means empty values
///6 - [Symbols #$@%] 
///7 - [BigInt Bigintergers] long mathimatics numbers


let javaScriptisFun = true
console.log(javaScriptisFun)

let emptyValue = // variable with no value  / empty variable
//typeOff
console.log("ture is", typeof true); // true is boolean 
console.log(typeof javaScriptisFun) // boolean
console.log(typeof 123); //number
console.log(typeof "I am a developer") //string
console.log(typeof emptyValue) // undefined 
console.log(typeof abc123) // undefined 
console.log(typeof 983493n) // bigInt int = integer



//////////////////////////////var / let and const keywords/////////////////////////////////////
// let
// let keyword can be reassigned redeclared 
let age = 98;
age = 80;



// const
const carModel = "bmw";
console.log(carModel); // logs bmw

// if you try to redeclare or reasign carModel value it wont work
// const variable declrations can not be reassigned or stored again 
//e.g. 
const carModel = "bmw";  // it will log this error --> Uncaught SyntaxError: Identifier 'carModel' has already been declared 
//or 
carModel = "Ferarri"; // this will log error into console --> Uncaught TypeError: Assignment to constant variable.
//or even if we store the same value
carModel ="bmw"; // --> Uncaught TypeError: Assignment to constant variable.


// var
// var keyword is not used today  = old  and can be reAssgined 
// dangerous to use in your code because you may use same varible in many places results in bugs 
var job = "coder"; // first value assigned 
job  = "noder"; // second value re-assigned <- javaScript will run this 
// if you console log job varialbe now it wil... output noder because it reassigned or changed the value to new value "noder" 
console.log(job) // logs noder


//varialbes rules  
//always declare variables meaning always store name and value by declraing it --> ✅let job = "coder"  ❌job = "coder"
//let, const or var  is the reserved keywords in js used to declare our variables 


////////////////////////////////////
//Transform or combine values with + - * / == = 
// Basic Operators
// Math operators

const now = 2022; 
const myAge =  now - 1991;
const ageSarah = now - 1994; 

console.log('You are',ageSarah, myAge); // logss You are 31
console.log(ageSarah *3, myAge * 3 / 10, 2**3);

const firstName = 'fara';
const lastName = 'j';
console.log(firstName + ' ' + lastName); // logs fara j  + ' ' + puts space 


//////////////////////////////////
//Asignment operators
let x = 10 + 6;
//x will be assigned the value of 16 
//new x asignment as follow
x += 10; //x = x + 10 = 26
x *= 4; //x = x * 4 = 104
x++ // increaments values by +1 
x-- // decreases or decrements the valuse by -1

console.log(x); //logs 104



/////////////////////////////////
//Comparison operators >, <, >=, <= 
console.log(myAge > ageSarah); // more than older than
console.log(ageSarah  >= 18); // logs if ture of false



////////////////////////////////
//Operator precedences 
let x2, y;
x2 = y = 26-10-4; // executes code from right to left 
console.log(x2, y)

const averageAge = (myAge + ageSarah) / 2 // just math in () or out of it in school this method will calculate based on precedence from left to right it adds and then devides 
console.log(myAge, ageSarah, averageAge);



////////////////////////////////
//Strrrings and Template strings 
//or Template literal

const car = 'bmw'
const tires = 4
const color = 'yellow'
const year = 1994

//old ways getting varibles values as string output
const dreamCar = 'This car is ' + car + ', a very fast car that has ' + tires + ' tires ' + 'color  is ' + color + ' it was built in year ' + year;
console.log(dreamCar);

//modern way using ES6 template strings / tempalte literals 
const dreamCar2 = `This car is ${car}, a very fast car that has ${tires} tires, color is ${color}, it was built in year ${year}`
console.log(dreamCar2);

//using backticks ` ` instead of qoutes '' "" 
console.log(` this is just another string with template literals ')

//old ways using a new line with back slash 
console.log('string with an old way js\n\
miltiple \n\
lines')

//new way using back ticks to make multi line strings. es6 
console.log(`string with new way
multiple
lines`);




///==========taking decisions / if else===========///

const userAge = 15;

if(userAge >= 18){
    console.log(`you can get a DL now`)
} else{
    const yearsLeft = userAge - 18; // 18 - userAge shows no minus

    console.log(`you are too young. wait another ${yearsLeft} years.`)

 }


const yourBirth = 1991;

 let century; // this var is outside of the block if inside it wont be invoked or called

 if (yourBirth <= 2000){ // we declare a condition 
    century = 20;

 }else{
    century = 21;

 }

 console.log(century)



//======Type conversion Type coercion=====//

 // CONVERSION
 const inputYear = '1991';
 console.log(Number(inputYear)) //num func convert string to num
 console.log(inputYear + 18);  // outputs a string 199118


 ///NaN = not a number 
 console.log(String(23), 23);


 // COERCION
 console.log('I am ' + 98 + 'years old')
 
 console.log('23' - '10' - 3) // + operator concatinates . coerce string to num here
 console.log('23' * '11') // here js calc the strings as num
 
 // and
 const money = 10;
 if(money <= 10){
    console.log("budget low")
 } else{
    console.log("you should not spend it")
 }
 
////////////////////////////////
//equality operands operators 
const ageOperators =  18
if(ageOperators === 18);  /// if exactly true (strict equality)
console.log('you just turned wild!')

// double == is loose
let books = '111';
let mathBook = 111;


if(books == mathBook){
    console.log("maybe true")


}



