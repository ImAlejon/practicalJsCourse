// Código del cuadrado
console.group('Cuadrado');

function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado;
};

console.groupEnd();

// Código del triángulo
console.group('Triángulo');

function perimetroTriangulo(lado1, lado2, base){
    const numOne = parseFloat(lado1);
    const numTwo = parseFloat(lado2);
    const numThree = parseFloat(base);
    return numOne + numTwo + numThree;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function largestSide(sideOne, sideTwo, base){
    if(sideOne > sideTwo && sideOne > base){
        return {
            hypotenuse: sideOne,
            sideOne: sideTwo,
            sideTwo: base
        }
    } else if(sideTwo > sideOne && sideTwo > base){
        return {
            hypotenuse: sideTwo,
            sideOne: sideOne,
            sideTwo: base
        }
    } else{
        return {
            hypotenuse: base,
            sideOne: sideOne,
            sideTwo: sideTwo
        }
    }
};

function alturaTriangulo(ladoUno, ladoDos, base){
    const data = largestSide(ladoUno, ladoDos, base);
    const h = data.hypotenuse;
    const a = data.sideOne;
    const b = data.sideTwo; 
    const partOne = a * b;
    const height = partOne / h;
    return height;
}
console.groupEnd();

// Código del circulo

console.group('Círculos');


//Diámetro
function diametroCirculo(radio){
    return radio * 2
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

//Aquí interactuamos con el HTML

//Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    document.getElementById('result').innerText = perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById('result').innerText = area;
    
}

//Triángulo

function calcularPerimetroTriangulo(){
    const sideOne = document.getElementById('InputTrianguloLadoUno').value;
    const sideTwo = document.getElementById('InputTrianguloLadoDos').value;
    const base = document.getElementById('InputTrianguloBase').value;
    const result = perimetroTriangulo(sideOne, sideTwo, base);
    document.getElementById('result').innerText = result;
}
 
function calcularAreaTriangulo(){
    const sideOne = document.getElementById('InputTrianguloLadoUno').value;
    const sideTwo = document.getElementById('InputTrianguloLadoDos').value;
    const base = document.getElementById('InputTrianguloBase').value;
    const height = alturaTriangulo(sideOne, sideTwo, base);
    const area = areaTriangulo(base, height);
    document.getElementById('result').innerText = area;

}

//Círculo

function calcularPerimetroCirculo(){
    const radio = document.getElementById('InputCirculo').value;
    const perimeter = perimetroCirculo(radio);
    document.getElementById('result').innerText = perimeter;
}

function calcularAreaCirculo(){
    const radio = document.getElementById('InputCirculo').value;
    const area = areaCirculo(radio);
    document.getElementById('result').innerText = area;
}

function calcularDiametroCirculo(){
    const radio = document.getElementById('InputCirculo').value;
    const diameter = diametroCirculo(radio);
    document.getElementById('result').innerText = diameter;
    
}