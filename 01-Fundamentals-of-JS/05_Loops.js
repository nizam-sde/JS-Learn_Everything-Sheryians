// for loop, forin, forof, for.each , do , do-while 

/* Performing same task or similar task in repeat is known as loop
    1 1 1 1 1 1 1 1 1 1         -   recurring of number is the loop here
    1 2 3 4 5 6 7 8 9 10        -   print no till 10, print is the loop here

    Never write a code that can stuck in infinite loop


    when you know loop kaha se jana hai --> kaha tak jana hai --> kaise jana hai
    for loop is best for this scenerio

    ek loop banao jo 1 - 20 tak jaye aur ek ek step badhe   
    kaha se jana hai (1)        kaha tak jana hai (20)          kaise jana hai(ek ek step)

    kaha se jana hai --> kab rukna hai --> kaise jana hai
    while loop is best for this scenerio

    kaha se jana hai(1)     kab rukna hai(jabtak hello na bol du)       kaise jana hai

    1 se 40 tak ginti karo                  - for loop
    1 se 15 admi ko khana do ekek kr ke     - for loop
    hello jab aa jaye ruk jao               - while loop
    laal kapda jisne pehna ho 10 usko dedo  - while loop
    jab bhalu dikhe tab bhag jana           - while loop

    *** for loop
    for(start, end, change){}   -   syntax      1 - 100 print           */

    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }


/*   *** while loop

    start
    while(end){                  -   syntax      
        execution code
    change
    }                               */
   
    let i = 1;
    while (i<32) {              // 32 jab bhi aaye usse pehle rok dena
            console.log(i);
        i++
    }


/*   *** do-while loop      -   atlest 1 baar run hota he hai har condition me
    do{
        execution code
    }
    while(end)
                 do bol diya karo rukna kab hai baad me bataya          */

    let p = 21;     //do mtlb karo to ek baar print 21 kr dene ke baad conditionn check hua diff
    do {
        console.log(p);
        p++
        
    } while (p<20);

//    ***break          - break syntax is use to stop loop while certain conditions

for (let index = 1; index < 100; index++) {
    console.log(index);
    if (index === 32){
        break;          // 1 se 100 tak print karo pr jaise he 32 mile ruk jana
    }
    
}

//   ***continue        - skip it and jump to next

for (let index = 1; index < 100; index++) {
    if (index === 32){
        continue;      // jab bhi 32 mile jump kr ke next pr continue raho (32 skip ho jayega)
    }
    console.log(index);
}

// Odd Even - JS Example 
/*
for (let i = 0; i <= 20; i++) {
  let num = i 
    if (num % 2 == 0) {
        console.log("even", num);
    } else {
        console.log("odd", num);
    }
}

*/



