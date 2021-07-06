let mediana;
const numbers = [3,2,4];
const halfOfTheArray = parseInt(numbers.length / 2);

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;   
    return promedioLista 
}

function isPair(numerito){
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function compareNumbers(a, b) {
    return a - b;
}

function sortArray(){
    numbers.join();
    numbers.sort();
    numbers.sort(compareNumbers);
}

sortArray(numbers);
console.log(mediana)
if(isPair(numbers.length)){

    const elemento1 = numbers[halfOfTheArray - 1];
    const elemento2 = numbers[halfOfTheArray];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;

} else {

    mediana = numbers[halfOfTheArray];

}