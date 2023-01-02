function My_First_Function_page()    {       //This defines and names a function
    var str = "You clicked the button!";    //defines the variable, gives string value on button click
    document.getElementById("Button_Text").innerHTML = str;     //puts the value of variable into html element
}

function My_First_Function_button()    {       //This defines and names a function
    var str = "Thats Good";    //defines the variable, what happens on button click
    document.getElementById("Button").innerHTML = str;     //puts the value of variable into html element
}

function myFunction() {  //creates concatenation function
    var sentence="I am suffering";
    sentence+=" a lot from this course! ";
    sentence+="Thanks for asking";
    document.getElementById("Concatenate").innerHTML=sentence;
}
