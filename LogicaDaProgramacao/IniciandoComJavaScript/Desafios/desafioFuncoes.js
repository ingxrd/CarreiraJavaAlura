// Criar uma função que exibe "Olá, mundo!" no console.
function exibeOlaMundo(){
    console.log("Olá, mundo!");
}
exibeOlaMundo();


// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function fazerSaudacoes(nome){
    let saudacao = `Olá ${nome}`;
    console.log(saudacao)
    return saudacao
}
fazerSaudacoes('Ingrid')

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function descobrirDobroNumero(numero){
    let calculo = numero * 2; 
    console.log(`O dobro de ${numero} é ${calculo}`);
    return calculo 
}
descobrirDobroNumero(2);


// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(numero1, numero2, numero3){
    let media = (numero1+numero2+numero3) / 3
    console.log(`A média é: ${media}`)
    return media
}
calcularMedia(1,2,3);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function verificaMaiorNumero(a, b){
    if (a > b){
        console.log(`O maior número é ${a}`);
    } else { 
        console.log(`O maior número é o ${b}`);
    }
}

verificaMaiorNumero(3,2);


// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function calculaQuadrado(numero){
    let quadrado = numero * numero;
    console.log(`Resultado da múltiplicação: ${quadrado}`);
}

calculaQuadrado(3);
