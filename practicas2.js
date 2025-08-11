function calcularIMC(peso, altura) {
    let IMC = peso / (altura * altura);
    return IMC.toFixed(2); //redondea a 2 decimales
}

console.log(calcularIMC(90, 1.90))

function calcularValorFactorial(numero) {
    if(numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}
console.log(calcularValorFactorial(9))

//calcular factorial
function factorial(n) {
    if (n < 0) {
        return "No existe factorial de números negativos";
    }
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function dolarPesos(dolar) {
    let pesosArgentinos = 1315.38;
    return dolar * pesosArgentinos;
}
console.log(`son ${dolarPesos(5).toFixed(2)} pesos`)

function areaPerimetroRectangulo(base, altura) {
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    console.log("area de un rectangulo = " + area);
    console.log("perimetro de un rectangulo= " + perimetro);
}
areaPerimetroRectangulo(5, 3);

function perimetroAreaCirculo(radio) {
    let area = 3.1416 * (radio * radio);
    let perimetro = 2 * 3.1416 * radio;
    console.log(`area circulo = ${area}`);
    console.log(`perimetro de un circulo = ${perimetro}`);
}
perimetroAreaCirculo(4);

function tablaMultiplicar(num) {
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        console.log(`${num} X ${i} = ${resultado}`);
    }
}
tablaMultiplicar(9);