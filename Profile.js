$.getJSON(`api.thomaszimmermann.fr/user?id=` + localStorage.getItem('id') + ``, function (object) {
    $.each(object.data, function (index, value) {
        let name = value.prenom_personne;
        let lname = value.nom_personne;
        let tel = value.tel_personne;
        let mail = value.mail_personne;
        $("#profil").append('<div id="names"> ' + name + ' ' + lname + '</div><div id="infos"> ' + tel + ' ' + mail + '</div>')
    })
})