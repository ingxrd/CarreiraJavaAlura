let amigos = [];

function adicionar() {
    // recuperando o nome do amigo
    let amigo = document.getElementById('nome-amigo');
    // recuperando todos os amigos
    let lista = document.getElementById('lista-amigos');

    // evita adicionar nome vazio
    if (amigo.value.trim() === '') {
        alert("Digite o nome de um amigo.");
        return;
    }

    // add o amigo na lista pq começou vazia
    amigos.push(amigo.value.trim());

    // atualiza a exibição da lista de amigos com separação por vírgula
    lista.textContent = amigos.join(', '); // coloca os amigos na lista bonitinho

    amigo.value = ''; // limpa o input de nome de amigo
}

function sortear() {
    // verifica se tem pelo menos dois amigos para sortear
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para fazer o sorteio.");
        return;
    }

    // embaralha os amigos antes do sorteio
    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; // limpa sorteio anterior antes de sortear de novo

    // percorre a lista e sorteia o próximo amigo
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    // embaralha a lista usando algoritmo de Fisher-Yates
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    // limpa a lista de amigos e as listas exibidas na tela
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
