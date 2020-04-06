alert('Добро пожаловать в игру "Крестики-нолики"');
document.querySelectorAll('.cell').forEach(function(cell) {
    cell.addEventListener('click', gameTurn);
});

var deck = [null, null, null, null, null, null, null, null, null]; // пустая доска, без X или O, начало игры
// Players
var firstPlayerName = null;
var secondPlayerName = null;

function setPlayersNames() {
  var registerFrom = document.getElementById('playersFrom');
  var name1 = registerFrom["1name"].value.trim();
  var name2 = registerFrom["2name"].value.trim();

  if (name1.length < 2 && name2.length < 2) {
    var notification = document.createElement('p');
    notification.classList.add('notification');
    notification.classList.add('notification-warning');
    notification.textContent = 'Введите корректные имена';
    var oldNotification = document.querySelector('#registration .notification');
    if (!oldNotification) document.querySelector('#registration .register-form').prepend(notification);
  } else {
    firstPlayerName = name1;
    secondPlayerName = name2;
    document.getElementById('registration').classList.add('disabled');
    document.getElementById('game').classList.remove('disabled')
  }
}

function gameTurn(e) {
    var cellIndex = e.target.dataset['cellIndex'];
    if (deck[cellIndex]) {
      var notification = document.createElement('p');
      notification.classList.add('notification');
      notification.classList.add('notification-warning');
      notification.textContent = 'Нажатое поле уже занято';
      var oldNotification = document.querySelector('#game .notification');
      if (!oldNotification) document.querySelector('#game #gameDeck').before(notification);
    } else {
      // TODO: turn logic
    }
}

// старое говно для справки
  // function win (){
  //         var allelement=document.getElementsByClassName('block');
  //         if (allelement[0].innerHTML=='X'&&allelement[1].innerHTML=='X'&& allelement[2].innerHTML=='X'){
  //                 (alert('Победил '+document.forms["myForm"]["1name"].value));
  //         location.reload();}
  //         if (allelement[3].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[5].innerHTML=='X'){
  //                 alert('Победил '+document.forms["myForm"]["1name"].value);
  //         location.reload();}
  //         if (allelement[6].innerHTML=='X'&&allelement[7].innerHTML=='X'&& allelement[8].innerHTML=='X'){
  //                 alert('Победил '+document.forms["myForm"]["1name"].value);
  //         location.reload();}
  //         if (allelement[0].innerHTML=='X'&&allelement[3].innerHTML=='X'&& allelement[6].innerHTML=='X'){
  //                 alert('Победил '+document.forms["myForm"]["1name"].value);
  //         location.reload();}
  //         if (allelement[1].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[7].innerHTML=='X'){
  //                 alert('Победил '+document.forms["myForm"]["1name"].value);
  //         location.reload();}
  //         if (allelement[2].innerHTML=='X'&&allelement[5].innerHTML=='X'&& allelement[8].innerHTML=='X'){
  //                 alert('Победил '+document.forms["myForm"]["1name"].value);
  //         location.reload();}
  //         if (allelement[0].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[8].innerHTML=='X'){
  //                 alert('Победил '+document.forms["myForm"]["1name"].value);
  //         location.reload();}
  //         if (allelement[2].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[6].innerHTML=='X'){
  //                 alert('Победил '+document.forms["myForm"]["1name"].value);
  //         location.reload();}
  //
  //
  //         if (allelement[0].innerHTML=='O'&&allelement[1].innerHTML=='O'&& allelement[2].innerHTML=='O') {
  //                 alert('Победил '+document.forms["myForm"]["2name"].value);
  //         location.reload();}
  //         if (allelement[3].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[5].innerHTML=='O') {
  //                 alert('Победил '+document.forms["myForm"]["2name"].value);
  //         location.reload();}
  //         if (allelement[6].innerHTML=='O'&&allelement[7].innerHTML=='O'&& allelement[8].innerHTML=='O') {
  //                 alert('Победил '+document.forms["myForm"]["2name"].value);
  //         location.reload();}
  //         if (allelement[0].innerHTML=='O'&&allelement[3].innerHTML=='O'&& allelement[6].innerHTML=='O') {
  //                 alert('Победил '+document.forms["myForm"]["2name"].value);
  //         location.reload();}
  //         if (allelement[1].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[7].innerHTML=='O') {
  //                 alert('Победил '+document.forms["myForm"]["2name"].value);
  //         location.reload();}
  //         if (allelement[2].innerHTML=='O'&&allelement[5].innerHTML=='O'&& allelement[8].innerHTML=='O') {
  //                 alert('Победил '+document.forms["myForm"]["2name"].value);
  //         location.reload();}
  //         if (allelement[0].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[8].innerHTML=='O') {
  //                 alert('Победил '+document.forms["myForm"]["2name"].value);
  //         location.reload();}
  //         if (allelement[2].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[6].innerHTML=='O') {
  //                 alert('Победил '+document.forms["myForm"]["2name"].value);
  //         location.reload();}
  // }
