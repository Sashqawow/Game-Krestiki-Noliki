
alert('Добро пожаловать в игру "Крестики-нолики"');
function validateForm() {
        var x = document.forms["myForm"]["1name"].value;
        var y = document.forms["myForm"]["2name"].value;
        if (x == ""|| x==" ") {
            alert("Необходимо ввести имя первого игрока");
            return false;
        }
        
        if (y == ""|| y==" ") {
            alert("Необходимо ввести имя второго игрока");
            return false;
        }else{
        
                        for (var i=0; i<9; i++){
                        document.getElementById('krestik').innerHTML+='<div class="block"></div>'; 
                           
    

var element=0;
document.getElementById('krestik').onclick=function(click){
        if (click.target.className=='block'){
                if (element%2==0){
                click.target.innerHTML='X';
                }else{
                click.target.innerHTML='O';
                
                }
                element++;
                win();
                
        }
}


function win (){
        var allelement=document.getElementsByClassName('block');
        if (allelement[0].innerHTML=='X'&&allelement[1].innerHTML=='X'&& allelement[2].innerHTML=='X'){
                if (alert('Победил '+document.forms["myForm"]["1name"].value));     
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
}        
}
}    
     
