let billetter = [];

function kjopBillett() {
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefon = document.getElementById("telefon").value;
    let epost = document.getElementById("epost").value;

    let errorMessage = false;

    if (film === "") {
        document.getElementById("feilFilm").innerHTML = "Vennligst velg en film";
        errorMessage = true;
    } else {
        document.getElementById("feilFilm").innerHTML = "";
    }

    if (antall === "" || antall <= 0) {
        document.getElementById("feilAntall").innerHTML = "Må skrive noe inn i antallet";
        errorMessage = true;
    } else {
        document.getElementById("feilAntall").innerHTML = "";
    }

    if (!gyldigFornavn(fornavn)) {
        document.getElementById("feilFornavn").innerHTML = "Må skrive noe inn i fornavnet";
        errorMessage = true;
    } else {
        document.getElementById("feilFornavn").innerHTML = "";
    }

    if (!gyldigEtternavn(etternavn)) {
        document.getElementById("feilEtternavn").innerHTML = "Må skrive noe inn i etternavnet";
        errorMessage = true;
    } else {
        document.getElementById("feilEtternavn").innerHTML = "";
    }

    if (!gyldigTelefon(telefon)) {
        document.getElementById("feilTelefon").innerHTML = "Må skrive noe inn i telefonnr.";
        errorMessage = true;
    } else {
        document.getElementById("feilTelefon").innerHTML = "";
    }

    if (!gyldigEpost(epost)) {
        document.getElementById("feilEpost").innerHTML = "Må skrive noe inn i epost";
        errorMessage = true;
    } else {
        document.getElementById("feilEpost").innerHTML = "";
    }

    if (!errorMessage) {
        let billettInput = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            epost: epost,
            telefon: telefon
        };
        billetter.push(billettInput);
        visBilletter();
        slettInput();
    }
}

function gyldigFornavn(fornavn) {
    let re = /^([a-zæøåA-ZÆØÅ]{3,20})$/;
    return re.test(fornavn);
}

function gyldigEtternavn(etternavn) {
    let re = /^([a-zæøåA-ZÆØÅ]{3,20})$/;
    return re.test(etternavn);
}

function gyldigEpost(epost) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(epost).toLowerCase());
}

function gyldigTelefon(telefon) {
    let re = /^\+?[0-9]{8,15}$/;
    return re.test(telefon);
}

function slettInput() {
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("epost").value = "";
    document.getElementById("telefon").value = "";
}

function visBilletter() {
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>E-post</th><th>Telefon</th></tr>";
    for (let b of billetter) {
        ut += `<tr><td>${b.film}</td><td>${b.antall}</td><td>${b.fornavn}</td><td>${b.etternavn}</td><td>${b.epost}</td><td>${b.telefon}</td></tr>`;
    }
    ut += "</table>";
    document.getElementById("billetter").innerHTML = ut;
}

function slettAlleBilletter() {
    billetter = [];
    visBilletter();
}