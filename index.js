
a = 5;  // in use strict unassigned variables are not allowed
console.log(a,"js printed");

// scope of let var and const

// 1.var

// example 1:
// var greeter = "Namrata";
//     var greeter = "any name";
//     greeter = "name without assigntment"
//     function newFunction() {
//         var name = "horcrux";
//     }
//     console.log(name,"Test Name 1",greeter);

// example2:

    var colorForScope = "blue";
    var count = 4;
    if(count>3){
        colorForScope = "green"; 
    }

    console.log(colorForScope,"final color");


// 2. let 

let color2 = "blue";
let countForScope = 4;
    if(countForScope>3){
        let color2 = "green"; 
    }

    console.log(color2,"final color with let");

// 3. Variable with same name

let countForHouse = 2;
let name = "snape";

if(countForHouse > 1){
    let name = "slytherin";
    console.log(name,"1.");

    if(countForHouse ===2 ){
        let name = "dumbledore";
        console.log(name,"2.")
    }
    if(countForHouse < 3){
        let name = "Lord Voldemort";
        console.log(name,"3.")
    }

    console.log("print final name here :",name)
}
