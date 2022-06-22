console.log("Hello, World");

var value = parseFloat(2);


function logLetras() {
    let palavra = document.getElementById('numberOne').value;


    for (letra of palavra) {
        console.log(letra);
    }
}

function set() {
    var status = value;

    if (status % 2 == 0) {
        value = status + 1;
        console.log("enable")
        console.log(status)
        document.getElementById('numberOne').setAttribute("onchange", "init()");
    } else {
        value = status + 1;
        console.log("disable")
        console.log(status)
        document.getElementById('numberOne').setAttribute("onchange", "");
    }
}


function logNumeros() {
    const nums = [30, 20, 10, 50, 100];
    for (num of nums) {
        console.log(num);
    }

}