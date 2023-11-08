console.log("Conectado")

let MontoPrincipal = prompt("Ingresa Un Monto");
let Cuota = prompt("Ingresa nº de Cuotas");


function calcularCuota(montoPrincipal,numeroCuotas) {
    if (numeroCuotas <= 0) {
        console.log("El número de cuotas debe ser mayor que cero");
    } else {
        const tasaPeriodica = tasaInteres / 12; // Suponiendo pagos mensuales
        const cuota = (montoPrincipal * tasaPeriodica * Math.pow((1 + tasaPeriodica), numeroCuotas)) / (Math.pow((1 + tasaPeriodica), numeroCuotas) - 1);
        console.log("El pago mensual será: " + cuota);
    }
}
