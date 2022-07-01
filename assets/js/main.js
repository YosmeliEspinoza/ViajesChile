
// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// alert Button de Enviar


var confirmacionEnvio = function () {
    alert("Mensaje enviado")

}
const button = document.getElementById("btnEnviar")
button.addEventListener("click", () => {
    confirmacionEnvio()
})

// Card
const img = document.querySelector(".card-img-top")
img.addEventListener("mouseover", (e) => {
    e.target.style = ".card-img-top.active:hover";
})