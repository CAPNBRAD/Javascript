function my_Function() {        //example of Not a Number
    document.getElementById("Test").innerHTML=0/0;
}


function my_Function1() {       //NaN true value
document.getElementById("Test1").innerHTML= isNaN('This is a string');
}

function my_Function2() {
    document.getElementById("Test2").innerHTML= isNaN('007'); //example of NaN False
}

document.write(2E310); //example of infinity using hex
document.write(-1.8976931348623157E308); //example of negative infinity using decimal