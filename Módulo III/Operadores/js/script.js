console.log("Hello, World");



function init() {

    var inputOne = document.getElementById('numberOne').value;
    var inputTwo = document.getElementById('numberTwo').value;

    var numberOne = parseInt(inputOne);
    var numberTwo = parseInt(inputTwo);

    spanOne.innerHTML = numberOne
    spanTwo.innerHTML = numberTwo

    var testeOne = numberOne == numberTwo ? 'Iguais' : 'Diferentes';
    testeLogico.innerHTML = testeOne;
    console.log(testeOne)

    var sumNumber = numberOne + numberTwo;
    sum.innerHTML = sumNumber;
    console.log(sumNumber)

    var testeTwo = sumNumber >= 10 ? '>=10' : '<=10';
    var testeThree = sumNumber >= 20 ? '>=20' : '<=20';

    console.log(testeTwo)
    console.log(testeThree)


    ten.innerHTML = testeTwo;
    twenty.innerHTML = testeThree;

}

function set() {

    var status = document.getElementById('altomatic');

    if (status.checked) {
        console.log(status)
        document.getElementById('numberOne').setAttribute("onchange", "init()");
        document.getElementById('numberTwo').setAttribute("onchange", "init()");
    } else {
        console.log("disable")
    }

    //var testeValue = value == on ?  
    // 
    //
    // :
    // console.log("OFF");

}

function reset() {

    spanOne.innerHTML = '  '
    spanTwo.innerHTML = '  '

    testeLogico.innerHTML = '  ';
    sum.innerHTML = ' ';


    ten.innerHTML = '';
    twenty.innerHTML = '';

    console.log('Limpo')
}

//var currentNumberWrapper = document.getElementById('currentNumber');