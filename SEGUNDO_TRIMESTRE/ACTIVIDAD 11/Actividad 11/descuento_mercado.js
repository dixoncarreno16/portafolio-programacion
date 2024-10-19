    function calcularDescuento(montoCompra) {
        let descuento = 0;
        if (montoCompra >= 100000 && montoCompra <= 300000) {
            descuento = 0.05;
        } else if (montoCompra > 300000 && montoCompra <= 500000) {
            descuento = 0.10;
        } else if (montoCompra > 500000) {
            descuento = 0.15;
        }
        const montoDescuento = montoCompra * descuento;
        const totalAPagar = montoCompra - montoDescuento;
        return {
            montoCompra: montoCompra.toFixed(2),
            descuento: (descuento * 100).toFixed(2),
            montoDescuento: montoDescuento.toFixed(2),
            totalAPagar: totalAPagar.toFixed(2)
        };
    }
    function mostrarDescuento() {
        const montoCompra = parseFloat(document.getElementById('montoCompraInput').value);
        const resultado = calcularDescuento(montoCompra);
        document.getElementById('resultadoDescuento').innerHTML = `
          
            Descuento aplicado: ${resultado.descuento}%<br>
        `;
    }