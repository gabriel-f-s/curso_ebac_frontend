const formulario = document.getElementById('form-principal')
const nomes = []
const numeros = []
let linhas = ''

formulario.addEventListener('submit', function(e){
    e.preventDefault()

    adicionar()
    adiciona_celula()
})

function adicionar() {
    const input_nome = document.getElementById('input-nome')
    const input_telefone = document.getElementById('input-telefone')
    const quantidade = document.getElementById('quantidade-contatos')

    if (numeros.includes(input_telefone.value)) {
        alert(`Número de telefone já inserido.`)
    } else {
        nomes.push(input_nome.value)
        numeros.push(input_telefone.value)

    let linha = '<tr>'
    linha += `<td>${input_nome.value}</td>`
    linha += `<td>${input_telefone.value}</td>`
    linha += `<td><img src="images/contato.png" alt="Símbolo do Contato"></td>`
    linha += '</tr>'
    
    linhas += linha
    }

    quantidade.innerHTML = numeros.length

    input_nome.value = ''
    input_telefone.value = ''
}

function adiciona_celula() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}
