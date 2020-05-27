//Bloco de decisão if else

var a = 5;
var b = 6;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + ' é igual a ' + b);
  }
}

// bloco de decisão switch
var dia = 1;

switch (dia) {
  case 1: console.log('Domingo'); break;
  case 2: console.log('Segunda'); break;
  case 3: console.log('Terça'); break;
  case 4: console.log('Quarta'); break;

  default: console.log('dia inválido'); break;
}

// bloco de decisão ternário

var a = 6;
var b = 7;

var resposta = a > b ? 'a é maior que b' : a < b ? 'a é menor que b' : 'a é igual a b';
console.log(resposta);

// Estrutura de repetição com while

var numAtual = 1;
var resultadoFinal = 0;

while (numAtual < 10) {
  resultadoFinal = numAtual;
  numAtual ++;
  console.log(numAtual);
}

//do while

var numAtual2 = 1;
var resultadoFinal2 = 0;

do {
  resultadoFinal2 = numAtual2;
  numAtual2++;
  console.log(numAtual2);
} while (numAtual2 < 10);

// for

var resultadoFinal3 = 0;

for (let numAtual3 = 1; numAtual3 <= 10; numAtual3++) {
  resultadoFinal3 = numAtual3;
}
 console.log(resultadoFinal3);
