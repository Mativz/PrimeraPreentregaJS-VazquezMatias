// Función para calcular pagos en cuotas
function calcularCuotas(monto, cuotas) {
    // Verificar que el número de cuotas sea válido (mayor que cero)
    if (cuotas <= 0) {
      console.log("El número de cuotas debe ser mayor que cero.");
      return;
    }
  
    // Calcular el monto de cada cuota
    var montoPorCuota = monto / cuotas;
  
    // Imprimir el detalle de las cuotas
    console.log("Detalle de pagos en cuotas:");
    for (var i = 1; i <= cuotas; i++) {
      console.log("Cuota " + i + ": $" + montoPorCuota.toFixed(2));
    }
  }
  
  // Ejemplo de uso
  var montoTotal = 1000;
  var numeroDeCuotas = 5;
  
  calcularCuotas(montoTotal, numeroDeCuotas);
  


