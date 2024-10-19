var A = parseInt(prompt("digite el primer numero entero"));
var B = parseInt(prompt("digite el segundo numero entero"));

var operacion =prompt("Qu operacion desea hacer + - * /");

switch (operacion){

    case "+" :
        alert(A+B);
        break;
    case "-" :
        alert(A-B);
        break;
    case "*":
        alert(A*B);
        break;
    case "/":
        if(B==0){
            alert("No se puede dividir por cero");
        }else {
            alert(A/B);
        }
            break;
    default:
        alert("signo incorrecto");
        break;

}