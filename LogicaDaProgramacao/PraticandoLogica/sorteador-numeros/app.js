//let numerosSorteadosLista = []; 
//et numeroFinal = []; 
//let quantidadeNumeros = 1; 
//let numeroInicial = [];



function sortear() {
    let quantidadeDeNumeros = parseInt(document.querySelector('input').value); // seleciono o input de quantidade
    let numeroInicial = parseInt(document.querySelector('#de').value);
    let numeroFinal = parseInt(document.querySelector('#ate').value);


    let listaPossiveisNumeros = []
    let numerosSorteados = []


    // se o numero inicial for mauor que o numero final, eu insiro a lógica de sortear 
    // 1o insiro  os possiveis numeros a serem sorteados numa lista. 

    for (i = numeroInicial; i <= numeroFinal; i++) {
        listaPossiveisNumeros.push(i);
        console.log(`Números possíveis para sortear: ${listaPossiveisNumeros}`)
    }


    // 2. verifico se a lista de possiveis numeros é maior que a quantidade de numeros
    if (quantidadeDeNumeros > listaPossiveisNumeros.length) {
        alert('Insira uma quntidade de números menor que o número máximo de números')
    } else {

        // insiro a lógica de sorteio aleatório aqui. 
        // o numero escolhido é um numero randomico dentro do tamanho da lista de possiveisnumeros
        // preciso fazer um laço for pq caso contrário, ele irá sempre fazer o sorteio de 1 número
        // dos numeros possiveis de sorteio (numerosSorteados) eu vou pegar a quantidadeDeNumeros.


        while (numerosSorteados.length < quantidadeDeNumeros) {
            let indiceNumeroAleatorio = parseInt(Math.random() * listaPossiveisNumeros.length);
            let numeroEscolhido = listaPossiveisNumeros[indiceNumeroAleatorio];

            if (!numerosSorteados.includes(numeroEscolhido)) {
                numerosSorteados.push(numeroEscolhido);
            }
        
        }

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;
        alteraStatusBotao();
        console.log(numerosSorteados);
        return numerosSorteados;
    }

}


function limparCampo(){
  numeroEscolhido = document.querySelector('input');
  numeroInicial = document.querySelector('#de');
  numeroFinal = document.querySelector('#ate');
  numerosSorteados = document.querySelector('#resultado');
  numeroEscolhido.value = '';
  numeroInicial.value = '';
  numeroFinal.value = '';
  numerosSorteados.innerHTML = ''; 
}


function alteraStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }   
}
function reiniciar(){
    numerosSorteados = sortear();
    limparCampo();
}

