$('document').ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault()
        const $input = $('#input-texto').val()
        const $itemLista = $(`<li>${$input}</li>`)
        $($itemLista).appendTo('ul')
        $('#input-texto').val("")

        $($itemLista).click(function() {
            $($itemLista).addClass('tarefa-finalizada')
        })
    })

})