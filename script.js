function ijad(op) {

    document.getElementById("display").value += op;

}

function sqrRoot() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(tempStore));

}



function fLog() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log(tempStore));

}

function atangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.atan(tempStore));

}

function tangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.tan(tempStore));

}

function cosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.cos(tempStore));

}

function sine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sin(tempStore));

}



function answer() {
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    //alert(result);
    Exp.value = result;
}

function ce() {

    var elem = document.getElementById("display").value;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);

    document.getElementById("display").value = a;

}

function clr() {

    var elem = document.getElementById("display").value;
    document.getElementById("display").value ="";

}