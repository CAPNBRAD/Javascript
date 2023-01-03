function subtraction () { //subtraction function
    var Subtraction = 5-2
    document.getElementById("sub").innerHTML="5-2=" +Subtraction;
}

function add () { //addition function
    var addition= 5 + 2;
    document.getElementById("add").innerHTML = "5+2=" +addition;
}

function division () { //division function
    var simple_Math = 48 / 6;
    document.getElementById("division").innerHTML = "48/6=" +simple_Math;
}

function multiply () {  //multiply function
    var simple_Math = 5*2;
    document.getElementById("multiply").innerHTML = "5*2=" +simple_Math;
}

function more_math() {  //advanced math
    var simple_Math = (1+2) * 10 / 2-5;
    document.getElementById("more_math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 =" +simple_Math;
}

function modulus() {  //modulus function returns the remainder of the problem
    var simple_Math= 25%6;
    document.getElementById("modulus").innerHTML="When you divide 25 by 6 you get a remainder of: " +simple_Math;
}

function negation() {  //negation provides negative of the number
    var x=10;
    document.getElementById("negation").innerHTML="x= " +-x;
}

var x = 5;  //increment
x++;
document.write(x);

var y = 5.25;  //decrement
y--;
document.write(y);

window.alert(Math.random()*10); //random number alert between 1-10

function object() {
document.getElementById("object").innerHTML= Math.round(7.2); //rounds to nearest whole number
}