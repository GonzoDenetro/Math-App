const precio = document.querySelector("#product_price");
const descuento = document.querySelector("#product_discount");
const result = document.querySelector("#resultado")

const priceWithDiscount = (precio, porcentaje) => {
    let resultado = precio * (100 - porcentaje) / 100;
    return resultado
}

function calcularPrecio() {
    let precio_value = precio.value;
    let discount_value = descuento.value;
    let resultado = priceWithDiscount(precio_value, discount_value);
    result.innerHTML = `El precio de tu producto con descuento es $${resultado}. Se aplicó un descuento del ${discount_value}%`
}