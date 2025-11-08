console.log(` Conditional statement | Control flow statement `);

// if else else if

let loggedIn = true;
let admin = false;

if (loggedIn && admin) {
    console.log(` Full Permission Granted`);
} else if (loggedIn) {
    console.log(` Partial Permission Granted`);
} else {
    console.log(` Please Login First`);
}

// switch case - the value recieved in switch try to match with every case, which ever case matches that code will be executed

switch (3) {
    case 1:
        console.log(`i'm case 1`);          //there is a tab needed in every case || it's a rule
        break;                              // means text-indent is mandatory 
    case 2:
        console.log(`i'm case 2`);
        break;                              // break is imp to stop the code or else it will
//                                             run the code of other cases as well
    case 3:
        console.log(`i'm case 3`);
        break;
    default:
        console.log(`i'm case last`);
        break;
}

// early return pattern
// return keyword exits the code immediately with returning the data so codes below will not be executed

function getVal(val) {
    if (val < 33) return 'Fail';
    else if (val < 40) return 'D'
    else if (val < 50) return 'C'
    else if (val < 70) return 'B'
    else return 'A'         
}

console.log(getVal(33));