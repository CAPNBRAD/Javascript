function Drink_Function() {  //switch keyword
    var Drink_Output;
    var Drinks = document.getElementById("Drink_input").value;
    var Drink_String = " is a great drink!";
    switch(Drinks) {
        case "Beer":
            Drink_Output = "Beer" + Drink_String;
        break;
        case "Whiskey":
            Drink_Output = "Whiskey" + Drink_String;
        break;
        case "Vodka":
            Drink_Output = "Vodka" + Drink_String;
        break;
        case "Gin":
            Drink_Output = "Gin" + Drink_String;
        break;
        case "Tequila":
            Drink_Output = "Tequila" + Drink_String;
        break;
        case "Water":
            Drink_Output = "Water" + Drink_String;
        break;
        default:
            Drink_Output = "Please enter a Drink exactly as written on the list!";
    }
    document.getElementById("Output").innerHTML = Drink_Output;
}

function Tricky_Text() { //elements by class name
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "Pretty tricky eh?";
}

var c = document.getElementById("Canvas1"); //canvas challenge creates a graphic in canvas frame
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hi I am Brad", 10, 50);

var D = document.getElementById("Canvas2");
var ctx = D.getContext("2d");
var grd = ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(20,20,150,100);