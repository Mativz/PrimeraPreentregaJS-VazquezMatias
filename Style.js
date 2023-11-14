console.log("Conectado")

function calcularPagosEnCuotas(montoPrestamo, tasaInteresAnual, numeroCuotas) {
    // Calcular la tasa de interés mensual
    const tasaInteresMensual = tasaInteresAnual / 100 / 12;

    // Calcular el pago mensual utilizando la fórmula de amortización
    const pagoMensual = montoPrestamo * (tasaInteresMensual * Math.pow(1 + tasaInteresMensual, numeroCuotas)) / (Math.pow(1 + tasaInteresMensual, numeroCuotas) - 1);

    // Mostrar el pago mensual
    console.log(`El pago mensual es: $${pagoMensual.toFixed(2)}`);

    // Ciclo para mostrar el desglose de pagos mensuales
    for (let cuota = 1; cuota <= numeroCuotas; cuota++) {
        // Calcular la parte de interés del pago mensual
        const interesMensual = montoPrestamo * tasaInteresMensual;

        // Calcular la parte de capital del pago mensual
        const capitalMensual = pagoMensual - interesMensual;

        // Actualizar el saldo del préstamo
        montoPrestamo -= capitalMensual;

        // Mostrar el desglose de cada cuota
        console.log(`\nCuota ${cuota}:`);
        console.log(`  Pago mensual: $${pagoMensual.toFixed(2)}`);
        console.log(`  Interés mensual: $${interesMensual.toFixed(2)}`);
        console.log(`  Capital mensual: $${capitalMensual.toFixed(2)}`);
        console.log(`  Saldo restante: $${montoPrestamo.toFixed(2)}`);

        // Verificar si es la última cuota
        if (cuota === numeroCuotas) {
            console.log("\n¡Última cuota pagada!");

            // Ejemplo de condicional adicional
            if (montoPrestamo > 0) {
                console.log("Se ha pagado el préstamo, pero queda un saldo adicional.");
            } else {
                console.log("Préstamo completamente pagado.");
            }
        }
    }
}

// Ejemplo de uso
const montoPrestamo = 1000;  // Monto del préstamo
const tasaInteresAnual = 5;  // Tasa de interés anual
const numeroCuotas = 12;  // Número de cuotas

calcularPagosEnCuotas(montoPrestamo, tasaInteresAnual, numeroCuotas);
