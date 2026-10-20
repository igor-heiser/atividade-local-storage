const tarefaInput = document.getElementById("tarefa");
const adicionarBtn = document.getElementById("enviar-tarefa-btn");
const lista = document.getElementById("lista-tarefas");

let tarefas = localStorage.getItem("tarefas") || "";

lista.innerHTML = tarefas;

adicionarBtn.addEventListener("click", () => {
    const tarefa = tarefaInput.value;

    if(tarefa !== "") {
        const item = document.createElement("li");
        item.textContent = tarefa;
        lista.appendChild(item);

        localStorage.setItem("tarefas", lista.innerHTML);

        tarefaInput.value = "";
    } else {
        alert("Digite uma tarefa!");
    }
});