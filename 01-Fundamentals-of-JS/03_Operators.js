// Operators are used to perform arithmetic operations

//Arithmetic Operators

/* Addition ->          +
   Subtraction ->       -
   Multiplication ->    *
   Division ->          /
   Modulus ->           %           remainder check
   Exponantiation ->    **          3 ** 4  (3 to the power 4)  output: 81   */

/*Comparison Operators
    Equal to ->                     ==
    Equal & TypeCheck ->            ===
    Not Equal ->                    !=
    Not Equal & typeof ->           !==
    Greater Than ->                 >
    Greater Than & Equal to ->      >=
    Smaller Than ->                 <
    Smaller Than & Equal to ->      <=              */

/*  Assignment Operator    ->       =       EX- let a = 12;     //output    12
    Update value then assign ->     +=      EX- a += 2          //output    14
    subtract value then assign ->   -=      EX- a -= 2          //output    12
    divide value then assign ->     /=      EX- a /= 2          //output    6
    multiply value then assign ->   *=      EX- a *= 2          //output    12
    modulus value then assign ->    %=      EX- a %= 2          //output    0
exponantiate value then assign ->   **=     EX- a **= 2         //output    0 to the power 2        */

//Logical Operators

/*  Logical NOT ->                  !   (Exclamation mark)  not equal to the 2nd value
    Logical OR  ->                  ||  (bitwise OR Operator) any one condition is true
    Logical AND ->                  &&  (ampersand) both 2 conditions are true            */

//Ternary Operators

//  ?:                  12>13   ?   console.log("true") : console.log("false")
//                   condition  ? true hui to ye code   : warna false ka code chalega



//Unary Operators

/*
    +           +"10"               //output 10         trick to convert string into number if possible
    -           -10                 //output -10        to give negative value
    !           !12                 //output false      (to check inverted nature truthy falsy)
    typeof      typeof 12           //output number     (to check datatype)
    ++          ++2                 //output 3          (increment operator)
    --          --2                 //output 1          (Decrement operator)

    Pre Increment ++2   immediately added
    post Increment 2++  currently value is 2 in future when it will get asked incremented value 3 will be
*/

//typeof        to check the datatype we use type of

//              typeof null // object   
//              typeof [] // object    
//              typeof NaN // number        (these 3 are exceptions)    - quirks


/*instanceof            -       inheriting properties 
it basically checks variable is instanceof which dataType
cache is here - it works well with non-primitive dataType 

ex- let a = 2; a instanceof Number //false

Simply means -
typeof = primitive dataType
instanceof = non-premitive dataType 

 let a = [];
 a instanceof Array // true     quirk solution                    */


 