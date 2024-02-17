let billetter = [];

function visBilletter() {
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th></tr>";
    for (let b of billetter) {
        ut += `<tr><td>${b.film}</td><td>${b.antall}</td><td>${b.fornavn}</td><td>${b.etternavn}</td><td>${b.telefon}</td><td>${b.epost}</td></tr>`;
    }
    ut += "</table>";
    document.getElementById("billetter").innerHTML = ut;
}

function validerFilm() {
    const film = document.getElementById("film").value;
    const feilFilm = document.getElementById("feilFilm");
    if (film === "") {
        feilFilm.textContent = "Velg en film";
        return false;
    } else {
        feilFilm.textContent = "";
        return true;
    }
}

function validerAntall() {
    const antall = document.getElementById("antall").value;
    const feilAntall = document.getElementById("feilAntall");
    if (isNaN(antall) || antall <= 0) {
        feilAntall.textContent = "Velg et gyldig antall";
        return false;
    } else {
        feilAntall.textContent = "";
        return true;
    }
}

function validerFornavn() {
    const fornavn = document.getElementById("fornavn").value.trim();
    const feilFornavn = document.getElementById("feilFornavn");
    if (fornavn.length === 0 || /\d/.test(fornavn)) {
        feilFornavn.textContent = "Skriv inn et gyldig fornavn";
        return false;
    } else {
        feilFornavn.textContent = "";
        return true;
    }
}

function validerEtternavn() {
    const etternavn = document.getElementById("etternavn").value.trim();
    const feilEtternavn = document.getElementById("feilEtternavn");
    if (etternavn.length === 0 || /\d/.test(etternavn)) {
        feilEtternavn.textContent = "Skriv inn et gyldig etternavn";
        return false;
    } else {
        feilEtternavn.textContent = "";
        return true;
    }
}

function validerTelefon() {
    const telefon = document.getElementById("telefon").value;
    const feilTelefon = document.getElementById("feilTelefon");
    if (telefon.length !== 8 || isNaN(telefon)) {
        feilTelefon.textContent = "Skriv et gyldig telefonnummer";
        return false;
    } else {
        feilTelefon.textContent = "";
        return true;
    }
}

function validerEpost() {
    const epost = document.getElementById("epost").value;
    const feilEpost = document.getElementById("feilEpost");
    const sjekkEpost = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!sjekkEpost.test(epost)) {
        feilEpost.textContent = "Skriv inn en gyldig e-post";
        return false;
    } else {
        feilEpost.textContent = "";
        return true;
    }
}

function kjopBillett() {
    if (validerFilm() && validerAntall() && validerFornavn() && validerEtternavn() && validerTelefon() && validerEpost()) {
        const nyBillett = {
            film: document.getElementById("film").value,
            antall: document.getElementById("antall").value,
            fornavn: document.getElementById("fornavn").value.trim(),
            etternavn: document.getElementById("etternavn").value.trim(),
            telefon: document.getElementById("telefon").value,
            epost: document.getElementById("epost").value
        };
        billetter.push(nyBillett);
        slettInput();
        visBilletter();
    }
}

function slettAlleBilletter() {
    billetter = [];
    visBilletter();
}

function slettInput() {
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("epost").value = "";
}