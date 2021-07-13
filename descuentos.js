const precio = document.querySelector("#product_price");
const descuento = document.querySelector("#product_discount");
const result = document.querySelector("#resultado")
const result_description = document.querySelector("#descripcion")

const priceWithDiscount = (precio, porcentaje) => {
    let resultado = precio * (100 - porcentaje) / 100;
    return resultado
}

function calcularPrecio() {
    let precio_value = precio.value;
    let discount_value = descuento.value;
    let resultado = priceWithDiscount(precio_value, discount_value);
    result.innerHTML = `Precio: $${resultado}.` ;
    result_description.innerHTML =  `Descuento del ${discount_value}%`;
}