
const produto1: { produto: string, lote: number, ano: number, qtd: number } = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

const gerarEtiqueta = (item: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    const resultado: string[] = [];
    let i: number = item.qtd;
    let indice: number = 1;

    while (i !== 0) {
        resultado.push(`${item.lote}-${item.ano}-${indice.toString().padStart(3, '0')}`)
        indice++
        i--
    }

    return resultado
}

console.log(gerarEtiqueta(produto1))