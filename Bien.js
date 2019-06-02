var GET = {};
var query = window.location.search.substring(1).split("&");
for (var i = 0, max = query.length; i < max; i++) {
    if (query[i] === "") // check for trailing & with no param
        continue;

    var param = query[i].split("=");
    GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
}
$.getJSON(`https://api.thomaszimmermann.fr/bien?id=` + GET.id + ``, function (object) {
    $.each(object.data, function (index, value) {
        let name = value.nom_bien;
        let adresse = value.adresse1_bien;
        let prix = value.prix_bien;
        let id = value.reference_bien;
        let autorisation = value.autorise_bien;
        let surface = value.surface_bien;
        let piece = value.piece_bien;
        let img = value.lien_image;
        if (autorisation === "En attente") {
            $.getJSON(`https://api.thomaszimmermann.fr/user?id=` + value.ref_personne, function (object) {
                $.each(object.data, function (index, value) {
                    let o_name = value.prenom_personne;
                    let o_surname = value.nom_personne;
                    $('.Biens').append('<div class="bien"><div><img  class="image" src="' + img + '"></div><div class="name titre">' + name + '</div><div class="adresse titre">' + adresse + '</div><div class="prix titre">' + prix + '€</div><div class="adresse titre">' + surface + ' m²</div><div class="adresse titre">' + piece + ' pièces</div><div class="titre">Est possédé par : ' + o_name + ' ' + o_surname + '</div></div><div id="validation"><button id="accepter" onclick="accept()">Accepter</button><button id="refuser" onclick="refuse()">Refuser</div>');

                })
            })
        }
        if (autorisation === "Accepté") {
            $.getJSON(`https://api.thomaszimmermann.fr/bien/messages?id_bien=` + id, function (object) {
                $.each(object.data, function (index, value) {
                    let m_name = value.texte_message;
                    let m_id = value.ref_personne;
                    $.getJSON(`https://api.thomaszimmermann.fr/user?id=` + m_id, function (object) {
                        let u_name = object.data[0].prenom_personne;
                        let u_surname = object.data[0].nom_personne;
                        let u_mail = object.data[0].mail_personne;
                        $('.msg').append('<div class="message titre"> - ' + m_name + " " + u_name + ' ' + u_surname + ' <br>' + u_mail + '</div>')
                    })
                })
            })
            $.getJSON(`https://api.thomaszimmermann.fr/user?id=` + value.ref_personne, function (object) {
                $.each(object.data, function (index, value) {
                    let o_name = value.prenom_personne;
                    let o_surname = value.nom_personne;
                    $('.Biens').append('<div class="bien"><div><img  class="image" src="' + img + '"></div><div class="name titre">' + name + '</div><div class="adresse titre">' + adresse + '</div><div class="prix titre">' + prix + '€</div><div class="adresse titre">' + surface + ' m²</div><div class="adresse titre">' + piece + ' pièces</div><div class="titre">Est possédé par : ' + o_name + ' ' + o_surname + '</div></div>');

                })
            })
        }
    })
})

function refuse() {
    $.post(`https://api.thomaszimmermann.fr/change_autorise?id_bien=` + GET.id + `&autorise=Refuser`, function (data, status) {
        console.log(`${data} status : ${status}`)
    })
    document.location.href = "Biens.html"
}
function accept() {
    $.post(`https://api.thomaszimmermann.fr/change_autorise?id_bien=` + GET.id + `&autorise=Accepté`, function (data, status) {
        console.log(`${data} status : ${status}`)
    })
    document.location.href = "Biens.html"
}
$(document).ready(function () {
    if (!localStorage.getItem('id')) window.location.replace("Login.html");
});