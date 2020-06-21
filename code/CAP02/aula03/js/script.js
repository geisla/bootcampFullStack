window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestructuring();
});

function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );
  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  );

  const marriedPeople = [...marriedMen, ...marriedWomen];

  console.log(marriedMen);
  console.log(marriedWomen);
  console.log(marriedPeople);
}

function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 1000, 1000));
}

function infiniteSum(...numbers) {
  return numbers.reduce(
    (acumulador, elementoAtual) => acumulador + elementoAtual,
    0
  );
}

function doDestructuring() {
  // const first = people.results[0];

  for (let i = 0; i < people.results.length; i++) {
    var arrayCompleto = people.results[i];

    const { first } = arrayCompleto.name;
    const { username, password } = arrayCompleto.login;
    var txt;
    
    if (arrayCompleto.gender === 'female') {
      txt = `Dados pessoais da: ${first} User: ${username} Pass: ${password}`;
    } else if (arrayCompleto.gender === 'male') {
      txt = `Dados pessoais do: ${first} User: ${username} Pass: ${password}`;
    }
    console.log(txt);
  }

  //Repetitivo
  // const userName = first.login.username;
  // const password = first.login.password;

  //Usando destructuring
  // const { username, password } = first.login;
  // console.log(username, password);
}
