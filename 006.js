jurosS = (cap, jur, temp) =>{
    cap = cap.toFixed(2)
    let result = cap * jur * temp
    result = result.toFixed(2) 
    console.log(`O calculo de juros simples tendo Capital inicial R$${cap}, juros ${jur}% mensal, e periodo de tempo ${temp} meses é R$${result}`)
}

jurosS(1001, 10, 30)