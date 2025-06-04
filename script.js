
function oblicz() {
    const wybranyRadio = document.querySelector('input[name="wybor"]:checked');

    if (!wybranyRadio) {
        alert("Proszę wybrać długość włosów.");
        return;
    }

    const cenyBazowe = {
        "opcja1": 25,  // Krotkie
        "opcja2": 30,  // Srednie
        "opcja3": 40,  // Podlugie
        "opcja4": 50   // Dlugie
    };

    const cenaBazowa = cenyBazowe[wybranyRadio.value];
    const cenaPromocyjna = cenaBazowa - 10;

    // Wyświetlamy wynik w <p id="wynik">
    const wynikElement = document.getElementById("wynik");
    wynikElement.textContent = `cena promocyjna: ${cenaPromocyjna} zł`;
}
