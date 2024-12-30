$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const enderecoDaNovaTarefa = $('#endereco-nova-tarefa').val();
        const novoItem = $('<li"></li>');

        $(`<li>${enderecoDaNovaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereco-nova-tarefa').val('');

        $(novoItem).on('click', function(){
            $(this).toggleClass('riscado')
        })
    })
})

