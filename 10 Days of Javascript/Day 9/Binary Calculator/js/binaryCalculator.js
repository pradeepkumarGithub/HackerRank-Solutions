let screen = document.getElementById("res");

document.getElementById("btn0").onclick = () => (screen.innerHTML += "0");
document.getElementById("btn1").onclick = () => (screen.innerHTML += "1");
document.getElementById("btnClr").onclick = () => (screen.innerHTML = "");
document.getElementById("btnSum").onclick = () => (screen.innerHTML += "+");
document.getElementById("btnSub").onclick = () => (screen.innerHTML += "-");
document.getElementById("btnMul").onclick = () => (screen.innerHTML += "*");
document.getElementById("btnDiv").onclick = () => (screen.innerHTML += "/");

document.getElementById("btnEql").onclick = () => {
    let expression = res.innerHTML;
    expression = expression.split(/(\+|-|\*|\/)/);
    let operand1 = parseInt(expression[0], 2);
    let operator = expression[1];
    let operand2 = parseInt(expression[2], 2);
    let result;
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
    }

    screen.innerHTML = result.toString(2);
};
