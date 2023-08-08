const formAdcionaContato = document.getElementById('form-agenda');
const formExcluiContato = document.getElementById('botao-excluir');
let linhas = '';
let contaLinha = 0



formAdcionaContato.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizatabela();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone');

    contaLinha += 1;

    let linha = '<tr>';    
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputTelefone.value = '';
}

function atualizatabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
