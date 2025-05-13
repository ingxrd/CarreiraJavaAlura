function comprar() {
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso === 'pista') {
        comprarPista(quantidade);
    } else if (tipoIngresso === 'inferior') {
        comprarIngressoCadeiraInferior(quantidade);
    } else if (tipoIngresso === 'superior') {
        comprarIngressoCadeiraSuperior(quantidade);
    }
}

function comprarPista(quantidade) {
    let qtdDisponivel = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdDisponivel) {
        alert('Quantidade indisponível para o setor Pista.');
    } else {
        document.getElementById('qtd-pista').textContent = qtdDisponivel - quantidade;
    }
}

function comprarIngressoCadeiraInferior(quantidade) {
    let qtdDisponivel = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > qtdDisponivel) {
        alert('Quantidade indisponível para o setor Cadeira Inferior.');
    } else {
        document.getElementById('qtd-inferior').textContent = qtdDisponivel - quantidade;
    }
}

function comprarIngressoCadeiraSuperior(quantidade) {
    let qtdDisponivel = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdDisponivel) {
        alert('Quantidade indisponível para o setor Cadeira Superior.');
    } else {
        document.getElementById('qtd-superior').textContent = qtdDisponivel - quantidade;
    }
}
