const soletrar = (palavra: string): string => {
    const letras: string[] = palavra.split('')
    let resposta: string = ''

    for (let i = 0; i < letras.length; i++) {
        const letra = letras[i]
        if (i === palavra.length - 1) {
            resposta += `${letra}`
            break
        }
        resposta += `${letra}-`
    }

    return resposta
}

console.log(soletrar('computadores'));
