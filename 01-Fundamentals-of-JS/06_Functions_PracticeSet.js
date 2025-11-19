// Q1. what's the difference between  function declearation and expression in terms of hoisting?

// ans- function get hoisted completely but variable/expression function does'nt

/* Q2. what will be printed in console for this question

    greet();

    function greet() {
        console.log(`hello`);
    }

    output hello            */ 

/* Q3. convert this function into an arrow function

function multiply(a, b) {
    return a * b;
}      Ans below             */

    let multiply = (a, b)=> {
        return a * b;
    }

// Q4. Identify here which is parameter and argument?

function welcome(name) {
    console.log(name);
}

welcome("Nizam");   // output Nizam

// ans line 27 parmeter, passed value in line 31 is argument

// Q5. How many parameters does this function have and how many arguments passed?

function demo(a, b, c) {
}
demo(1, 2)    // Ans parameters = 3 & argument = 2      // a = 1, b = 2, c = undefined

// Q6. Predict the output

function sayHi(name = 'Guest') {
    console.log("Hi", name);
}
sayHi()     //output Hi Guest

// Q7. what does the ... operator mean in parameter?

function xyz(...rest){}
xyz(1,2,3,4,5,6);   //it acts as rest params and contain all value in one single array

// Q8. Use rest parameter to accept any number of scores and return the total 

function scores(...rest) {
    let val = 0;
    rest.forEach( function (every_element){
        val += every_element
    });
    return val
}
console.log(scores(2, 8))       // output 10

/* Q9. Fixed the function using early return.

    function checkAge(age) {
        if (age<18) {
            console.log('Not allowed to vote');
        } else {
            console.log('Voting Allowed');
        }
    }       */

    function checkAge(age) {
        if (age<18) return console.log("Not Allowed Under Age");
        if (age === undefined) return console.log("No Value recieved");
        return console.log('Voting Allowed');
    }
    checkAge(20)

    // Q10. What's the return value of this function

        function f(){
            return  //any func return nothing is undefined
        }
        console.log(f());   // output undefined

/* Q11. What does it mean when we say "functions are first class citizens"?

Ans -  func's can be used as variable or saved as variable. func's can be passed in 
       func's like variable - and we can treat it just like we use values   */

// Q12. Can you assign a function to a variable and then call it and show output?

let message = function () {
    console.log("Message is deleted");
}
message() //output Message is deleted

// Q13. pass a function in another function and execute it inside

function func(val) {
    val()
}
func( function() {
    console.log("You are hacked bro!");
} )

/* Q14. What is a higher order function
Basically a func who returns a function or accepts a func in parameter       */

function huf(val) {
    val()
}
huf( function(){console.log("I'm hof example bro");
});

// Q15. Identify why is hof?

[1, 2, 3].map(function(x){
    return x * 2;
});     // map is hof here becuase he is accepting a func 

// Q16. Identify whether it is a pure/impure function

let sum = 0;
function addTotal(num) {
    total += num        // impure because we are increading the val of sum by adding num
}                       // it is changing the value of outside which makes it impure

// Q17. convert the above function into a pure function 

let total = 0;
function sumTotal(num) {
    let newTotal = total;
    newTotal += num     // now it's not changing the value of outside 
} 

/* Q18. What is a closure?
A function who return's a function and returning function should use atlest 1
variable of parent function */

function returninFunc(){
    let message = "I'm a returning function example";
       return function(){
             console.log(message);
        }()
}
returninFunc()

// Q19. Identify what will be logged in console

    function outer(){
        let count = 0;
        return function(){
            count++
            console.log(count);
        }
    }
    const counter = outer();    // here we get the returned function
    counter();  // output 1     // here we runned the returned function so we got ans
    counter();  // output 2

/* Q20. Convert this noraml func into an IIFE. 

function init() {
    console.log("Initialized");
}       */

    (function init() {
        console.log("Initialized IIFE");
    })()

/* Q21. What is the use of IIFE? Name one real-world use case.
Ans - When you want to create private variables then you create IIFE's     

(function(){
    let score = 12;
})();               

// now if you want to use it it won't work or show outside because it is a pvt var.

        another version 

let score = (function(){
    let currentScore = 0;
    return {
        getScore : function () {
            console.log(currentScore);
        },
        setScore : function (val) {
            currentScore = val
        }
    }
})();     it will work in html only not in node directly           */

// Q22. What will be the output here and why?

// output greetings is not a func due to hoisting and expression function

// console.log(greetings());
var greetings = function () {
    console.log("HI....!");
}

console.log(happyText());   //output I'm Happy toady because i did lots of learning
function happyText() {
    console.log("I'm Happy toady because i did lots of learning");   
}

// Create a BMI Calculator

function BMI(weight, height) {
    return weight / (height*height);
}
console.log(Math.round(BMI(60, 1.7)))


// Create a reusable discount function using hof
// hof are those who return a function or accepts a func in his parameter

function discountCalculator(discount) {
    return function(price){
        return price - price * (discount / 100);
    }
}

let discount = discountCalculator(10);
console.log( discount(100) );

// counter using closure

function countingCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
};

let count = countingCounter()
console.log(count());

// create a pure function to transform a value

function doubleTheValue(val) {
    return val * 2
}

console.log(doubleTheValue(2));

//create a private variable using iife
(
function () {
   let pass = 'password is secret' 
   console.log(pass + ' pvt variable created');
})();