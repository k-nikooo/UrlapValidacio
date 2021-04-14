window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);

}
function $(nev) {
    return document.querySelectorAll(nev);
}

function init(){
    //console.log("hahó");
    
    ID("kuld").addEventListener("click",validalas);
}

function validalas(){
    console.log("validalas");
    var urlapAdat="";
    //a név beviteli mezőt ellenőrizzük
    //Nagybetűvel kezdődik
    //betűt adott-e meg?
    //1 karakternél hosszabb legyen
    var hiba="";
    var filter=/[A-Z]+[a-z]{2,}/
    if (!filter.test(ID("nev").value)){
        hiba+="A név nagybetűvel kezdődjön! <br> Legalább 3 karakter hosszú legyen!<br>";
        ID("nev").style.border="3px solid red";
    } else {
        ID("nev").style.border="none";
        urlapAdat+="Név: "+ID("nev").value+"<br>";
    }
    
    var emailFilter=/[*a-z]+@+[*a-z]+.+[*a-z]/;
    if (!emailFilter.test(ID("email").value)){
        hiba+="Kisbetűvel kezdödjön, legyen benne kukac, következzen utána kisbetű, majd pont!<br>";
        ID("email").style.border="3px solid red";
    } else {
        ID("email").style.border="none";
    }
    
    if(ID("email").value === ID("email2").value){
        urlapAdat+="Email: "+ID("email").value+"<br>";
        ID("email2").style.border="none";
    } else {
        hiba+="Nem egyforma a két e-mail.";
        ID("email2").style.border="3px solid red";
    }
    
    console.log(hiba);
    $("aside section:nth-child(1) p")[0].innerHTML=hiba;
    
    $("aside section:nth-child(2) p")[0].innerHTML=urlapAdat;
}