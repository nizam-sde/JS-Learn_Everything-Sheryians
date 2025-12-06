// Callbacks, Promises, Async/Await

    // difference between sync/async in JavaScript
    // synchronous code & asynchronous code

    /* in js code runs line by line (one line code executes then it goes to another line) and
        it's natural code executing process of js, but we want few times that two codes
        execute at same time or if any code is taking time longer then ususal at that place
        we want our main code keep on executing and the code which is taking time once he
        get executed then at last only show us the result and here the concept of
        async comes into picture.       */

        console.log('hello guys');      //sync
        setTimeout(() => {
            console.log('hello guyss2');        //async
        }, 1000);
        console.log('hello guysss3');   //sync

        // output 1 , 3 , 2

        // aisa code jo line by line chale wo hai sync code 
        // aisa code jb ready ho chalne ke liya uske baad chale wo hua async code

        function iWillCome_In_2Seconds(val) {
            setTimeout(() => {
                console.log(val);
            }, 2000);
        }
        iWillCome_In_2Seconds('Aagya na 2 second me ❤')
        

    // callback pattern & callback hell

        //callback function- we send func as argument in func calling knows as callback func
        // ek func ko agar ek aur func bhej de to argument wala func callback kehlata hai
    function callMeBack(fnc){
        setTimeout(fnc, 1000);
    }
    callMeBack(function () {
        console.log(`i'm example of callback function`);
    })

    // callback pattern 

    function profileLao(userName, func) {
        setTimeout(() => {
            console.log(`Fetched User is ${userName}`);
            func({userName})
        }, 3000);
    }
    profileLao('Nizam', function (userProfileDetails) {
        console.log(userProfileDetails);
    })

    // callback hell example

    function IGprofiles(userName, cb) {
        setTimeout(() => {
            console.log(`Fetched User is ${userName}`);
            cb({userName})
        }, 3000);

        function getAllPostsOfUser(posts, cb) {
            setTimeout(() => {
                cb({ _id: 12345 , posts: ['Apple Post', 'ball post', 'goldfish Post']})
            }, 4000);
        }
    }


    IGprofiles('Nizam', function (usersDetails) {
        console.log(usersDetails);
        getAllPostsOfUser(usersDetails._id, function posts(posts) {
            console.log(posts);
        })
    })

    // promises: resolve, reject, then, catch

    // async/await syntax, error handeling with try catch

    // chaining async operations

