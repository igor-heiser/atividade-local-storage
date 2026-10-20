const nomeInput = document.getElementById('nome');
const salvarBtn = document.getElementById('submit-btn');
const mensagem = document.getElementById('mensagem');

const nomeSalvo = localStorage.getItem('nome');

if(nomeSalvo != null) {
    mensagem.textContent = 'Seja muito bem vindo(a) ' + nomeSalvo + '!'; 
}

salvarBtn.addEventListener('click', () => {
    const nome = nomeInput.value;

    if(nome.trim() !== '') {
        localStorage.setItem('nome', nome);
        mensagem.textContent = 'Seja muito bem vindo(a) ' + nome + '!';
    } else {
        alert('Digite um nome!');
    }
});