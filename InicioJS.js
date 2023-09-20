var primeira = 12;
let segunda = "casa";
const terceira = ["casa","banana",2];
let quarta

console.log("primeira: " + ++primeira);
//console.log("segunda: " + ++segunda);
segunda += " amarela"
console.log("segunda: " + segunda);
console.log("terceira: " + terceira)
console.log("quarta: " + quarta)

console.log('\n------------------Brincando com vetor-------------------\n')

const meu_vetor = [1,2, 'casa']
console.log('Posição 0 do vetor: ' + meu_vetor[0])
console.log('Posição 9 do vetor: ' + meu_vetor[9])
meu_vetor.push('novo')
console.log('Vetor manipulado: ' + meu_vetor)
meu_vetor[0] = 'abacate'
meu_vetor[15]= 'manga'
console.log('Vetor manipulado: ' + meu_vetor)
console.log("Posição 10 do vetor:"  + meu_vetor[10])
console.log(meu_vetor.lenght)

quarta = {
  primeira: 1,
  segunda: 'tudo'
}
console.log("quarta: " + quarta)
console.log("quarta.primeira: " + quarta.primeira)
quarta.terceira = 'nada'
console.log("quarta.terceira: " + quarta.terceira)

console.log("\n---------------Brincando de funções-----------------\n")

function funcao(entrada){
  return entrada + 2


}
console.log(funcao(6))
console.log(funcao('2'))

const outrafuncao = function (entrada){
  return entrada + 3
}


console.log(outrafuncao(6))
console.log(outrafuncao("2"))

const setinha = (entrada) => {
  return entrada + 4
}

console.log(setinha(6))
console.log(setinha('2'))

const outrasetinha = (entrada) => entrada + 5

console.log(outrasetinha(6))
console.log(outrasetinha('2'))
