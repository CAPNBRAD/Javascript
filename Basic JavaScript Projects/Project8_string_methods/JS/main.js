function Sentence() {       //concatenate of a sentence
    var part_1 = "I need ";
    var part_2 = "to stop ";
    var part_3 = "wasting time ";
    var part_4 = "on YouTube ";
    var part_5 = "tutorials!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("combined").innerHTML = whole_sentence;
}

function slice_method() {  //slice method to cut portion of text out
    var Sentence = "Brad tried hs hardest to pass the JavaScript course.";
    var Section = Sentence.slice(0,10);
    document.getElementById("Slice").innerHTML = Section;
}

function UpperF() {     //converts text to uppercase() method
    let text = document.getElementById("Upper").innerHTML;
    document.getElementById("Upper").innerHTML = text.toUpperCase();
}

let text = "Brad has the best grades in town!"  //search() method
let position = text.search("grades");
document.getElementById("grades").innerHTML = position;

function string_Method() {   //strings together multiple strings
    var C = 187;
    document.getElementById("Numberstring").innerHTML = C.toString();
}

function precision_Method() {   //precision method, brings to certain amout of numbers then rounds number
    var C = 90210.86753097620401;
    document.getElementById("Precision").innerHTML = C.toPrecision(6);
}

let num = 72.8742;   //provides number to 3 decimal places
let n = num.toFixed(3);
document.getElementById("Fixednum").innerHTML = n;

let text1 = "Hi there, can i have good grades please?"; //returns the primitive value of a string-not entirely sure what that is
let result = text.valueOf();
document.getElementById("value1").innerHTML = result;