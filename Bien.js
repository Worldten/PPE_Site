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
        if (autorisation === "En attente") {
            $('.Biens').append('<div class="bien" href="' + id + '"><div class="name titre">' + name + '</div><div class="adresse titre">' + adresse + '</div><div class="prix titre">' + prix + '€</div></div><div id="validation"><input id="accepter" type="button" value="Accepter"> <input id="refuser" type="button" value="Refuser"></div>');
        }
        if (autorisation === "Accepté") {
            $.getJSON(`https://api.thomaszimmermann.fr/bien/messages?id_bien=` + id, function (object) {
                console.log(name)
                $.each(object.data, function (index, value) {
                    let m_name = value.texte_message;
                    let m_id = value.ref_personne;
                    console.log(m_id);
                    $.getJSON(`api.thomaszimmermann.fr/user?id=` + m_id, function (object) {
                        let u_name = object.data[0].prenom_personne;
                        $('.msg').append('<div class="message">' + m_name + " " + u_name + '</div>')
                    })
                })
            })
            $('.Biens').append('<div class="bien"><div class="name titre">' + name + '</div><div class="adresse titre">' + adresse + '</div><div class="prix titre">' + prix + '€</div></div>');
        }
    })
})
$(document).ready(function () {
    if (!localStorage.getItem('id')) window.location.replace("Login.html");
    $("#refuser").click(function () {
        console.log("refuser");
        $.post(`https://api.thomaszimmermann.fr/change_autorise?id_bien=` + GET.id + `&autorise=Refuser`, function (data, status) {
            console.log(`${data} status : ${status}`)
        })
        document.location.href = "Biens.html"
    });
    $("#accepter").click(function () {
        console.log("Accepter");
        $.post(`https://api.thomaszimmermann.fr/change_autorise?id_bien=` + GET.id + `&autorise=Accepté`, function (data, status) {
            console.log(`${data} status : ${status}`)
        })
        document.location.href = "Biens.html"
    });
});