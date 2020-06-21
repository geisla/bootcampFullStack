console.log(people);

/*
  map() - gera um novo array transformando os dados
  filter() - gera um novo array filtrando elementos com base em proposição
  forEach() - percorre todos os elementos do array aplicando lógica
  reduce() - realiza cálculo iterativo com base nos elementos
  find() - encontra elementos com base em proposições
  some() - verifica se há pelo menos um elemento que atenda à proposição
  every() - verifica se todos os elementos atendem à proposição
  sort() - ordena os elementos com base em um critério
*/

window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

//Transforma o json vindo da API em um json Mais simples
function doMap() {
   const nameEmailArray = people.results.map((person) => {
     return {
       nome: person.name,
       email: person.email,
     };
   });
   console.log(nameEmailArray);

   return nameEmailArray;
}

//Filtra apenas as pessoas com 50 anos ou mais
function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age >= 50;
  })
  console.log(olderThan50);
}

//pega o novo json gerado no doMap e adiciona uma nova propriedade no json para contar o tamanho do nome
function doForEach() {
  const mappedPeople = doMap();
 
  mappedPeople.forEach(person => {
    person.nameSize =
      person.nome.title.length +
      person.nome.first.length +
      person.nome.last.length;
  });
  console.log(mappedPeople);
  
}

//soma todas as idades das pessoas no json
function doReduce() {
  const vlInicial = 0;
  const totalAges = people.results.reduce((acumulador, elementoAtual) => {
    return acumulador + elementoAtual.dob.age;
  }, vlInicial)

  console.log(totalAges);
}
//Retorna a primeira pessoa da lista que tiver o Acre como estado
function doFind() {
  const foundAc = people.results.find(person => {
    return person.location.state ==='Acre';
  })
  // .location.state === 'Minas Gerais';
  console.log(foundAc);
}

//booleano - verifica se existe alguma pessoa com o estado Minas Gerais e retorna true or false
function doSome() {
  const foundMg = people.results.some(person => {
    return person.location.state === 'Minas Gerais';
  })
  if (foundMg) {
    console.log('Alguém mora aqui!')
  } else {
    console.log('Ninguém mora aqui :(');
  }
  console.log(foundMg);
}

// booleano - verifica se todos possuem naturalidade do Brasil e retorna true or false
function doEvery() {
  const isEverybodyBrazilian = people.results.every(person => {
    return person.nat === 'BR';
  })
  if (isEverybodyBrazilian) {
    console.log('Aqui é todo mundo BR, minha filha')
  } else {
    console.log('Há um gringo entre nós');
  }
  console.log(isEverybodyBrazilian);
}

//retorna um map com os nomes das pessoas no json e ordena por ordem alfabética
function doSort() {
  const mappedNames = people.results.map(person => {
    return {
      nome: person.name.first 
    }
  }).sort((a, b) =>{
    return a.nome.localeCompare(b.nome);
  })
  
  console.log(mappedNames);

}
