const temperatura_a_convertir = document.querySelector("#temperatura_convertir");
const temperatura_inicial = document.querySelector("#user_value");
const temperature_user_value = document.querySelector("#temperature_value")
const result = document.querySelector("#result")

const calcularTemperaturaC = (valor, temperatura) => {
    switch (temperatura){
        case "F°":
            return (valor * 9/5) + 32;
        case "K°":
            return valor + 273.15;
    }
}

const calcularTemperaturaF = (valor, temperatura) => {
    switch (temperatura){
        case "C°":
            return (valor - 32) * 5/9;
        case "K°":
            return (valor - 32) * 5/9 + 273.15;
    }
}
const calcularTemperaturaK = (valor, temperatura) => {
    switch (temperatura){
        case "C°":
            return valor - 273.15;
        case "F°":
            return (valor - 273.15) * 9/5 + 32;
    }
}

function getTemperature(){
    if(temperature_user_value.value === "C°"){
        let valor = Number(temperatura_inicial.value);
        let temperatura = temperatura_a_convertir.value;
        let temperaturaConvertida = calcularTemperaturaC(valor, temperatura);
        result.innerHTML = `${temperaturaConvertida}`
    }
    else if(temperature_user_value.value === "F°"){
        let valor = Number(temperatura_inicial.value);
        let temperatura = temperatura_a_convertir.value;
        let temperaturaConvertida = calcularTemperaturaF(valor, temperatura).toFixed(3); 
        result.innerHTML = `${temperaturaConvertida}`
    }
    else if(temperature_user_value.value === "K°"){
        let valor = Number(temperatura_inicial.value);
        let temperatura = temperatura_a_convertir.value;
        let temperaturaConvertida = calcularTemperaturaK(valor, temperatura).toFixed(3); 
        result.innerHTML = `${temperaturaConvertida}`
    }
}
