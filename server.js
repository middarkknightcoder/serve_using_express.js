// now creat a server using the express 

const express = require("express"); // Here import the express packege in my code

const app = express(); //Here save the express in the app variable


// Here get is used for the send request when data is small

app.get("/", function (request, response) { // "/" This is a root node of the home page or route 
    
    // console.log(request); // This is used for the print the requested all data into the console(hyper terminal)

    response.send("<h1>Hello</h1>"); // This is send the response in the 3000 port
});


// Here when user can not the call home page means call another page that time what response given by the server

app.get("/contact", function (request, response) { // "/contact" This is a parameter of the get method 
    
    response.send("Contact me at : Ronak@gmail.com");
});


// Here now creat an another server which is contain information about the host

app.get("/about", function (request ,response) { // NOTE : Here request and response boths are imoportent
    
    response.send("Name : Ronak <br> Page-Name : About <br> Port : 3000 <br> Description : This server made using the express");
});


// Here you can call function using the port 3000

app.listen(3000, function () {
    
    console.log("Now server is live on 3000 port");

});

