function Pizza() { //basic dictionary function
    var Pizza = {
        Cheese:"Mozarella",
        Crust:"thin",
        Sauce:"Tomato",
        Pickup:5,
        Delivery:"Yes"
        };
    delete Pizza.Delivery;    //deletes the delivery value before execution
    document.getElementById("Dictionary").innerHTML = Pizza.Delivery; //attempts to call Pizza.Delivery value
}

function Pizza1() { //basic dictionary function
    var Pizza = {
        Cheese:"Mozarella",
        Crust:"thin",
        Sauce:"Tomato",
        Pickup:5,
        Delivery:"Yes"
        };
    document.getElementById("Dictionary").innerHTML = Pizza.Delivery; //attempts to call Pizza.Delivery value
}