$('document').ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
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
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Insira o seu nome completo',
            email: 'Insira o seu e-mail',
            telefone: 'Insira o seu número de telefone',
            cpf: 'Insira o seu CPF',
            endereco: 'Insira o seu endereço',
            cep: 'Insira o seu CEP'
        }
    })
})