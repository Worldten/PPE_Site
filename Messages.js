$.getJSON("https://api.thomaszimmermann.fr/messages", function (object) {
    $.each(object.data, function (index, value) {
        console.log(value)
        let texte = value.texte_message;
        $('.Messages').append('<div class="msg"><div class="name texte">' + texte + '</div></div>');
    })
})