const salariosMexico = mexico.map(persona => persona.salario);
console.log(salariosMexico);

const salariosMexAscendente = salariosMexico.sort((a, b) => a - b );
console.log(salariosMexAscendente)

const salariosMexMayoraMenor = salariosMexico.sort((a, b) => b - a);


const calcularMedianaSalarios = (array) => {
    let mitad = parseInt(array.length / 2);
    let mediana;
    if(array.length % 2 == 0){
        let elemento1 = array[mitad];
        let elemento2 = array[mitad - 1];
        return mediana = (elemento1 + elemento2) / 2;
    }
    else {
        return mediana[mitad]
    }
}

console.log(calcularMedianaSalarios(salariosMexAscendente))

//TOP 10% SALARIOS

const SalariosTop = []

const Top10Salarios = array => {
    let resultado;
    let Top10 = (array.length * .10);
    console.log(Top10);

    for(let i = 0; i < Top10; i++){
        SalariosTop.push(array[i])
    }
    console.log(SalariosTop)
    return resultado = calcularMedianaSalarios(SalariosTop)
}
console.log(Top10Salarios(salariosMexMayoraMenor))


function Top10SalariosSplice(array) {
    let spliceStart = (array.length * 90) / 100;
    let spliceCount = array.length - spliceStart;
    let salariosTopMex = array.splice(spliceStart, spliceCount)
    let medianaTop10 = calcularMedianaSalarios(salariosTopMex)
    console.log(medianaTop10)
}
Top10SalariosSplice(salariosMexAscendente)

//Ganancias 
const incomes = document.querySelector("#incomes_input");
const expenses = document.querySelector("#expenses_input");
const result = document.querySelector("#result");

const calculateProfits = (incomes, expenses) =>  ganancia = incomes - expenses;

function getProfits(){
    let incomes_value = incomes.value;
    let expenses_value = expenses.value;
    let ganancia = calculateProfits(incomes_value, expenses_value);
    if(ganancia < 0) {
        result.innerHTML = `Tienes perdidas de $${ganancia}`; 
    }
    else {
        result.innerHTML = `Tienes ganancias de $${ganancia}`;
    }
}
