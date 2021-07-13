const PI = Math.PI;
const square_input = document.querySelector("#square_input");
const square_area_result = document.querySelector("#area_square_result");
const square_perimeter_result = document.querySelector("#perimeter_square_result");

const triangle_sideA = document.querySelector("#triangle_input_sideA");
const trinagle_sideB = document.querySelector("#triangle_input__sideB");
const triangle_base = document.querySelector("#triangle_input__Base");
const triangle_area_result = document.querySelector("#area_triangle_result");
const triangle_perimeter_result = document.querySelector("#perimeter_triangle_result");

const circle_input = document.querySelector("#circle_input");
const circle_area_result = document.querySelector("#area_circle_result");
const circle_perimeter_result = document.querySelector("#perimeter_circle_result");


//Cuadrado
const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado **2;

function getSquareArea(){
    let value = square_input.value;
    let resultado = areaCuadrado(value);
    square_area_result.innerHTML = `Área: ${resultado} cm`
}
function getSquarePerimeter() {
    let value = square_input.value;
    let resultado = perimetroCuadrado(value);
    square_perimeter_result.innerHTML = `Perímetro: ${resultado} cm`
}
 

//Triángulo 
 console.group("Triángulo")
 const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base; 
 const areaTriangulo = (lado1, base) => {
    let altura = Math.sqrt((base / 2) **2 + lado1 **2).toFixed(2);
    let area = base * altura / 2;
    return area;
}

function getTriangleArea(){
    let value_sideA = Number(triangle_sideA.value);
    let value_base = Number(triangle_base.value);
    let resultado = areaTriangulo(value_sideA, value_base);
    triangle_area_result.innerHTML = `Área: ${resultado}`
}

function getTrianglePerimeter(){
    let value_sideA = Number(triangle_sideA.value);
    let value_sideB = Number(trinagle_sideB.value);
    let value_base = Number(triangle_base.value);
    let resultado = perimetroTriangulo(value_sideA, value_sideB, value_base);
    triangle_perimeter_result.innerHTML = `Perímetro: ${resultado}`
}


//Circulo 
 console.group("Circulo")
 const perimetroCirculo = radio => PI * (radio * 2);
 const areaCirculo = radio => PI * (radio **2);

 function getCircleArea() {
    let radio_value = circle_input.value;
    let resultado = areaCirculo(radio_value).toFixed(2);
    circle_area_result.innerHTML = `Área: ${resultado}`
 }

 function getCirclePerimeter(){
     let radio_value = circle_input.value;
     let resultado = perimetroCirculo(radio_value).toFixed(2);
     circle_perimeter_result.innerHTML = `Perímetro: ${resultado}`
 }
 console.groupEnd();