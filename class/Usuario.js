const prompt = require('prompt-sync')()

class Usuario {
    static totalUsuarios = 0

    #ativo

    constructor(nome, idade, email) {
        this.nome = nome
        this.idade = idade
        this.email = email
        this.#ativo = false
        Usuario.totalUsuarios++
    }

    get ativo() {
        return this.#ativo
    }

    set ativo(valor) {
        if (valor.toLowerCase() === 's') {
            this.#ativo = true
        } else if (valor.toLowerCase() === 'n') {
            this.#ativo = false
        } else {
            console.log('Dado incorreto!')
            process.exit()
        }
    }

    get boasVindas() {
        return `Bem-vindo, ${this.nome}!`
    }

    mostrarDados() {
        console.log(this.boasVindas)
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Email: ${this.email}`)
        console.log(`Ativo: ${this.ativo}`)
        console.log('==========================')
    }

    static contarUsuarios() {
        console.log(`Total de usuários criados: ${Usuario.totalUsuarios}`)
    }
}

module.exports = Usuario