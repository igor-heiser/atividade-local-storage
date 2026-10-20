/* Local Storage
O que é o local storage?
É um recurso do navegador que permite salvar dados no
computador do user de forma simples e como o nathan falou se limpar os dados ele apaga.

Diferente das variáveis comuns do JS (que resetam e esquecem tudo assim que a pagina é recarregada) os dados salvos no local
storage não somem ao fechar a aba ou o navegador. Eles continuam lá até que o usuário limpe o histórico ou o código os apague
de forma intencional.

Comparação Lúdica Marota - o post-it na gaveta

Bora imaginar que o navegador na internet tem um lapso de memória recente. Toda vez que você atualiza a pagina com o F5 por exemplo
ele esquece completamente de quem você é, e do que voce fez.

LS é como se o navegador tivesse uma gaveta com um bloco de post-its.

Que são repesentados em 4 passos:
1 - O POST-IT (chave e valor): Quando você clica em "Modo Escuro" o JS escreve em um papelzinho: tema = escuro.
2 - GUARDANDO NA GAVETA (setItem: Ele abre a gaveta e guarda esse POST-IT lá dentro.
3 - O FEITIÇO DO RECARREGAMENTO: Quando o usuário fecha o site e volta 1 hora depois, o navegador esquece o que aconteceu.
Mas a primeira coisa que o código faz é ABRIR A GAVETA (getItem) e ler o queridão do POST-IT.
4 - A MAGIA ACONTECE: Ele lê o tema = escuro e aplica as cores certas antes mesmo de você piscar!
*/

// 1 - Buscar os botões do HTML através dos seus IDs

const lightBtn = document.getElementById('light-mode');
const darkBtn = document.getElementById('dark-mode');

// 2 - Função que será responsável por aplicar o tema escolhido e salvar no navegador

function aplicarTema(tema) {
    // Se o tema escolhido for "dark", adiciona a classe CSS .dark no body
    if(tema === 'dark') {
        document.body.classList.add('dark');
    } else {
    // Caso contrário (tema claro). remove a classe .dark do body
        document.body.classList.remove('dark');
    }

    // 3 - Precisamos salvar a escolha do usuário (dark ou light) no local storage do navegador
    localStorage.setItem('tema', tema);
}

// 4 - Busca o tema salvo no local storage; se não houver nenhum tema salvo (primeiro acesso), usa: light
const temaSalvo = localStorage.getItem('tema') || ('light');

// 5 - Aplica o tema imediatamente ao caregar a página
aplicarTema(temaSalvo);

// 6 - Adiciona o evento de clique no modo claro
lightBtn.addEventListener('click', () => aplicarTema('light'));

// 7 - Adiciona o evento de click no modo escuro
darkBtn.addEventListener('click', () => aplicarTema('dark'));