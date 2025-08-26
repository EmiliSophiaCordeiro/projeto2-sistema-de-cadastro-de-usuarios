class Usuario {
    static totalUsuarios = 0
    #ativo = false
  
    constructor(nome, idade, email) {
      this.nome = nome
      this.idade = idade
      this.email = email
      Usuario.totalUsuarios++
    }
  
    get ativo() {
      return this.#ativo
    }
  
    set ativo(valor) {
      if (valor === true) {
        this.#ativo = true
      } else if (valor === false) {
        this.#ativo = false
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
    }
  
    static contarUsuarios() {
      console.log(`Total de usuários criados: ${Usuario.totalUsuarios}`)
    }
  }
  
  module.exports = Usuario
  
