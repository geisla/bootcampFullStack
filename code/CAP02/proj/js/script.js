window.addEventListener('load', () => {
  inputName = document.querySelector('#inputName');

  render();
});
function doFilter() {
  const homis = people.results.filter((person) => {
    return person.gender === 'male';
  });
  console.log(homis);
  return homis;
}

function doMap() {
  debugger;

  const nameEmailArray = people.results.map((person) => {
    return {
      nome: person.name,
      email: person.email,
      idade: person.dob.age,
    };
  });
  console.log(nameEmailArray);

  return nameEmailArray;
}


function render() {
  var mapzin = doMap();
  // mapzin = doFilter();
  

  var divNames = document.querySelector('#names');
  ///Limpa a div para atualizar a lista
  // divNames.innerHTML = '';

  var ul = document.createElement('ul');
  
  for (let i = 0; i < mapzin.length; i++) {
    var currentNames = mapzin[i];
    var li = document.createElement('li');
  
    // li.textContent = currentNames.nome.first + ' ' + currentNames.nome.last + ' - ' + currentNames.idade;
        li.textContent =
          currentNames.nome.first +
          ' ' +
          currentNames.nome.last +
          ' - ' +
          currentNames.idade;


    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  // clearInput();
}

