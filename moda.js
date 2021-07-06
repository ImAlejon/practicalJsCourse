const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    1,
    3,
];

const lista1Count = {};

lista1.map(
    function(elemento) {
        if(lista1Count[elemento]){
            console.log(lista1Count[elemento])
            lista1Count[elemento] += 1;
        } else {
            console.log(lista1Count[elemento])
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Arr = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = lista1Arr[lista1Arr.length - 1];