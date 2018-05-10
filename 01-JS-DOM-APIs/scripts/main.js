function fadeIn() {
  var el = document.querySelector('.hidden');
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
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

}
