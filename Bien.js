$.getJSON("http://188.213.31.179:8082/bien?id=6", function (object) {
    $.each(object.data, function (index, value) {
        let name = value.nom_bien;
        let adresse = value.adresse1_bien;
        let prix = value.prix_bien;
        let id = value.reference_bien;
        $('.Biens').append('<div class="bien" href="' + id + '"><div class="name titre">' + name + '</div><div class="adresse titre">' + adresse + '</div><div class="prix titre">' + prix + '€</div></div>');
    })
})