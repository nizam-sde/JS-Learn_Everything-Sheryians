// Q1. Print 1 - 10 using for loop

for (let index = 1; index < 11; index++) {
    console.log(index);
}

// Q2. print 10 - 1 using a while loop

let i = 10;
while (i > 0) {
    console.log(i);
    i--
}

// Q3. print even number from 1 - 10 using for loop

for (let index = 1; index < 11; index++) {
    if (index % 2 === 0) {
        console.log(index, "even number");
    }
}

// Q4. print odd numbers from 1 - 15 using a while loop 

let index = 1;
while (index < 16) {
    index++
    if (index % 2 === 1) {
        console.log(index, "odd number");
    }
}

// Q5. print multiplication table of 5

for (let index = 1; index <= 10; index++) {
    console.log(`5 X ${index} = ${index * 5}`);
}

// Q6. find the sum of number from 1 - 100 using a loop

let sum = 0;
for (let i = 1; i < 101; i++) {
    sum += i
}
console.log(sum);

// Q7. print all the number from 1 - 50 which is divisible by 3

for (let i = 1; i < 51; i++) {
    if (i % 3 === 0) {
        console.log(i, "divisible by 3");
    }
}

// Q8. ask the user for a number and print whether each number from 1 to that number is even or odd

let userNum = 40;
for (let i = 0; i <= userNum; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is Even`);
    } else {
        console.log(`${i} is odd`);
    }
}

// Q9. count how many numbers between 1 - 100 are divisible by 3 and 5.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        console.log(`${i} is divisble by 3 & 5 both`);
}

// Q10. stop at first multiple of 7 from 1 - 100

for (i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 7 === 0) {
        break
    }
}

// Q11. Skip multiple of 3

for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {                       //if (i % 3 === 0) continue'
        continue                            // console.log(i);
    }
    console.log(i);
}

// Q12. Print first five odd numbers only 

let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        count++
        console.log(i);
        if (count === 5) break;
    }
}