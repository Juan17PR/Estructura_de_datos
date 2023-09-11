function suma(x, y) {
    return x + y;
}

function resta(x, y) {
    return x - y;
}

function multiplicacion(x, y) {
    return x * y;
}

function division(x, y) {
    if (y === 0) {
        return "Error: No se puede dividir por cero";
    }
    return x / y;
}

function calculadora(operacion, x, y) {
    switch (operacion) {
        case "+":
            return suma(x, y);
        case "-":
            return resta(x, y);
        case "*":
            return multiplicacion(x, y);
        case "/":
            return division(x, y);
        default:
            return "Operación no válida";
    }
}

const resultado = calculadora("*", 5, 3);
console.log("Resultado:", resultado);