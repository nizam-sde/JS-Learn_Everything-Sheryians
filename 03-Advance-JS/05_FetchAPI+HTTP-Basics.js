// fetch API : get post basics

    /* js has an inbuilt function which fetch api, it asks for url and he collects the json data from url and gives back to you which later on you can use as per your need.
    fetch is promise based so we can use .then.catch            */

    /* pehle humlog data fetch karte hai fir pehle then me usko sirf parse krte hai json me next then me as a resolve use krte hai data ko and catch me error handel krte hai 

    ** Implicit return
    .then( (raw) => raw.json() )                */


    fetch("https://randomuser.me/api/")
    .then(function(data){
        // we always have to convert the data into json to make it readable
        // becuase fetch gives raw data which is not usable until paring json
        return data.json();   
    })
    .then((data)=>{console.log(data.results[0].name.first);
    })
    .catch(function (err) {
        console.log(err);
    });
    



// headers, status code, json parsing

        /* status codes
        1. Informational response  (100 - 199)
        1. redirection  response   (200 - 299)
        1. client error response   (400 - 499)
        1. server error response   (500 - 599)          */

// form submission via fetch

let form = document.querySelector('#form');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let pass = document.querySelector('#password');


form.addEventListener('submit', function(events){
    // prevent default help to stop submitting form and reload whole page, we will submit our form manually by fetch method
    events.preventDefault(); 

    /* submission code for fetch -
         use body to send data specifically also data should always be in json format (json.stringify) to send data from our end             */


    fetch("url where to submit", {
        method: "POST",
        body: JSON.stringify({
            name,
            email,
            pass,
        }),
    })
})

// error handeling with respons.ok and try catch 

// basic REST principles