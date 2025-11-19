console.log(` Functions in JavaScript`);

// Functions Declearation , expressions, arrow function
/* 
    The written code are get executed immediately in such cases where we want the code
    not get executed immediately but works only when we want or certain conditions meet at that point the got get executed for such places we use functions

    It helps you to create reusable code so if you want to perform certaain task you don't
    need to write that code again just call the function only
*/
    // 1st way of declearing function  - ( Function Declearation )
    function dance() {
        console.log(`dance dance dance - wednesday`);
        console.log(`dance dance dance - wednesday`);
        console.log(`dance dance dance - wednesday`);
        console.log(`dance dance dance - wednesday`);
    }

    // dance();

    /* 2nd way of declearing function - ( Variable Function / Expression Function )
       variable name is the name of function - so do not give name to function  */ 

    let func = function() {
        console.log(`Data Deleted Successfully`);
        
    }
    // func()    

    /* 3rd way of declearing function - ( Arrow Function / Fat Arrow Function ) */ 

    let deleteFile = () => {
        console.log(`Files deleted`);
    }

    // deleteFile()

// Parameters & Arguments   - we can use any name for params

    function function_name(parameter) { console.log(parameter) }
    function_name("argument"); function_name("gadha"); function_name("bilauta")

// Default, rest and spread parameters
    // Default Parameter example
    function sum(val1 = 0, val2 = 0) {
        console.log(val1 + val2);
    }
    sum()

    // Rest Parameter (instead of giving name for every params we use rest as ...name
    // if ...used in fun's params its rest operator but if used in array & object its
    // spread opertaor

    function sumAll(...Sum) {   
        console.log(Sum);
    }
    sumAll(1, 2 , 3 , 4 , 5 , 6 , 7 )


// Return value and early return

    // return the value from where it was originated
    // jaha se information mangi gayi waps wahi chale jao // line69 
    // return can only be issued from inside of a function 

    function zyx() {
        return 12;  // here we returned the value back to the func
    }
    console.log( zyx() ); // backed value from return printed here
    

// first-class-function (assign to variable, pass an argument, return from other functions)

    // using function as values is known as firstCLass-function (fcf)
    // jaha jaha value ja sakti hai waha waha function ja sakta hai.
    // let se bane variable me jab value ja sakti hai to waha value ki jagah
    // function chala gya

    let abcde = function name(params) {}    // allowed
    
    //only limitaion is we can't pass name of func here
    // func call me value bhej skte hai to func bhi bhej skte h 

    function asdf(val) { val() }   
    asdf( function () { console.log("hey") } )   

// Higher-order-functions

    // hof are those who return a function or accepts a func in his parameter

    // ex - 1
      function jkl(val) { val() }   // this upper func is hof
        jkl( function () {} ); 

    // ex - 2
      function qwe(){
        return function () {console.log("qwe")}
      }
      qwe()
// pure vs impure function

      // aisa func jo bahr ki value ko na badle - pure func
      let pp =2;
      function print(val) {
        console.log(val + pp);
      }
      print(12)

      //aisa func jo bahr ki value ko badal de - impure func
      function print2(val) {
        console.log(val + Math.random());
      }
      print2(12)

// Closure and lexical scopping

      // ek func jo return kare ek func aur return hone wala func use karega
      // parent func ka koi varaible
      // closure
       function printing() {
        let a = 12;
        return function () {
            console.log(a);
        }()
      }
      printing()
      
      // lexical scopping - scope of physical position is known as lexical scopping
      // variable a will be accessable to func abcd , efgh , ijk, b will be accessable
      // to efgh and ijk and c will be accessable to only ijk this is lexical scopping
      function abcd() {
        let a = 1;
          function efgh() {
            let b = 2;
              function ijk() {
                    let c =3;
               }
           }
      }

// IIFE (Immediately Invoked Function Expressions)

      // iife are not named func and immediately called after function ends
      (function () {
        console.log(`an apple a day keep wallet money runing away`);
      }) ();

// Hoisting Differences between declearation and expression

// Hoisting also works in func the only diff compare to variables is
// func hoist completely with all he inside code so it can be called even before 
// declearation & initialization - in func statements this is allowed in JS

// but if we create a function expression/ varaible func then it will stop working
