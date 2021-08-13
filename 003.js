//Calculadora de potência
let Bas = 0
let Exp = 0
let Bas2 = 1
let i = 0
Potencia = (Bas, Exp) => {
    while (i < Exp) { 
        Bas2 = Bas2 * Bas;
        i++;
   } return Bas, Exp, Bas2
} 

console.log(Potencia(3, 9))