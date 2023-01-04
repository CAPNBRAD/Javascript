document.write("dog"+5);  //coercion

document.write(typeof "Word");

document.write(typeof 5);

document.write("10"+5); //coercion

document.write(10>2);  //true/false statements
document.write(10<2);
document.write(10 == 10);
document.write(3==11);

console.log(2+8);  //writing to console log press f12 then console to view
console.log(100<5);
console.log(10<100);

x=10        //comparison operations
y=15
document.write(x===y);

v=5
r=5
document.write(v===r);

c="dog"
d=5
document.write(c===d);

e="5"
f=5
document.write(e===f)

g=5
h="five"
document.write(g===h);
 //logical operators
document.write(3>2 && 8>3);    //and  true

document.write(6>11 && 9>3);        //and false

document.write(4>9||9>3);       //or true

document.write(4>9||11>15);  //or false

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5>10);
}