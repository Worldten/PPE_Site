$.getJSON("https://api.thomaszimmermann.fr/messages", function (object) {
    $.each(object.data, function (index, value) {
        let texte = value.texte_message;
        let id = value.ref_personne;
        let bien = value.reference_bien;
        let lien = '<a href="Bien.html?id=' + bien + '">ce bien</a>'
        $.getJSON("https://api.thomaszimmermann.fr/user?id=" + id, function (object) {
            $.each(object.data, function (index, value) {
                let u_name = value.prenom_personne;
                let u_surname = value.nom_personne;
                let u_mail = value.mail_personne;
                $('.Messages').append('<div class="msg"><div class="name texte">' + texte + '</div><div class="name texte"> Provient de : ' + u_name + u_surname + '</div><div class="name texte">' + u_mail + '</div><div>Message lié à : ' + lien + ' </div></div>');

            })
        })
    })
})