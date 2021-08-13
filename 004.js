//calculadora de divisão que mostra o resto da divisão e o resultado dela

Divisao = (dvd, dvs) => {
    let res = dvd / dvs;
    let rest = res - (parseInt(res.toFixed()));
    console.log(res.toFixed());
    console.log(rest)
    
}

Divisao(10, 3)
