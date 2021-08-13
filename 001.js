//Calculadora com operações simples

mat = (a, b) => {
    let soma = a + b 
    let sub = a - b
    let mult = a * b
    let div = a / b
    console.log(`A soma, subtração, multiplicação e divisão respectivamente dos numeros ${a} e ${b} são: ${soma}, ${sub}, ${mult}, ${div}.`)
    return soma, sub, mult, div
}

mat(1, 2)
mat(6, 7)
mat(22, 45)