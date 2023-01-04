var x= 4
var y= 5
document.write(x + y + 10); //global variables

document.write(x + w);  //undefined error for w

var w= 9
document.write(x + y + w);  

function get_Date() {       //checks date to see if its before noon
    if (new Date().getHours() <12) {
    document.getElementById("mymethod").innerHTML = "Please make me some Soup!";  // if after noon returns make me soup
    }
}



function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >=19) {   //sets age requirement
        Skydive = "You are old enough to skydive!"; // if over 19 you are allowed
    }
    else {
        Skydive = "You are not old enough to skydive!";  //failure condition
    }
    document.getElementById("How_old_are_you?").innerHTML = Skydive;  
}

function Time_Function() {
    var Time = new Date().getHours();  //determines time of day
    var Reply;
    if (Time < 12 == Time > 0) {  //sets morning parameters
        Reply = "It is Morning";
    }
    else if (Time >= 12 == Time < 18) {  //set afternoon
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is Evening time";  //sets evening
    }
    document.getElementById("Time_of_day").innerHTML = Reply;  //delivers reply message
}