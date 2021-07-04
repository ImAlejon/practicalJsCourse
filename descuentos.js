 const precioOriginal = 100;
 const descuento = 15;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajePrecioConDescuento) / 100;       

    return PrecioConDescuento;
};


//  console.log({
//      precioOriginal,
//      descuento,
//      porcentajePrecioConDescuento,
//      PrecioConDescuento
//  });
