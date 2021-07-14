const precio = document.querySelector("#product_price");
const descuento = document.querySelector("#product_discount");
const result = document.querySelector("#resultado");
const result_description = document.querySelector("#descripcion");
const cupon_input = document.querySelector("#cupon");
const CUPON = '$Pr3mio';
const DESCUENTO_CUPON = 10;

const priceWithDiscount = (precio, porcentaje) => {
    let resultado = precio * (100 - porcentaje) / 100;
    return resultado
}

function calcularPrecio() {
    let precio_value = Number(precio.value);
    let discount_value = Number(descuento.value);
    let user_cupon = cupon_input.value;
    let resultado;
    if(user_cupon === CUPON){
        let descuento_extra = discount_value + DESCUENTO_CUPON;
        resultado = priceWithDiscount(precio_value, descuento_extra)
        result_description.innerHTML = `Se ha aplicado un descuento del ${descuento_extra}%. ${discount_value}% 
        del descuento normal más ${DESCUENTO_CUPON}% del cupón`
    }else {
        resultado = priceWithDiscount(precio_value, discount_value);
        result_description.innerHTML = 'El código de tu cupón no es válido'

    }
    result.innerHTML = `Precio: $${resultado}.`;
    /* let resultado = priceWithDiscount(precio_value, discount_value);
    result.innerHTML = `Precio: $${resultado}.`; */
}