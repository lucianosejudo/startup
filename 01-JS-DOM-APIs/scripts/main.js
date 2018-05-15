var el = document.getElementById('hidden');

function fadeIn() {
  el.classList.toggle('fade');
}

function showAlert(){
  alert("Hello there!");
};

function getNorrisJoke() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        let jokes = JSON.parse(this.responseText);
        document.getElementById("section").innerHTML = jokes.value.joke;
    }
  }
  xhr.open('GET', "http://api.icndb.com/jokes/random", true);
  xhr.send(null);
};

let config = {
  "method": "", "url":""
}

function promiseFunction(config) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url);
    xhr.onload = function() {
      if (xhr.status == 200) {
        resolve(xhr.response);
      }
      else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.onerror = function() {
      reject(Error("Network Error"));
    };
    xhr.send();
  });
};

function getNorrisJoke2() {
  config.method = 'GET';
  config.url = 'http://api.icndb.com/jokes/random';

  promiseFunction(config).then(function(response) {
    let jokes = JSON.parse(response);
    document.getElementById('section').innerHTML = jokes.value.joke;
  }).catch(function(error){
      document.getElementById('section').style.color = "red";
  })
};

function getNorrisJoke3() {
  let init = {method: 'GET', cache: 'default'};

  fetch('http://api.icndb.com/jokes/random', init).then(function(response){
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }
    response.json().then(function(response) {
      document.getElementById('section').innerHTML = response.value.joke;
    });
  })
  .catch(function(err){
    console.log('Fetch Error :-S', err);
    document.getElementById('section').style.color = "red";
  })
};


function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}


function getResponse() {
  let init = {method: 'GET', cache: 'default'};
  const ul = document.getElementById('repositories');
  while(ul.hasChildNodes()){
    ul.removeChild(ul.firstChild);
  }

  let search = document.getElementById('inputRep').value;
  fetch('https://api.github.com/search/repositories?q=topic:' + search, init).then(function(response){
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }
    response.json().then(function(response) {
      console.log(response.items);
      let repositories = response.items;
      return repositories.map(function(repository){
        let li = createNode('li'),
        span = createNode('span');
        span.innerHTML = `${repository.full_name}`;
        append(li, span);
        append(ul, li);
      })
    });
  })
  .catch(function(err){
    console.log('Fetch Error :-S', err);
  })
};

var matrix0 = new Array(3);
var matrix1 = new Array(3);
var matrix2 = new Array(3);
var matrix = new Array(3);
matrix0[0] = 5;
matrix0[1] = 6;
matrix0[2] = 7;
matrix1[0] = 1;
matrix1[1] = 2;
matrix1[2] = 3;
matrix2[0] = 9;
matrix2[1] = 23;
matrix2[2] = 5;
matrix[0] = matrix0;
matrix[1] = matrix1;
matrix[2] = matrix2;

function DOMmanipulation(array) {
  let table = document.createElement("table");
  document.body.appendChild(table);
  for (let i = 0; i < array.length; i++) {
    var row = document.createElement("tr");
    table.appendChild(row);
    for (var j = 0; j < array.length; j++) {
      let td = document.createElement("td");
      row.appendChild(td);
      data = document.createTextNode(array[i][j]);
      td.appendChild(data);
    }
  }
};

DOMmanipulation(matrix);
