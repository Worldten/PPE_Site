$.getJSON("http://188.213.31.179:8082/biens", function (object) {
    $.each(object.data, function (index, value) {
        let name = value.nom_bien;
        let adresse = value.adresse1_bien;
        let prix = value.prix_bien;
        let id = value.reference_bien;
        $('.Biens').append('<div class="bien" href="' + id + '"><div class="name titre">' + name + '</div><div class="adresse titre">' + adresse + '</div><div class="prix titre">' + prix + '€</div></div>');
    })
})
$.getJSON("http://188.213.31.179:8082/biensAttente", function (object) {
    $.each(object.data, function (index, value) {
        let name = value.nom_bien;
        let adresse = value.adresse1_bien;
        let prix = value.prix_bien;
        let id = value.reference_bien;
        $('.attente').append('<div class="bien" href="' + id + '"><div class="name titre">' + name + '</div><div class="adresse titre">' + adresse + '</div><div class="prix titre">' + prix + '€</div></div>');
    })
})
$(document).ready(function () {
    $('.bien').click(function () {
        $(this).each(function () {
            $.each(this.attributes, function () {
                if (this.name === 'href') document.location.href = "Bien.html";
            });
        });
    });
    $('.attente').click(function () {
        $(this).each(function () {
            $.each(this.attributes, function () {
                if (this.name === 'href') console.log(this.value);
            });
        });
    });
});


