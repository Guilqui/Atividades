//Calculadora com operações simples

mat = (a, b) => {
    let soma = a + b 
    let sub = a - b
    let mult = a * b
    let div = a / b
    console.log(`A soma = ${soma} , subtração = ${sub}, multiplicação = ${mult} e divisão = ${div} dos números ${a} e ${b}.`)
    return soma, sub, mult, div
}

mat (24, 4)