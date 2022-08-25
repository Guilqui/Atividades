const media = (a) => {
    let soma = 0
    for(i = 0; i < a.length; i++){
        soma += a[i]
    }
    const result = soma / a.length
    console.log(result)
}

media([42,54,100,2000458,948])