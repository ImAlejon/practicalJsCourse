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

function recognizeCoupons(){
    const couponValue = document.getElementById('cupons').value;
    const resultC = document.getElementById('resultC');

    if(couponValue == coupons[0].couponName){
        resultC.innerText = 
        `Tu cupón tiene un descuento de ${coupons[0].discount}%`;
    } else if(couponValue == coupons[1].couponName){
        resultC.innerText = 
        `Tu cupón tiene un descuento de ${coupons[1].discount}%`;
    } else if(couponValue == coupons[2].couponName){
        resultC.innerText = 
        `Tu cupón tiene un descuento de ${coupons[2].discount}%`;
    }else{
        resultC.innerText = 
        `Tu cupón  "${couponValue}"  no tiene ningún tipo de descuento`
    }
};