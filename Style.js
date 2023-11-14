console.log("Conectado")

// Función para calcular pagos en cuotas
function calcularCuotas(montoTotal, numeroCuotas) {
    // Verificar si el número de cuotas es válido
    if (numeroCuotas <= 0) {
        console.log("El número de cuotas debe ser mayor que cero.");
        return;
    }

    // Calcular el monto de cada cuota
    const montoCuota = montoTotal / numeroCuotas;

    // Imprimir los detalles de cada cuota utilizando un bucle for
    for (let i = 1; i <= numeroCuotas; i++) {
        console.log(`Cuota ${i}: $${montoCuota.toFixed(2)}`);
    }
}

// Ejemplo de uso
const montoTotal = 1000; // Monto total a pagar
const numeroCuotas = 3;  // Número de cuotas

// Llamar a la función para calcular e imprimir las cuotas
calcularCuotas(montoTotal, numeroCuotas);

