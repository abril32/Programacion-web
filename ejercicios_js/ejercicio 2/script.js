function numero1(){
    const numero1 = document.getElementById("num1").value
    return parseInt(numero1);
    
}

function numero2(){
    const numero2 = document.getElementById("num2").value
    return parseInt(numero2);
}

function calcular(){
    let resultado= numero1() + numero2();
    console.log(resultado);
    document.getElementById("resultado").textContent = resultado;
}