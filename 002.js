//Classificando um triangulo pelos seus lados
ClasTriang = (a, b, c) => {
    if (a == b && b == c)
    console.log(`Equilátero: Os três lados são iguais, lado 1 = ${a}, lado 2 = ${b}, lado 3 = ${c}.`)
    else 
    if (a !== b && b == c || a == b && b !== c) 
    console.log(`Isósceles: Dois lados iguais, lado 1 = ${a}, lado 2 = ${b}, lado 3 = ${c}.`)
    else 
    if (a !== b && b !== c)
    console.log(`Escaleno: Todos os lados são diferentes, lado 1 = ${a}, lado 2 = ${b}, lado 3 = ${c}.`)
    return a, b, c
}


ClasTriang(1, 1, 1)
ClasTriang(1, 2, 2)
ClasTriang(2, 2, 1)
ClasTriang(1, 2, 3) 