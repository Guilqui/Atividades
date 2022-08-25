baska = (a,b,c) => {
    const delt = b**2 - 4 * a *c
    if(delt < 0){
        console.log('Delta é negativo.')
    }else{
    const x = [- b + delt ** 0.5 , - b - delt ** 0.5]   
    const divi = 2 * a
    const result = [x[0] / divi, x[1] / divi]
    console.log(`O resultado da equação ${a}x^2+${b}x+${c} é x' = ${result[0].toFixed(2)} e x'' = ${result[1].toFixed(2)}`)
    }
}

baska(43,72,21)

