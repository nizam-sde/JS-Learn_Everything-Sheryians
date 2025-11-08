# write a function get grade(score) - using elseif
##    º Take a student's mark (0 - 100)
##    º Return the grade based on the logic (A - Fail)
 

```
 function mark(grade){
    if (grade > 0 && grade <= 32){
        console.log(`Fail`);
    } else if (grade >= 33 && grade <= 59){
        console.log(`D`);
    } else if (grade >= 60 && grade <= 69){
        console.log(`C`);
    } else if (grade >= 70 && grade <= 79){
        console.log(`B`);
    } else if (grade >= 80 && grade <= 89){
        console.log(`A`);
    } else if (grade >= 90 && grade <= 100){
        console.log(`A+`);
    } else {
        console.log(`Marks can't be more than 100 & less than 0`);
    }
}

 mark(70)


 //output Grade B

 ```

# complete the same code with early return
## same code less complicated and only in single line(Work same)- Efficient way of writting code

```
 function mark(grade){
    if (grade > 0 && grade <= 32) return "Fail";
    if (grade >= 33 && grade <= 59) return "D";
    if (grade >= 60 && grade <= 69) return "C";
    if (grade >= 70 && grade <= 79) return "B";
    if (grade >= 80 && grade <= 89) return "A";
    if (grade >= 90 && grade <= 100) return "A+";
    return "Marks can't be more than 100, 0 & less than 0";
}

console.log( mark(70));


 //output Grade B
```
 
 # Rock Paper Scissor Game

 ```
 function get_u_c() {
    let getRPS = Math.floor(Math.random() * 3); // 0 to 2
    let arr = ["rock", "paper", "scissor"];
    return arr[getRPS]; // Return one of the 3 options
}

function rps(u, c) {
    if (u === c) return "Match Tie B/W user & computer";

    if (u === "rock" && c === "paper") return "Computer Win";
    if (u === "rock" && c === "scissor") return "User Win";

    if (u === "paper" && c === "rock") return "User Win";
    if (u === "paper" && c === "scissor") return "Computer Win";

    if (u === "scissor" && c === "rock") return "Computer Win";
    if (u === "scissor" && c === "paper") return "User Win";
}

// Example usage:
let userChoice = get_u_c();
let computerChoice = get_u_c();
console.log("User:", userChoice);
console.log("Computer:", computerChoice);
console.log(rps(userChoice, computerChoice));

 ```

 ## 2nd approach

 ```
 function rps(u, c){
    if (u === c) return "draw";

    if (u === "rock" && computer === "scissor") return "user win"
    if (u === "paper" && computer === "rock") return "user win"
    if (u === "scissor" && computer === "paper") return "user win"

    return "computer win"
 }

 console.log( rps("rock", "paper") );
 ```

 # Switch case mistake

 ```
 let x = 2;

 switch (x){
    case 2:
        console.log(" TWO ");
    case 3:
        console.log(" THREE ");
 }

 //output TWO THREE         // because we missed break after case 2 end.
 ```

 ```
 let day = "sunday";
switch (day) {
    case "monday":
            console.log("Weekday");
        break;
    case "tuesday":
            console.log("Weekday");
        break;
    case "wednesday":
            console.log("Weekday");
        break;
    case "thursday":
            console.log("Weekday");
        break;
    case "friday":
            console.log("Weekday");
        break;
    case "saturday":
            console.log("Weekend");
        break;
    case "sunday":
            console.log("Weekend");
        break;

    default:
        break;
}

 ```