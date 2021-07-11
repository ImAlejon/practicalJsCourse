function getTrend(arr){
    const arrObj = {};
    arr.map((elemento) => {(arrObj[elemento]) ? arrObj[elemento] += 1 : arrObj[elemento] = 1;});
    const result = Object.entries(arrObj).sort((a, b) => a[1] - b[1]);
    const trend = result[result.length - 1];
    return trend;
}

//const array = [1,2,1,1,1,5,6,8,5,5,5,5,5,5,5]; example array, try it!