//  DataTypes

// Primitive Data Type  - can be copy directly
// primitive data types gives you new copy so instead of one now you have 2 copies and both are
// same but different individual copy.

String  // Group of characters are called string.   - "" double quotes '' single quotes `` backticks
Number // Numerical as well as decimal values are Numbers.
Boolean // true/false values are boolean. 
BigInt //  2 to the power 53 if number exceeds that are bigiNT - Ex to declear bigInt - 46565656n
Symbol // symbols are use to give unique immutable values - Symbol('UserName')
undefined // standalone value - variable decleared value not assigned
null // empty values are called null - typeof object - special data type - purposely we set null
NaN  // NaN  is not a data type in JavaScript. It is a special value belongs to the Number data type.
    // according to js NaN is considered failed number operation thats why it is number typeof

// Non-Primitive Data Type / Reference Data Type - cannot be copy directly
// but in this case you get the reference of original data so if you change the reference data then 
// actual data will be changed because here you have not recieved a seperate copy.
Array   // []   - collection of data
Object  // {}   - key : value pairs
functions // ()     

let a = 12;
let b = a;
console.log(a); //output 12
console.log(b); //output 12 - value will be updated limited to who's value is updated.  

let obj = {
    uid : 1,
    name : "Nizam",
    age : 22,
    email : "nizam-sde@gmail.com"
}
let u1 = Symbol("uid")
obj[u1] = "001"; // both uid will exist without replacing the value of each other - unique value

// Non primitive give you reference copy so if you change/update value in the copied
// variable the original value will also be updated at the same.

// Number.MAX_SAFE_INTEGER     it will tell you the maximum number can be stored in Number datatype
// such cases where we want to store more numbers exceeding the datatype number limit we use bigInt
// in bigInt we can only add bigInt values only

// Dynamic Typing - the entered variable dataType recognised when the code runs
// static typing is good thats why we use typescript - we declear at code variables dataType


let container = "khali container"
container = 101
container = true
container = ['dobara', 'khali', 'ho', 'gya', 'container'] 

// we are updating the value along with its data type and there is no issue, this nature of js is known as dynamic typing
// if we do same thing in other programming languages it will throw error
// JavaScript is a cutie cow apne bola maan lo container naam ka variable hai apne nhi bataya ki uska type string hai ki number hai etc , js itni pyari cow hai wo bolegi thik hai apko update kr ke jo value rakhni ho aap rakhlo mujhe koi problem nhi hai apne bola variable hai itna kafi hai mere liye.

// typeof quirks - unexpected, inconsistent, or confusing behavior in the language

typeof null === 'object'    // true - some developers assume it was a mistake while building js
typeof NaN === 'number'     // Not a Number (NaN)
NaN === NaN                 // false
.1 + .2                     // 0.30000000000000004
// [] + []                  // ''   - blank string
1 + "1"                     // '11' 
1 == "1"                    // true
1 === "1"                   // false

//type coercion (== vs ===)
// while comparing b/w 2 one type will automatically converted 

"5" + 1         // '51'     - any operant either of them is string the another one will also converted
               // into string and concat it (concat and addition in js performed by + operator that's the reason behind it.)
"5" - 1        // 4 (it is correct because - operator only do substraction)


// truthy & falsey values

// 0 false '' null undefined Nan document.all   - considered falsy values in js

// everything is truthy in JS, except falsy values  

// to verify !! add and you will know whether its value is truthy or falsey value - ( !!0 )

// predict values

// true + false = 1
// null + 1 = 1
// 5 + '5' = "55"
// !!undefined = false

/* 
type of NaN is number // js consider it as a failed number operation, and there was a number expected
there thats why js says Nan is Number type 
a mathematical operation which is not possible 
ex - 
NIzam + 21  
true / 2
undefined * 10      etc*/ 