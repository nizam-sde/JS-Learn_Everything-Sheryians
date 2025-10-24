Q - Difference between word and keyword in Javascript?

Ans - anything which has a meaning or pre-defined syntax in programming is known as keyword , if unrecognised by programming iterpeter or compiler it is a word.

Q - what are variables? type of variables.

Ans - Variables in JavaScript are named containers used to store and manipulate data within a program, allowing that data to be reused or changed as needed.

var: Function-scoped or globally scoped, can be re-declared and updated. **Depricated

let: Block-scoped, cannot be re-declared in the same scope, but can be updated.

const: Block-scoped, immutable (cannot be reassigned), but objects assigned to const can still have their properties changed.

Q - How many datatypes of variable in JavaScript.
Ans - There are 2 Types of datatypes in JavaScript.

-------------- ------------ Data Types of Variables -------------- ------------ 
1. Primitive Datatype
2. Non-Primitive Datatype

Primitive Types:

string
number
boolean
bigint
symbol
null
undefined

Non-Primitive Types:

array []    -  collections of items, allowing storage of multiple values in a single variable.
object {}   -  containers for key-value pairs. Almost everything in JavaScript that isn't a primitive
.              is an object, including dates and custom objects.
Functions ()-  Functions are callable objects; despite having their special type, they inherit
.              the properties of objects.

Q - why var leaks outside block but let dose'nt
Ans - if (true){
    var a = 1;
    let b = 2;
}
console.log(a) // output 1
console.log(b) // output Reference Error

reason var only respect funtions but let respects block scope thats why let was not accessable outside 
of block scope.

Q - why const allows changing object properties?
Ans - const person = {name: "Nizam"};
person.name = "Mohammad Nizam"; // allowed
person ={}; // not allowed - in const you cannot reassign value but properties values can be updated.

Object.freeze   // it is used to stop from updating object properties.

 


