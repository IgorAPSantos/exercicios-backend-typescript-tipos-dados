const soletrar = (palavra: string): string => {
    const letras: string = palavra.split('').join('-')
    return letras
}

console.log(soletrar('computadores'));
