// Função para adicionar um registro na tabela
function adicionarRegistro(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os dados preenchidos no formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Verifica se os campos foram preenchidos
    if (!nome || !email) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Adiciona uma nova linha à tabela
    const tabela = document.getElementById('tabelaCadastro').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    // Cria as células para a nova linha
    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);

    // Preenche as células com os dados do formulário
    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    // Limpa os campos após o envio
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
}

