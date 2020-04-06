alert('Добро пожаловать в игру "Крестики-нолики"');

var deck = [null, null, null, null, null, null, null, null, null]; // пустая доска, без X или O, начало игры
// Players
var firstPlayerName = null;
var secondPlayerName = null;

function setPlayersNames() {
  var registerFrom = document.getElementById('playersFrom');
  var name1 = registerFrom["1name"].value.trim();
  var name2 = registerFrom["2name"].value.trim();
  
  if (name1.length < 2 && name2.length < 2) {
    var notification = document.createElement('p')
    notification.classList.add("notification-warning");
    notification.textContent = 'Введите корректные имена';
    document.getElementsByTagName('h1')[0].after(notification);
  } else {
    // TODO: start the game
  }
}

 

  function win (){
          var allelement=document.getElementsByClassName('block');
          if (allelement[0].innerHTML=='X'&&allelement[1].innerHTML=='X'&& allelement[2].innerHTML=='X'){
                  (alert('Победил '+document.forms["myForm"]["1name"].value));     
          location.reload();}
          if (allelement[3].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[5].innerHTML=='X'){
                  alert('Победил '+document.forms["myForm"]["1name"].value);     
          location.reload();}
          if (allelement[6].innerHTML=='X'&&allelement[7].innerHTML=='X'&& allelement[8].innerHTML=='X'){
                  alert('Победил '+document.forms["myForm"]["1name"].value);     
          location.reload();}
          if (allelement[0].innerHTML=='X'&&allelement[3].innerHTML=='X'&& allelement[6].innerHTML=='X'){
                  alert('Победил '+document.forms["myForm"]["1name"].value);     
          location.reload();}
          if (allelement[1].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[7].innerHTML=='X'){
                  alert('Победил '+document.forms["myForm"]["1name"].value);     
          location.reload();}
          if (allelement[2].innerHTML=='X'&&allelement[5].innerHTML=='X'&& allelement[8].innerHTML=='X'){
                  alert('Победил '+document.forms["myForm"]["1name"].value);     
          location.reload();}
          if (allelement[0].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[8].innerHTML=='X'){
                  alert('Победил '+document.forms["myForm"]["1name"].value);     
          location.reload();}
          if (allelement[2].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[6].innerHTML=='X'){
                  alert('Победил '+document.forms["myForm"]["1name"].value);     
          location.reload();}


          if (allelement[0].innerHTML=='O'&&allelement[1].innerHTML=='O'&& allelement[2].innerHTML=='O') {
                  alert('Победил '+document.forms["myForm"]["2name"].value);     
          location.reload();}
          if (allelement[3].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[5].innerHTML=='O') {
                  alert('Победил '+document.forms["myForm"]["2name"].value);     
          location.reload();}
          if (allelement[6].innerHTML=='O'&&allelement[7].innerHTML=='O'&& allelement[8].innerHTML=='O') {
                  alert('Победил '+document.forms["myForm"]["2name"].value);     
          location.reload();}
          if (allelement[0].innerHTML=='O'&&allelement[3].innerHTML=='O'&& allelement[6].innerHTML=='O') {
                  alert('Победил '+document.forms["myForm"]["2name"].value);     
          location.reload();}
          if (allelement[1].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[7].innerHTML=='O') {
                  alert('Победил '+document.forms["myForm"]["2name"].value);     
          location.reload();}
          if (allelement[2].innerHTML=='O'&&allelement[5].innerHTML=='O'&& allelement[8].innerHTML=='O') {
                  alert('Победил '+document.forms["myForm"]["2name"].value);     
          location.reload();}
          if (allelement[0].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[8].innerHTML=='O') {
                  alert('Победил '+document.forms["myForm"]["2name"].value);     
          location.reload();}
          if (allelement[2].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[6].innerHTML=='O') {
                  alert('Победил '+document.forms["myForm"]["2name"].value);     
          location.reload();}
  }
