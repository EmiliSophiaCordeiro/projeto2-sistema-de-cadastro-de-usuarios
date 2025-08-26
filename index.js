const prompt = require("prompt-sync")()
const Usuario = require("./class/Usuario")

const usuarios = []
let continuar = true

while (continuar) {
  const nome = prompt("Digite o nome do usuário: ")
  const idade = Number(prompt("Digite a idade do usuário: "))
  const email = prompt("Digite o email do usuário: ")

  const user = new Usuario(nome, idade, email)

  const ativo = prompt("Usuário ativo? [S/N]: ")
  if (ativo === "S" || ativo === "s") {
    user.ativo = true
  } else if (ativo === "N" || ativo === "n") {
    user.ativo = false
  } else {
    console.log("Dado incorreto!")
    break
  }

  usuarios.push(user)

  const outro = prompt("Deseja adicionar outro usuário? [S/N]: ")
  if (outro === "N" || outro === "n") {
    continuar = false
  } else if (outro !== "S" && outro !== "s") {
    console.log("Dado incorreto!")
    break
  }
}

for (let i = 0; i < usuarios.length; i++) {
  usuarios[i].mostrarDados()
  if (i < usuarios.length - 1) {
    console.log("==========================")
  }
}

if (usuarios.length > 0) {
  Usuario.contarUsuarios()
}
