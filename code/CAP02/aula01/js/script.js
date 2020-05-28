'use strict'; //javascript acusa mais erros

// var x let

//var tem escopo abrangente
//let tem escopo reduzido 

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var' + i);
  }

  i = 20;
  console.log(i);
}

function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('let' + i);
  }

  i = 20;
  console.log(i);
}

withVar();
// withLet();

// const não podemos reatribuir valores
const c = 10;
// c = 20;
console.log(c);

//ainda sim não é perfeitamente não reatrivuida
const d = [];
d.push(1);
console.log(d); //não continuou como uma constante de um array vazio

//functions x arrow functions

//função comum
function sum(a,b) {
  return a + b;
}
console.log(sum(2,2));

// função anonima
const sum2 = function(a,b) { 
  return a + b
}
console.log(sum2(2,2))

//arrow function
const sum3 = (a,b) => {
  return a + b;
}
console.log(sum3(2,2))

//arrow function reduzida
const sum4 = (a,b) => a + b;
console.log(sum4(2,2))


// Template literals
const name = 'Geisla';
const surName = 'Silva';

//forma convencional de concatenação
const txt = 'Meu nome é ' + name + ' ' + surName;

//concatenação com template literals
const txt2 = `Meu nome é ${name} ${surName}`;

console.log(txt);
console.log(txt2);

//default parameters
const sum5 = (a,b = 10) => a + b;
console.log(sum5(2));



