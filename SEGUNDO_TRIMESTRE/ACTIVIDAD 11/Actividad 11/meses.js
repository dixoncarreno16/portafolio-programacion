         function showMonth() {
                    const monthNumber = parseInt(document.getElementById('monthInput').value);
                    const monthNames = [
                        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
                    ];

        
                    if (monthNumber >= 1 && monthNumber <= 12) {
                        document.getElementById('monthDisplay').innerHTML = "El mes es: " + monthNames[monthNumber - 1];
                    } else {
                        document.getElementById('monthDisplay').innerHTML = "Por favor ingrese un número válido del 1 al 12.";
                    }
                }