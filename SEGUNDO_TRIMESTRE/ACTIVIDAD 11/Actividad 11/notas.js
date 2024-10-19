function convertirNota(nota) {
    let descripcion;
    if (nota >= 2 && nota <= 5.9) {
        descripcion = "Bajo";
    } else if (nota >= 6 && nota <= 7.9) {
        descripcion = "Básico";
    } else if (nota >= 8 && nota <= 9) {
        descripcion = "Alto";
    } else if (nota > 9 && nota <= 10) {
        descripcion = "Superior";
    } else {
        descripcion = "Nota inválida";
    }
    return descripcion;
}
function solicitarNota() {
    const nota = parseFloat(prompt("Ingrese la nota del examen (0-10):"));
    if (isNaN(nota)) {
        alert("Por favor ingrese un número correcto");
    } else {
        const descripcion = convertirNota(nota);
        alert(`La nota ${nota} es: ${descripcion}`);
    }
}

solicitarNota();
