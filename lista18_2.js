var valor = parseInt(prompt("insira um valor:"))
console.log("valor inserido:",valor)

DecomporValor( valor, 100)
DecomporValor( valor, 50)
DecomporValor( valor, 20)
DecomporValor( valor, 10)
DecomporValor( valor, 5)
DecomporValor( valor, 1)

function DecomporValor (valorParametro, notaParametro){
    var notas = parseInt(valorParametro / notaParametro)
    console.log (notas , "notas R$:" , notaParametro)
    valor = valorParametro % notaParametro
}