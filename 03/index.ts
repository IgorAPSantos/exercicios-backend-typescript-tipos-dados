const criarTabuada = (arrayNumeros: number[]): string => {
    let resposta: string = '';
    let i: number;

    arrayNumeros.forEach(numero => {
        for (i = 0; i <= 10; i++) {
            resposta += `${numero} x ${i} = ${numero * i} \n`
            if (i === 10) {
                resposta += ' --------------- \n \n'
            }
        }
    });

    return resposta

}

console.log(criarTabuada([1, 5, 2]));
