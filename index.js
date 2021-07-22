
a = 5;  // in use strict unassigned variables are not allowed
console.log(a,"js printed");

// scope of let var and const

// 1.var

// example 1:
var greeter = "Namrata";
    var greeter = "any name";
    greeter = "name without assigntment"
    function newFunction() {
        var name = "horcrux";
    }
    console.log(name,"Test Name 1",greeter);

// example2:

    color = "blue";
    count = 4;
    if(count>3){
        color = "green"; 
    }

    console.log(color,"final color");


// 2. let 

let color = "blue";
let count = 4;
    if(count>3){
        let color = "green"; 
    }

    console.log(color,"final color with let");
