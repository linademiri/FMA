let emri;
let mbiemri;
let mosha;
let emaili;
let adresa;

while (emri == null || emri == "") {
    emri = (prompt("Write your name?"));
    document.getElementById("emri").innerHTML = emri;
}
while (mbiemri == null || mbiemri == "") {
    mbiemri = (prompt("Write your surname?"));
    document.getElementById("mbiemri").innerHTML = mbiemri;
}
while (mosha == null || mosha == "") {
    mosha = (prompt("Write your year?"));
    document.getElementById("mosha").innerHTML = mosha;
}
while (emaili == null || emaili == "") {
    emaili = (prompt("Write your email?"));
    document.getElementById("emaili").innerHTML = emaili;
}
while (adresa == null || adresa == "") {
    adresa = (prompt("Write your adresa?"));
    document.getElementById("adresa").innerHTML = emaili;
}
function showAlert() {
    alert("Ruaj të dhënat")
}
function showGifAler() {
    alert("")
}