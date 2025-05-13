

function alterarStatus(id){
    // Selecionar/ Recuperar meus elementos
    let jogo = document.getElementById(`game-${id}`) // identificador do meu jogo
    let imagemDisponibilidade = jogo.querySelector('.dashboard__item__img');
    let botaoAlugar = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name');


    // Agora com todos os nossos botoes selecionados, eu aplico if e else e mudo o classContext do texto.

    if (imagemDisponibilidade.classList.contains('dashboard__item__img--rented')) {
        imagemDisponibilidade.classList.remove('dashboard__item__img--rented');
        botaoAlugar.classList.remove('dashboard__item__button--return')
        botaoAlugar.textContent = 'Alugar'
    } else { 
        imagemDisponibilidade.classList.add('dashboard__item__img');
        botaoAlugar.classList.add('dashboard__item__button--return');
        botaoAlugar.textContent = 'Devolver';
    }

}