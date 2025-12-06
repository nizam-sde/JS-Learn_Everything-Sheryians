// this in global scope, function, method, event handlers, class

    // value of this changes depending upon in which scope it was used

    // global scope
    console.log(this);      // window 

    // function scope
    function abcd() {
        console.log(this);
    }
    abcd()      // window

    // method - a function which is inside a object is known as method
    // in method this value will be the object itself where it was used
    // so it will return the object where it was decleared

    let obj ={
        name: 'Nizam',
        sayName: function(){
            console.log(this); // same object in return
            console.log(this.name); // Nizam
        },  
    };
    obj.sayName()

     // methods in function different cases
            
            //if we create a arrow func then again its value will be window
            //if in func we create another func then it will be window
            //if in func we create a arrow func then it will be same func 


    // event handler

    // document.querySelector('h1').addEventListener('click', function(){
    //     console.log(this); // return h1 element
    // })
    

    // class

    class Abcd{
        constructor(){
            console.log(this);
        }
    }
    
    new Abcd() // return same class

    /* values of this

 global - window
 function- window
 method inside es5 function - same object
 method inside es6 arrow function - window
 es5 function inside es5 method - window
 arrow function inside es5 method - object - arrow func take val from parent
 event handler - element
 class - blank object                    */


// arrow function & lexical this

// manual binding: call, bind, apply