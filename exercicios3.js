// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let item of lista) {
    console.log(item)
}

console.log('---------');

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

function Lista(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(i, array[i])
    }
}

Lista(lista)

console.log('---------');

// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const listaNumeros = [10, 11, 12, 10, 11, 12, 10, 11, 12, 10, 11, 12];

function Soma(arr) {
    let soma = 0;
    for(let item of arr) {
        soma += item;
    }   
    return soma
}

console.log(Soma(listaNumeros));


console.log('---------');

// Crie uma função que receba uma array de números inteiros
//  e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

function imprimeMaiorEMenor(arr) {

  let maior = 0;
  let menor = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i]
    }
    if (arr[i] < menor) {
      menor = arr[i]
    }
  }
  return `o maior número é ${maior} e o menor número é ${menor}`;
}

console.log(imprimeMaiorEMenor(arrMenoresMaiores));

// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] 
// e exibir no console apenas os números pares contidos nesse array.


const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log('Números pares do array:');

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const listaNums = [10, 8, 6, 9, 7, 5];

let soma = 0;

for(numero of listaNums)  {
    soma += numero
}

const media = soma / listaNums.length;

console.log('Array:', listaNums);
console.log('Média dos números:', media);

