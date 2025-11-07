# LOGICAL && Practice set

*** let a = 10;

*** let b = 20;

```
if ( x > 5 && y < 25){
    console.log("A Wins")
} else  {
    console.log("B Wins")
}

// Output A
```

---

# LOGICAL OR Practice set

*** let isAdmin = true;

*** let isLoggedIn = false;

```
if (isAdmin || isLoggedIn){
    console.log("Access Granted");
} else {
     console.log("Access Denied");
}

// Output Access Granted
```


# LOGICAL NOT

*** let temp = 35;

```
if (!(temp < 30) ){
    console.log("HOT");
} else {
    console.log("COLD");
}

// Output HOT
```

# Truthy Falsy

*** let a = 0;

```
if (a) {
    console.log("Truthy")
} else {
     console.log("Falsy")
}

//Output Falsy              // 0 is falsy value so instead of if, else code executed
```

# Ternary Operator

*** let score = 78;

*** let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail"

*** console.log(grade);

```
Output B
```

---

*** let point = 120;

*** let status = point > 100 ? "Gold" : point > 50 ? "Silver" : "Bronze"

*** console.log(status)

```
GOLD
```

---

```
let age = 20;
let voteResult = age >= 18 ? console.log("true")
 : console.log("false");

```

# Increment Operator

*** let x = 5;

*** let y = x++

*** console.log (x, y)

```
6, 5       \\ This is example of post increment.
```

# Decrement Operator

*** let P = 5;

*** let Q = --x

*** console.log (P, Q)

```
4, 4       \\ This is example of Pre decrement.
```

# Tricky Test Increment/Decrement Operator

*** let n = 5;

*** let result = n++ + ++n;

*** console.log(result)

```
12      \\ Due to 5++ + ++6 = 12
```

---

*** let likes = 100;

*** function likePost(){
return ++likes;
}

*** console.log( likePost() )

*** console.log(likes)


```
101
101

```
