$( document ).ready( function () {
    $( '#form').submit( function ( e ) {
        e.preventDefault();
        e.stopPropagation();

        var url = 'https://script.google.com/macros/s/AKfycby9-PNIjZmZ5PwdrthBRNofNyeCEPG3EAZ2aZa4IQLyjPyPA0vF/exec';
        var form = new FormData();
        form.append('nom', $('[name="nom"]').val());
        form.append('telefon', $('[name="telefon"]').val());
        form.append('descricion', $('[name="descricion"]').val());
        form.append('email', $('[name="email"]').val());

        $.ajax({
            url: url,
            type: 'POST',
            data: form,
            processData: false,
            contentType: false
        }).done(function( data ) {
            window.location.href = 'index.html';
        });
    } );
} );