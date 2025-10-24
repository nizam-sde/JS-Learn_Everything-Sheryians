var userName;       // ES5 - Depricated - var variablees added in window - function scoped- redecleared
let score = 10
const life = 3

/* 
var - var is not being used after launch of ES6 Ecma script
let - in a game score keeps updating once we pass the level so let can be used there.
const -  but in the game we get only 3 chance for survival or else we will lose the game, also we 
don't want to change the life value at any cost for that scenerio we will use const as constant. 

Variable Name Declearation Rules*****

we can start Naming with alphabet, _ , $ , numbers
numbers can't be used as 1st letter of name for variable declearation
camelCase is one of the industry standard to write variable names
js is case-sensitive it mean Nizam NIZAM both are different in the eye of js

*/

//Declearation & Initiazilation

let a;  // declearation - assigning first value (not value assaining)
let b = 12; // declearation & initiaziled

// Scope - (global, block funtional)

let nameIs= "Nizam"; //global scoped - can be used throughout the whole code
{
    let home = "Dhanbad"    //block scoped - only be used inside the block
}
function address(){
    let FindAddress = "Search address"      //function scoped - let only can be used inside the function
}

// re-assiagnment & re-declearaion

let fruit = "apple"
fruit = "banana"    // re-assiagnment of value

var bikeLost = "yes"    
var bikeLost = "police recovered the bike from theif" // re-declearaion - limited only for var

// Temporal Dead Zone

console.log(juice);     // cannot access value before initialization // except var - undefined
let juice = "apple"

// Hoisting

// in hoisting as soon the file runs variable decleration hoist to the top during Global Execution
// context and initialization stays at the line where it was written.
// variable container sab se upar chala jata hai aur usme value tab aati hai jab jis line me wo code
// likha hai us line ka code execute hota hai

// let c = "Now i have value inside";
let c = undefined;
c = "Now i have value inside"   // this is what actually happens when code runs in the enviroment

// hoisting works for variables, functions
// var ->   it will return undefined 
// let ->   it will return Cannot access 'variable' before initialization
// const -> Cannot access 'variable' before initialization
// function (){} -> Function declarations are fully hoisted, including their body. This means they can be called before the line at which they are written in code, as the JavaScript interpreter makes them available at the top of their scope before executing the code.

// if functions/ arrow function is decleared using let var const then it will not be fully hoisted,
// it will act as how hoisting works in let var const

var x = 1   //global scope
{
    var x = 2   // redecleared - reassiagned - limited to var only // global scope
}
console.log(x); // var only respect functional scope only

// similarly

let panda = "2 panda in zoo" // block scope | global scope

{
    let panda = "baby pandas are sleeping"
    console.log(panda); // output baby pandas are sleeping
}
console.log(panda); //output 2 panda in zoo
