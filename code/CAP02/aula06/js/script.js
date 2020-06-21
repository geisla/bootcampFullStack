window.addEventListener('load', function () {
  doFetch();
  doFetchAsync();

  divisionPromise(5, 1).then((result) => {
    console.log(result);
  });

  executeDivisionPromise();
  executeDivisionPromiseAsyncAwait();
  
});

function doFetch() {
  fetch('https://api.github.com/users/rrgomide')
    .then((res) => {
      res.json().then((data) => {
        showData(data);
      });
    })
    .catch((error) => {
      console.log('ta erradu');
    });
}

async function doFetchAsync() {
  const res = await fetch('https://api.github.com/users/rrgomide');
  const json = await res.json();
  console.log(json);
}

function showData(data) {
  const user = document.querySelector('#idUser');
  user.textContent = data.login + ' - ' + data.name;
}

//Criando Promise
function divisionPromise(a, b) {
  // return a / b;
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possível dividir por 0');
    }

    resolve(a / b);
  });
}

function executeDivisionPromise() {
  divisionPromise(5, 1).then((result) => {
    console.log(result);
  });
  divisionPromise(5, 0)
    .then((result) => {
      console.log(result);
    })
    .catch((errorMessage) => {
      console.log('error - ' + errorMessage);
    });
}

async function executeDivisionPromiseAsyncAwait() {
  const division = await divisionPromise(12, 2);
  console.log(division);
}
