$.getJSON("https://api.thomaszimmermann.fr/locations", function (object) {
    $.each(object.data, function (index, value) {
        let c = value.date_contrat_loc;
        let contrat = c.substring(0, c.indexOf('T'));
        let e = value.date_entree_loc;
        let entree = e.substring(0, e.indexOf('T'));
        let s = value.date_sortie_loc;
        let sortie = s.substring(0, s.indexOf('T'));
        console.log(sortie);
        let paie = value.etat_paiement_frais_loc;
        let bien = value.reference_bien;
        $.getJSON(`https://api.thomaszimmermann.fr/bien?id=` + bien, function (object) {
            $.each(object.data, function (index, value) {
                let b_prix = value.prix_bien;
                let b_charge = value.charge_bien;
                let b_lien = "Bien.html?id=" + bien;
                $('.contrats').append('<div class="bien"><div class="name titre"> Date du contrat : ' + contrat + '</div><div class="name titre"> Etat du paiement : ' + paie + '</div><div class="adresse titre">Entrée du locataire : ' + entree + '</div><div class="prix titre">Sortie du locataire : ' + sortie + '</div><div class="adresse titre">Loyer mensuel : ' + b_prix + '€</div><div class="adresse titre">Charges mensuels : ' + b_charge + '€</div><a href="' + b_lien + '" class="lien_bien">Voir le bien</a></div>');

            })
        })
    })
})