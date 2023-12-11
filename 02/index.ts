const usuarios: { nome: string, idade: number, status: boolean }[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const buscarNome = (listaUsuarios: { nome: string, idade: number, status: boolean }[], nomeUsuario: string): string[] => {
    const usuariosEncontrados: string[] = [];

    for (const usuario of listaUsuarios) {
        if (usuario.nome.toLowerCase().includes(nomeUsuario.toLocaleLowerCase())) {
            usuariosEncontrados.push(usuario.nome)
        }
    }
    return usuariosEncontrados
}

console.log(buscarNome(usuarios, 'gui'));
