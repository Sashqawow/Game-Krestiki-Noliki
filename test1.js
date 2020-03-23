let player1=prompt('Введите имя первого игрока');
let player2=prompt('Введите имя второго игрока');

window.onload=function(){
for (var i=0; i<9; i++){
document.getElementById('krestik').innerHTML+='<div class="block"></div>'; 
}

var element=0;
document.getElementById('krestik').onclick=function(click){
        console.log(click);
        if (click.target.className=='block'){
                if (element%2==0){
                click.target.innerHTML='X';     
                } else{
                click.target.innerHTML='O';
                }
                element++;
                win();
                
        }
}


function win (){
        var allelement=document.getElementsByClassName('block');
        console.log(allelement);
        if (allelement[0].innerHTML=='X'&&allelement[1].innerHTML=='X'&& allelement[2].innerHTML=='X') alert('Победил '+player1); 
        if (allelement[3].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[5].innerHTML=='X') alert('Победил '+player1);
        if (allelement[6].innerHTML=='X'&&allelement[7].innerHTML=='X'&& allelement[8].innerHTML=='X') alert('Победил '+player1);
        if (allelement[0].innerHTML=='X'&&allelement[3].innerHTML=='X'&& allelement[6].innerHTML=='X') alert('Победил '+player1);
        if (allelement[1].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[7].innerHTML=='X') alert('Победил '+player1);
        if (allelement[2].innerHTML=='X'&&allelement[5].innerHTML=='X'&& allelement[8].innerHTML=='X') alert('Победил '+player1);
        if (allelement[0].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[8].innerHTML=='X') alert('Победил '+player1);
        if (allelement[2].innerHTML=='X'&&allelement[4].innerHTML=='X'&& allelement[6].innerHTML=='X') alert('Победил '+player1);
        
     
        if (allelement[0].innerHTML=='O'&&allelement[1].innerHTML=='O'&& allelement[2].innerHTML=='O') alert('Победил '+player2);
        if (allelement[3].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[5].innerHTML=='O') alert('Победил '+player2);
        if (allelement[6].innerHTML=='O'&&allelement[7].innerHTML=='O'&& allelement[8].innerHTML=='O') alert('Победил '+player2);
        if (allelement[0].innerHTML=='O'&&allelement[3].innerHTML=='O'&& allelement[6].innerHTML=='O') alert('Победил '+player2);
        if (allelement[1].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[7].innerHTML=='O') alert('Победил '+player2);
        if (allelement[2].innerHTML=='O'&&allelement[5].innerHTML=='O'&& allelement[8].innerHTML=='O') alert('Победил '+player2);
        if (allelement[0].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[8].innerHTML=='O') alert('Победил '+player2);
        if (allelement[2].innerHTML=='O'&&allelement[4].innerHTML=='O'&& allelement[6].innerHTML=='O') alert('Победил '+player2);

}
}      

