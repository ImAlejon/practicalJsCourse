// Código del cuadrado
const ladoCuadrado = 5;
console.group('Cuadrado');
console.log(`los lados de cuadrado miden ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;

console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(`El area del cuadrado es ${areaCuadrado}cm^2`);

console.groupEnd();

// Código del triángulo
console.group('Triángulo');

const ladoTrianguloUno  = 6;
const ladoTrianguloDos = 6;
const baseTriangulo = 4;

console.log(
    `Los lados del triángulo miden: ${ladoTrianguloUno}cm, ${ladoTrianguloDos}cm, ${baseTriangulo}cm`
    );

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTrianguloUno + ladoTrianguloDos + baseTriangulo;
console.log(`El perimetro del triángulo es ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triángulo es ${areaTriangulo}cm^2`);

console.groupEnd();

// Código del circulo

console.group('Círculos');

//Radio
const radioCirculo = 4;
console.log(`El radio del circulo es ${radioCirculo}cm`);

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del circulo es ${diametroCirculo}cm`);

//PI
const PI = Math.PI;
console.log(`PI es: ${PI}cm`);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del circulo es ${perimetroCirculo}cm`);

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El area del circulo es ${areaCirculo}cm^2`);

console.groupEnd();
