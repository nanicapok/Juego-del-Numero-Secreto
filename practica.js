function HelloWorld() {
    console.log("hola mundo");
    return;
}
HelloWorld();

function saludo(nombre) {
    console.log("Hola " + nombre + "!");
    return;
}
saludo("hernan");

function numeroDoble(numero) {
    console.log(numero*2);
    return;
}
numeroDoble(5);

function promedioDeTres(num1,num2,num3) {
    console.log((num1 + num2 + num3)/3);
    return;
}
promedioDeTres(3,3,3);

function numeroMayor(a, b) {
    console.log(a > b ? a : b);
    return;
}
numeroMayor(2,4);

function potenciacion(numero) {
    console.log(numero * numero);
    return;
}
potenciacion(5);