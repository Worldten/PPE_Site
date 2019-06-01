window.addEventListener("load", function () {
    function sendData() {
        if (localStorage.getItem('id') === null) {
            "http://api.thomaszimmermann.fr/login?mail=thomaszim@free.fr&mdp=root"
            $.getJSON("https://api.thomaszimmermann.fr/login?mail=" + $("#mail").val() + '&mdp=' + $("#mdp").val(), function (object) {
                $.each(object.data, function (index, value) {
                    if (value.admin_personne === 1) {
                        let ref = value.ref_personne;
                        localStorage.setItem('id', ref)
                        console.log("Bien set à " + ref);
                        window.location = "index.html";
                    }
                    console.log("recu");
                })
            })
        }
    }
    var form = document.getElementById("connexion");
    if (localStorage.getItem('id') !== null) {
        console.log("allez stp");
        window.location = "index.html";
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        sendData();
    });
});