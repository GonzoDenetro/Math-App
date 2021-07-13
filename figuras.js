//Cuadrado
const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado **2;

 //Triángulo 
 console.group("Triángulo")

 const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base; 
 const areaTriangulo = (lado1, lado2, base) => {
    const altura = Math.sqrt((base / 2) **2 + lado1 **2).toFixed(2)
    let area = base * altura / 2;
    return area;
}

//Circulo 
 console.group("Circulo")
 const PI = Math.PI;

 const perimetroCirculo = radio => PI * (radio * 2);
 const areaCirculo = radio => PI * (radio **2);
 console.groupEnd();