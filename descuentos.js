const precioOriginal = 100;
const descuento = 15;
const coupons =[
    {
        couponName: 'hola',
        discount: 20
    },
    {
        couponName: 'bienvenido',
        discount: 30
    },
    {
        couponName: 'xd',
        discount: 80
    }
]

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajePrecioConDescuento) / 100;       

    return PrecioConDescuento;
};

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById('inputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('inputDiscount');
    const discountValue = inputDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById('resultP');
    resultP.innerText = `El precio con con descuento son: $${precioConDescuento}`;
};

function recognizeCupons(){
    const value = document.getElementById('cupons').value;
    const resultC = document.getElementById('resultC');
    for (let i = 0; i < coupons.length; i++) {
        const comparison = coupons[i].couponName == value
        if(comparison){
            resultC.innerText = 
            `¡Tu cupón es valido!, tienes un ${coupons[i].discount}% de descuento`
        }else if(!comparison){
            resultC.innerText =
            `¡Tu cupón no es valido!`
        }
    }
}
