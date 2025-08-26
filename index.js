const Usuario = require("./class/Usuario")()

const usuariosCriados = []

while (true) {
    const nome = prompt('Digite o nome do usuário: ')
    const idade = prompt('Digite a idade do usuário: ')
    const email = prompt('Digite o email do usuário: ')
    const ativoInput = prompt('Usuário ativo? [S/N]: ')

    const usuario = new Usuario(nome, idade, email)
    usuario.ativo = ativoInput

    usuariosCriados.push(usuario)

    const continuar = prompt('Deseja adicionar outro usuário? [S/N]: ')
    if (continuar.toLowerCase() === 'n') {
        break
    } else if (continuar.toLowerCase() !== 's') {
        console.log('Dado incorreto!')
        process.exit()
    }
}

usuariosCriados.forEach(usuario => usuario.mostrarDados())
Usuario.contarUsuarios()
