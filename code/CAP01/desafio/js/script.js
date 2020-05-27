window.addEventListener('load', start);

var globalNames = [];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start() {
  inputName = document.querySelector('#inputName');
  preventFormSubmit();
  activateInput();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function insertName(getNames) {
    globalNames.push(getNames);
    render();
  }

  function updateName(getNames) {
    globalNames[currentIndex] = getNames;
    render();
  }

  function handleTyping(event) {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
      }

      isEditing = false;
    } 
  }
  inputName.focus();
  inputName.addEventListener('keyup', handleTyping);
}

function render() {
  function createDeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }
      var button = document.createElement('button');
      button.textContent = 'X';

      button.addEventListener('click', deleteName);

      return button;
  }

  function createSpan(name, index) {
     function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
     }

     var span = document.createElement('span');
     span.textContent = name;

     span.addEventListener('click', editItem)

     return span;
  }

  var divNames = document.querySelector('#names');
  ///Limpa a div para atualizar a lista
  divNames.innerHTML = '';

  var ul = document.createElement('ul');

  for (let i = 0; i < globalNames.length; i++) {
    var currentNames = globalNames[i];
    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentNames, i);
   

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

function clearInput() {
  inputName.value = '';
  inputName.focus();
}
