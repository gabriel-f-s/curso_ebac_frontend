/*
Lógica do Programa:

Vincular o formulário à uma variável
Receber o valor de numero A e numero B
Comparar o valor recebido de numero A e numero B
Se o numero B for maior que o numero A:
    deverá ser válido
    sendo valido, deve exibir uma mensagem positiva
Caso não seja:
    sendo invalido, deve exibir uma mensagem negativa
*/

var formulario = document.getElementById("form_teste")
let validador = false

function retornaValor(numero1, numero2) {
    const comparar = numero2 > numero1
    return comparar
}


formulario.addEventListener('submit', function(e){
    e.preventDefault()

})

function validar() {
    var valor_a = document.getElementById("num1")
    var valor_b = document.getElementById("num2")
    const numero_a = valor_a.value
    const numero_b = valor_b.value
    var mensagem = `Formulário válido! O número ${numero_b} é maior que ${numero_a}!`
    var mensagem2 = `Formulário inválido! O número ${numero_b} não é maior que ${numero_a}!`

    validador = retornaValor(numero_a, numero_b)

    const mensagem_erro = document.querySelector('.error-message')
    const mensagem_sucesso = document.querySelector('.success-message')

    if (validador) {
        mensagem_sucesso.innerHTML = mensagem
        mensagem_sucesso.style.display = 'block'
        mensagem_erro.style.display = 'none'
    } else {
        mensagem_erro.innerHTML = mensagem2
        mensagem_erro.style.display = 'block'
        mensagem_sucesso.style.display = 'none'
    }
}

function resetar() {
    location.reload()
}

/*numero_a.addEventListener('keyup', function(e){
    console.log(e.target.value)
}) -> está recebendo o valor escrito pelo usuário.
*/

