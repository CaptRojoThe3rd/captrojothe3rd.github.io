var displayed_text = "";
var value_1 = 0;
var value_2 = 0;
var negative = false;
var operation = "";
var equal_used = false;

function update() {
    var text_to_display = "";
    if (negative && equal_used == false) {
        text_to_display = "-";
    }
    text_to_display = text_to_display + displayed_text;
    document.getElementById("display").value = text_to_display;
    document.getElementById("power").style.backgroundColor = "#3838a0";
    document.getElementById("plus").style.backgroundColor = "#3838a0";
    document.getElementById("minus").style.backgroundColor = "#3838a0";
    document.getElementById("multiply").style.backgroundColor = "#3838a0";
    document.getElementById("divide").style.backgroundColor = "#3838a0";
    if (operation == "power") {
        document.getElementById("power").style.backgroundColor = "#50a0d0";
    }
    if (operation == "plus") {
        document.getElementById("plus").style.backgroundColor = "#50a0d0";
    }
    if (operation == "minus") {
        document.getElementById("minus").style.backgroundColor = "#50a0d0";
    }
    if (operation == "multiply") {
        document.getElementById("multiply").style.backgroundColor = "#50a0d0";
    }
    if (operation == "divide") {
        document.getElementById("divide").style.backgroundColor = "#50a0d0";
    }
}

function calculate() {
    var old_value_1 = value_1;
    var old_value_2 = value_2;
    if (negative) {
        value_2 *= -1
    }
    if (operation == "plus") {
        value_1 += value_2;
        value_2 = 0;
    }
    if (operation == "minus") {
        value_1 -= value_2;
        value_2 = 0;
    }
    if (operation == "multiply") {
        value_1 *= value_2;
        value_2 = 0;
    }
    if (operation == "divide") {
        value_1 /= value_2;
        value_2 = 0;
    }
    if (operation == "power") {
        value_1 = value_1 ** value_2;
        value_2 = 0;
    }
    displayed_text = value_1.toString();
    if (value_1 < 0) {
        negative = true;
    }
    if (operation == "plus" || operation == "minus" || operation == "multiply") {
        if (Number.isInteger(value_1) == false) {
            var value_1_string = old_value_1.toString()
            var value_2_string = old_value_2.toString()
            if (value_1_string.length > value_2_string.length) {
                if (displayed_text.length > value_1_string.length + 1) {
                    var fixed_string = displayed_text.substring(0, value_1_string.length);
                    displayed_text = fixed_string;
                }
            } else {
                if (displayed_text.length > value_2_string.length + 1) {
                    var fixed_string = displayed_text.substring(0, value_2_string.length);
                    displayed_text = fixed_string;
                }
            }
        }
    }
    operation = "";
}

function one() {
    if (equal_used == true) {
        equal_used = false;
        displayed_text = "";
    }
    displayed_text = displayed_text + "1";
    update();
}
function two() {
    if (equal_used == true) {
        equal_used = false;
        displayed_text = "";
    }
    displayed_text = displayed_text + "2";
    update();
}
function three() {
    if (equal_used == true) {
        equal_used = false;
        displayed_text = "";
    }
    displayed_text = displayed_text + "3";
    update();
}
function four() {
    if (equal_used == true) {
        equal_used = false;
        displayed_text = "";
    }
    displayed_text = displayed_text + "4";
    update();
}
function five() {
    if (equal_used == true) {
        equal_used = false;
        displayed_text = "";
    }
    displayed_text = displayed_text + "5";
    update();
}
function six() {
    if (equal_used == true) {
        equal_used = false;
        displayed_text = "";
    }
    displayed_text = displayed_text + "6";
    update();
}
function seven() {
    if (equal_used == true) {
        equal_used = false;
        displayed_text = "";
    }
    displayed_text = displayed_text + "7";
    update();
}
function eight() {
    if (equal_used == true) {
        equal_used = false;
        displayed_text = "";
    }
    displayed_text = displayed_text + "8";
    update();
}
function nine() {
    if (equal_used == true) {
        equal_used = false;
        displayed_text = "";
    }
    displayed_text = displayed_text + "9";
    update();
}
function zero() {
    if (equal_used == true) {
        equal_used = false;
        displayed_text = "";
    }
    displayed_text = displayed_text + "0";
    update();
}
function reset() {
    displayed_text = "";
    negative = false;
    operation = "";
    value_1 = 0;
    value_2 = 0;
    update();
}
function clear_display() {
    displayed_text = "";
    negative = false;
    update();
}
function dot() {
    if (equal_used == true) {
        equal_used = false;
        displayed_text = "";
    }
    if (displayed_text.includes(".") == false) {
        displayed_text = displayed_text + ".";
    }
    update();
}
function negative_positive() {
    if (negative) {
        negative = false;
    } else {
        negative = true;
    }
    update();
}
function power() {
    if (operation != "") {
        value_2 = parseFloat(displayed_text);
        calculate();
    } else {
        value_1 = parseFloat(displayed_text);
    }
    operation = "power";
    if (negative) {
        value_1 *= -1;
    }
    negative = false;
    displayed_text = "";
    update();
}
function plus() {
    if (operation != "") {
        value_2 = parseFloat(displayed_text);
        calculate();
    } else {
        value_1 = parseFloat(displayed_text);
    }
    operation = "plus";
    if (negative) {
        value_1 *= -1;
    }
    negative = false;
    displayed_text = "";
    update();
}
function minus() {
    if (operation != "") {
        value_2 = parseFloat(displayed_text);
        calculate();
    } else {
        value_1 = parseFloat(displayed_text);
    }
    operation = "minus";
    if (negative) {
        value_1 *= -1;
    }
    negative = false;
    displayed_text = "";
    update();
}
function multiply() {
    if (operation != "") {
        value_2 = parseFloat(displayed_text);
        calculate();
    } else {
        value_1 = parseFloat(displayed_text);
    }
    operation = "multiply";
    if (negative) {
        value_1 *= -1;
    }
    negative = false;
    displayed_text = "";
    update();
}
function divide() {
    if (operation != "") {
        value_2 = parseFloat(displayed_text);
        calculate();
    } else {
        value_1 = parseFloat(displayed_text);
    }
    operation = "divide";
    if (negative) {
        value_1 *= -1;
    }
    negative = false;
    displayed_text = "";
    update();
}
function equal() {
    equal_used = true;
    value_2 = parseFloat(displayed_text);
    calculate();
    update();
}