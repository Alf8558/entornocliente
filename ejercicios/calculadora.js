window.onload;{
    sumar();
    restar();
    multiplicar();
    dividir();
}
function sumar() {
    var num1 = document.getElementById("1,2,3,4,5,6,7,8,9").value;
    var num2 = document.getElementById("1,2,3,4,5,6,7,8,9").value;
    var resultado = num + num;
    document.getElementById("resultado").value = resultado;
}

function restar() {
    var num1 = document.getElementById("1,2,3,4,5,6,7,8,9").value;
    var num2 = document.getElementById("1,2,3,4,5,6,7,8,9").value;
    var resultado = num - num;
    document.getElementById("resultado").value = resultado;
}

function multiplicar() {
    var num1 = document.getElementById("1,2,3,4,5,6,7,8,9").value;
    var num2 = document.getElementById("1,2,3,4,5,6,7,8,9").value;
    var resultado = num * num;
    document.getElementById("resultado").value = resultado;
}

function dividir() {
    var num1 = document.getElementById("1,2,3,4,5,6,7,8,9").value;
    var num2 = document.getElementById("1,2,3,4,5,6,7,8,9").value;
    if (num2 !== 0) {
        var resultado = num1 / num2;
        document.getElementById("resultado").value = resultado;
    } else {
        alert("No se puede dividir entre cero");
    }
}