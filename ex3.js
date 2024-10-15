/* Crie uma função que recebe um objeto como parâmetro e retorna um segundo objeto com as chaves e valores do primeiro objeto invertidas*/
// 1º Passo: identificar o que são chaves e o que são valores no objeto
// Já existe uma função no java script que mostra quais são as chaves e quais são os valores

function trocaChaveEValor(objeto){
let novoObjeto = {}
const objetoValores = Object.values(objeto) // -> lista de valores
const objetoChaves = Object.keys(objeto) // -> lista de chaves
  // console.log(objetoValores)
  // console.log(objetoChaves)
  for(i = 0;i < objetoValores.length ;i++) {
    chave = objetoValores[i]
    novoObjeto[chave] = objetoChaves[i]
  }
  return novoObjeto
}

// // Resolução curso
// function trocaChaveEValor(objeto){
//   let objetoRetorno = {}
//   let conteudoObjeto = Object.entries(objeto)
//   for (par of conteudoObjeto){
//     objetoRetorno[par[1]] = par[0]
//   }
//   return objetoRetorno
// }


const objeto = {nome:"Maria", idade:"45", id:"8745"}

const objetoInvertido = trocaChaveEValor(objeto)

console.log(objeto)
console.log(objetoInvertido)