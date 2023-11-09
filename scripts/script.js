$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00) 00000-0000'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        mensagem: {
            required: true
        }
    },
    messages: {
        nome: 'Insira o seu nome.',
        email: 'Insira o seu e-mail.',
        mensagem: 'Não esqueça da sua mensagem.'
    }
})