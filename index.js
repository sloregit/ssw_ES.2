// Import stylesheets
import './style.css';

const cityElems = Array.from(document.getElementsByClassName('città'));
const apiKey = 'd0475be3a1967b1b49dfc02c8128001a';
const URL =
  'https://api.openweathermap.org/data/2.5/weather?APPID=' +
  apiKey +
  '&units=metric&q=';

for (let elem of cityElems) {
  elem.onclick = () => display(elem.innerHTML);

  ////di seguito il cambio colore aggiunto
  elem.addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'grey';
  });
  elem.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'initial';
  });
  //// style.css contiene un'alternativa
}

// Funzione collegata ai bottoni
function display(city) {
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"

  // Funzione callback invocata quando la request termina
  request.onload = function () {
    // funzione definita arrow
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      document.getElementById('risposta').innerHTML =
        'A ' + city + ' ci sono ' + dataObject.main.temp + ' gradi';
    } else {
      document.getElementById('risposta').innerText = 'Errore';
    }
  };

  // Applico il metodo "open"
  request.open('GET', URL + city, true);
  // Applico il metodo send (al termine chiamerà il callback "onload")
  request.send();
}
