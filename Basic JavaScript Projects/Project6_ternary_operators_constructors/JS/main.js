function Ride_Function() {
    var Height, Can_ride; //this is the function to determine minimum height for rides
    Height = document.getElementById("Height").value;
    Can_ride=(Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";  //calls height and text about ride info
}


function Buy_Beer() {
    var Age, Can_buy;
    Age = document.getElementById("Age").value; //sets value of age
    Can_buy=(Age<19) ? "You are too young":"You are old enough";  //text that gets returned on click
    document.getElementById("Beer").innerHTML = Can_buy + " to buy beer.";
}

function Animal(Age, Species, Color) {  //sets up for animal info
    this.Animal_Age=Age;
    this.Animal_Species=Species;
    this.Animal_Color=Color;
}

var Terra= new Animal(20, "Dog", "Brown"); //animal info, returns on click
var Cheese= new Animal(10, "Cat", "Orange");
var Brad= new Animal(40, "Human", "Green");
function AnimalFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Terra is a " +Terra.Animal_Age + " Year old " + Terra.Animal_Species +
     " and she is " + Terra.Animal_Color;
}

function Nested_Function() {  //nested function to call +1 to starting point
    document.getElementById("Nested").innerHTML = Count();
    function Count() {
        var Starting_point = 10;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}