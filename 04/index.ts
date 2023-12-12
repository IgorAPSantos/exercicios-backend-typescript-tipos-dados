
const produto1: { produto: string, lote: number, ano: number, qtd: number } = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

const gerarEtiqueta = (item: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    const resultado: string[] = [];
    let indice: number = 1;

    for (let i = 0; i < item.qtd; i++) {
        resultado.push(`${item.lote}-${item.ano}-${indice.toString().padStart(3, '0')}`)
        indice++
    }

    return resultado
}

console.log(gerarEtiqueta(produto1))