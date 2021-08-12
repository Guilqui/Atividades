
let Bas = 0
let Exp = 0
let Bas2 = 0
Potencia = (Bas, Exp) => {
    Bas2 = Bas * Bas
    while (Exp <= 1) { 
        Exp++;
    Bas2 = Bas * Bas2;
   }
    return Bas, Exp, Bas2
} 

//console.log(Potencia(5, 3))