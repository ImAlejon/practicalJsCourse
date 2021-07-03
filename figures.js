// Código del cuadrado
console.group('Cuadrado');
//const ladoCuadrado = 5;
//console.log(`los lados de cuadrado miden ${ladoCuadrado}cm`);

function perimetroCuadrado(lado){
    return lado * 4
}

//console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`);

function areaCuadrado(lado){
    return lado * lado;
};

//console.log(`El area del cuadrado es ${areaCuadrado}cm^2`);

console.groupEnd();

// Código del triángulo
console.group('Triángulo');

// const ladoTrianguloUno  = 6;
// const ladoTrianguloDos = 6;
// const baseTriangulo = 4;

// console.log(
//     `Los lados del triángulo miden: ${ladoTrianguloUno}cm, ${ladoTrianguloDos}cm, ${baseTriangulo}cm`
//     );

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo es ${alturaTriangulo}cm`);

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}
// console.log(`El perimetro del triángulo es ${perimetroTriangulo}cm`);
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log(`El area del triángulo es ${areaTriangulo}cm^2`);

console.groupEnd();

// Código del circulo

console.group('Círculos');

//Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es ${radioCirculo}cm`);

//Diámetro
function diametroCirculo(radio){
    return radio * 2
}
// console.log(`El diámetro del circulo es ${diametroCirculo}cm`);

//PI
const PI = Math.PI;
// console.log(`PI es: ${PI}cm`);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}
// console.log(`El perimetro del circulo es ${perimetroCirculo}cm`);

//Área
function areaCirculo(radio){
    return (radio * radio) * pi;
}

// console.log(`El area del circulo es ${areaCirculo}cm^2`);
console.groupEnd();
