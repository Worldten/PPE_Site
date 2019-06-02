$.getJSON("https://api.thomaszimmermann.fr/biens", function (object) {
    $.each(object.data, function (index, value) {
        let name = value.nom_bien;
        let adresse = value.adresse1_bien;
        let prix = value.prix_bien;
        let id = value.reference_bien;
        let lien = "Bien.html?id=" + id;
        $('.Biens').append('<div class="bien" href="' + id + '"><div class="name titre">' + name + '</div><div class="adresse titre">' + adresse + '</div><div class="prix titre">' + prix + '€</div><a href="' + lien + '" class="lien_bien">Voir le bien</a></div>');
    })
})
$.getJSON("https://api.thomaszimmermann.fr/biensAttente", function (object) {
    $.each(object.data, function (index, value) {
        let name = value.nom_bien;
        let adresse = value.adresse1_bien;
        let prix = value.prix_bien;
        let id = value.reference_bien;
        let lien = "Bien.html?id=" + id;
        $('.attente').append('<div class="bien" href="' + id + '"><div class="name titre">' + name + '</div><div class="adresse titre">' + adresse + '</div><div class="prix titre">' + prix + '€</div><a href="' + lien + '" class="lien_bien">Voir le bien</a></div>');
    })
})

$(document).ready(function () {
    if (!localStorage.getItem('id')) window.location.replace("Login.html");
});



