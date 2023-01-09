// script for while loop
function Call_Loop() {
var print = "";
var val = 1;
while(val < 11) {
    print += "Brad " + val;  //this is my while loop
    print += "<br>"
    val += 1;
}
document.getElementById("Loop").innerHTML = print;
}

let text = "Brad is a Ninja Turtle Fan!"; //length property
let length = text.length;
document.getElementById("Ninja").innerHTML = length;

var Instruments = ["Harmonica", "CowBell", "More-Cowbell", "Piano", "trumpet", "Musical-Beans", "Spoons"];
var Content = "";  //defines Instruments 
var Y;
function for_Loop() {  //defines for loop
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"; 
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cow_pics() {  //get element by id,  Cow array
    var Cow_Picture = [];
    Cow_Picture[0] = "Being a cow";
    Cow_Picture[1] = "More CowBell";
    Cow_Picture[3] = "Outstanding in his field";
    Cow_Picture[4] = "Im out of Cow Jokes";
    document.getElementById("Cow").innerHTML = " In this picture, the cow is " +
    Cow_Picture[3] + ".";
}

function constant_function() {  //defines constant function
    const Car_Model = {type:"Ford", drive:"Front", color:"Red", price:"1 million dollars"};
    Car_Model.color = "Green";
    Car_Model.roof = "Convertible";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
    Car_Model.type + " with the  " + Car_Model.roof + " roof is " + Car_Model.price; 
}

var A = 56;
{ 
let A = 57;  //let keyword
document.write("<br>" + A);
}
 document.write("<br>" + A);

 function returnFun() {  //return function
    return Math.PI;
 }
 document.getElementById("return1").innerHTML = returnFun();

 let wine ={  //let function
    started: "May",
    finish: "September",
    flavour: "Plum",
    color: "Purple",
    description : function() {
        return "The wine was started in " + this.started + " and was ready in " + this.finish + " , It has a lovely " + this.color + " color, and tastes like " + this.flavour;
    }
};
document.getElementById("wine").innerHTML = wine.description();

var content = ""; //Break keyword
var j;
for(j = 1; j < 1000; j++) {
    if(j === 6) {
        break;
    }
    content += "The number is " + j + "<br>";
}
document.getElementById("Break1").innerHTML = content;

var content1= ""; //Continue keyword
var f;
for (f = 1; f < 8; f++) {
    if (f=== 4) {
        continue;
    }
    content1 += "Brad" + f + "<br>";
}
document.getElementById("Cont1").innerHTML = content1;


