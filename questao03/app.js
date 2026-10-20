const contador = document.getElementById("exibir-contador");

let visitas = localStorage.getItem("exibir-contador");

visitas = Number(visitas) + 1;

localStorage.setItem("exibir-contador", visitas);

contador.textContent = "Número de visitas: " + visitas; 