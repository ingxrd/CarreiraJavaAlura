// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1

while (contador <=10){
    console.log('Contador crescente: ' + contador);
    contador++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;

while (contador2 >= 0){
    console.log('Contador decrescente' + contador2);
    contador2--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let contadorRegressivo = prompt('Insira o número para contagem regressiva');

while (contadorRegressivo >= 0){
    console.log('Contagem regressiva' + contadorRegressivo)
    contadorRegressivo--;
}
// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let contadorProgressiva= prompt('Insira o número para contagem progressiva');
let zeroContador = 0

while (zeroContador <= contadorProgressiva){
    console.log('Contagem progressiva ' + zeroContador)
    zeroContador++;
}
