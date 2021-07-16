const average = document.querySelector("#promedio_input");
const result_average = document.querySelector("#promedio_result");
const median = document.querySelector("#mediana_input");
const result_median = document.querySelector("#mediana_result")
const moda_input = document.querySelector("#moda_input");
const moda_result = document.querySelector("#moda_result");

//PROMEDIO
console.group("Promedio")
const calcularMedia = (iterable) => {
    /* let suma_elementos = 0; 
    for(var i = 0; i < array.length; i++){
        suma_elementos = suma_elementos + array[i];
    } */
    /* let suma_elementos = array.reduce( function (elemento, valorAcumulado = 0) {
        return valorAcumulado + element
        /*let suma = valorAcumulado + elemento
        return suma */
    /* }) */
    let array = iterable.split(", ");
    console.log(array)
    let suma_elementos = array.reduce((elemento1, elemento2) => Number(elemento1) + Number(elemento2))
    return promedio = suma_elementos / array.length;
    /* console.log(promedio) */
}
console.log(calcularMedia("5, 6, 7, 8, 9"))

function getAverage(){
    let average_value = average.value;
    let resultado = calcularMedia(average_value);
    result_average.innerHTML = `Promedio: ${resultado}`
}
console.groupEnd()
/* calcularMedia(lista) */

//MEDIANA
console.group("Mediana")
function calcularMediana(iterable){
    let array = iterable.split(", ");
    console.log(array)
    let lista_en_orden = array.sort((a, b) => a - b);
    console.log(lista_en_orden)
    let mitad_lista = parseInt(lista_en_orden.length / 2);
    let mediana; 

    if(lista_en_orden.length % 2 == 0){
        let elemento = lista_en_orden[mitad_lista];
        let elemento2 = lista_en_orden[mitad_lista - 1];
        mediana = calcularMedia([elemento, elemento2]);
    }
    else {
        mediana = lista_en_orden[mitad_lista];
    }
    console.log(mediana)    
    return mediana
}
calcularMediana("5, 6, 4, 7, 8, 9, 12, 10, 11,")

function getMedian(){
    let median_value = median.value;
    let result = calcularMediana(median_value);
    result_median.innerHTML = `Mediana: ${result}`;
}
console.groupEnd()

//MODA
console.group("Moda")
const repeticion_numeros = {};

const caulcularModa = (iterable) => {
    let array = iterable.split(", ")
    let count_elements = array.map(elemento => {
        if(repeticion_numeros[elemento]){
            repeticion_numeros[elemento] += 1;
        } 
        else {
            repeticion_numeros[elemento] = 1
        }
    }) 
    count_elements = Object.entries(repeticion_numeros);
    console.log(count_elements)
    let menorAmayor = count_elements.sort((a, b) => a[1] - b[1])
    /* let moda = menorAmayor[menorAmayor.length - 1]
    console.log(moda) */
    const modas = [];
    for(let i = 0; i < menorAmayor.length; i++){
        if(menorAmayor[i][1] == menorAmayor[menorAmayor.length - 1][1]){
            modas.push(menorAmayor[i])
        }
    }
    return modas
    /* if(modas.length > 1) {
        for(let i = 0; i < modas.length; i++){
            console.log(`La moda es ${modas[i][0]} y se repite ${modas[i][1]} veces`)
        }
    }
    else 
    {
        console.log(`La moda es ${modas[0][0]} se repite ${modas[0][1]} veces`)
    } */

} 
/* caulcularModa("1, 2, 2, 3, 4, 5, 2") */

function getModa(){
    let moda_value = moda_input.value;
    let result = caulcularModa(moda_value);
    if(result.length > 1) {
        for(let i = 0; i < result.length; i++){
           moda_result.innerHTML =`La moda es ${result[i][0]} y se repite ${result[i][1]} veces`;
        }
    }
    else 
    {
        moda_result.innerHTML = `La moda es ${result[0][0]} se repite ${result[0][1]} veces`
    }
}
console.groupEnd()
/* 
let obj = {}
function contar(elemento) {
    for(var i = 0; i < 4; i++){
        obj[elemento] = 1
    }
    console.log(obj)
}
contar(2, 3, 4, 2) */



/* function toArray(iterable){
    let array = [];
    for(var i = 0; i < iterable.length; i ++){
        let valorActual = Number(iterable[i]);
        if(valorActual == Number){
            array.push(valorActual)
        }
    }
    console.log(array)
} */
/* toArray('1, 2, 3')
 */
function splitear(iterable){
    let array =[];
    let numeros = iterable.split(", ")
    console.log(numeros)
}
splitear("1, 2, 3")