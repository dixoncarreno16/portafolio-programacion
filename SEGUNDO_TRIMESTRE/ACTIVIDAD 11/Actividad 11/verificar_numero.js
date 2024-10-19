   function verificarNumero(numero) {
        if (numero > 0) {
            console.log("El número es positivo");
        } else if (numero < 0) {
            console.log("El número es negativo");
        } else {
            console.log("El número es cero");
        }
    }
    function verificarNumeroDesdeInput() {
        const numero = parseFloat(document.getElementById('numberInput').value);
        verificarNumero(numero);
    }