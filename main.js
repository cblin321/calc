function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
}

function operate(a, b, op) {
    if (op == "")
        return;
    if (op == "+")
        return add(a, b);
    else if (op == "-")
        return subtract(a, b);
    else if (op == "x")
        return multiply(a, b);
    return divide(a, b);
}
