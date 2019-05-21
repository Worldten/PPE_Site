$.getJSON("https://api.thomaszimmermann.fr/biens", function (object) {
    $.each(object.data, function (index, value) {
        let name = value.nom_bien;
        let adresse = value.adresse1_bien;
        let prix = value.prix_bien;
        let id = value.reference_bien;
        $('.Biens').append('<div class="bien" href="' + id + '"><div class="name titre">' + name + '</div><div class="adresse titre">' + adresse + '</div><div class="prix titre">' + prix + '€</div></div>');
    })
})
$.getJSON("https://api.thomaszimmermann.fr/biensAttente", function (object) {
    $.each(object.data, function (index, value) {
        let name = value.nom_bien;
        let adresse = value.adresse1_bien;
        let prix = value.prix_bien;
        let id = value.reference_bien;
        $('.attente').append('<div class="bien" href="' + id + '"><div class="name titre">' + name + '</div><div class="adresse titre">' + adresse + '</div><div class="prix titre">' + prix + '€</div></div>');
    })
})

$(document).ready(function () {
    if (!localStorage.getItem('id')) window.location.replace("Login.html");
    $('.bien').click(function () {
        console.log("clicked");
        $(this).each(function () {
            $.each(this.attributes, function () {
                if (this.name === 'href') {
                    console.log(this.value)
                    document.location.href = "Bien.html?id=" + this.value;
                }
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



