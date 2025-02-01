const conversionTable = {
    1000: 20.00,
    2000: 40.00,
    3000: 60.00,
    4000: 80.00,
    5000: 100.00,
    6000: 120.00,
    7000: 140.00,
    8000: 160.00,
    9000: 180.00,
    10000: 207.00,
    20000: 398.00,
    30000: 590.00,
    40000: 782.00,
    50000: 973.00,
    60000: 1165.00,
    70000: 1360.00,
    80000: 1550.00,
    90000: 1750.00,
    100000: 1950.00
};
let minRecarga = 10000; // Mínima recarga en pesos

// Función para convertir pesos a bolívares
function convertToBs() {
    const montoPesos = parseInt(document.getElementById('montoPesos').value, 10);
    const minRecargaMsg = document.getElementById('minRecargaMsg');
    let montoBs = 0;

    if (montoPesos < minRecarga) {
        minRecargaMsg.style.display = 'block';
        document.getElementById('montoBs').value = '';
        return;
    } else {
        minRecargaMsg.style.display = 'none';
    }

    // Descomponer el monto en múltiplos de 10,000 y 1,000
    const multiplesDeDiezMil = Math.floor(montoPesos / 10000) * 10000;
    const multiplesDeMil = montoPesos % 10000;

    if (multiplesDeDiezMil in conversionTable) {
        montoBs += conversionTable[multiplesDeDiezMil];
    }
    if (multiplesDeMil in conversionTable) {
        montoBs += conversionTable[multiplesDeMil];
    }

    document.getElementById('montoBs').value = `${montoBs.toFixed(2)} BS`; // Mostrar en formato de 2 decimales
}
