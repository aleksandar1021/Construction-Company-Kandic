var url = window.location.pathname;

if(url=="/gradjevinskafirmakandic/" || url=="/gradjevinskafirmakandic/index.html"){

window.onload = function(){
    let taster = document.getElementById("potvrda");
    taster.addEventListener("click", obradaForme);
}



//  JQUERY
$(document).ready(function(){
  $(".v0").click(function(){
    $(".k0").toggle("fast");
    if($(".v0").text()=="Pročitaj više"){
        $(".v0").html("Pročitaj manje")
    }
    else{
        $(".v0").html("Pročitaj više")
    }
    
  });
});

$(document).ready(function(){
    $(".v1").click(function(){
      $(".k1").toggle("fast");
      if($(".v1").text()=="Pročitaj više"){
          $(".v1").html("Pročitaj manje")
      }
      else{
          $(".v1").html("Pročitaj više")
      }
      
    });
  });

  $(document).ready(function(){
    $(".v2").click(function(){
      $(".k2").toggle("fast");
      if($(".v2").text()=="Pročitaj više"){
          $(".v2").html("Pročitaj manje")
      }
      else{
          $(".v2").html("Pročitaj više")
      }
      
    });
  });



//dinamicki ispis bokseva
let boxElem = document.getElementById("boxCase");
let boxHref = new Array ("assets/img/ser1.png","assets/img/ser2.png","assets/img/ser3.png");
let boxAlt = new Array ("slika1","slika3","slika3");
let boxDescription = new Array ("IZGRADNJA OBJEKATA", "REKONSTRUKCIJA", "ELEKTRO RADOVI");
let boxDescription2 = new Array ("Izgradnja novih objekata iz temelja, sa vašim ili našim planom","Rekonstrukcija postojećih objekata, od starog pravimo novo","Sve vrste elektro radova, unutar objekta ili van objekta");
let boxes = "";
for(let i=0;i<boxHref.length;i++){
    boxes+=`<div class="box">
                <img src="${boxHref[i]}" alt="${boxAlt[i]}"/>
                <p>${boxDescription[i]}</p>
                <h3 class="vise v${i}">Pročitaj više</h3>
                <p class="box-opis k${i}">${boxDescription2[i]}</p>
                
            </div>`;
}
boxElem.innerHTML = boxes;

//dinamicki ispis opisa radova
let listaOpisObj = document.getElementById("dodatanOpis");
let listaOpis=`<ul id="lista-opis">`;
let listaOpisValues =["Pripremni radovi, demontaža i rušenje","Električne Instalacije (slaba i jaka struja)","Električne Instalacije (slaba i jaka struja)","Mašinske instalacije (grejanje, klimatizacija, ventilacija)","Izrada svih vrsta spuštenih plafona","Oblaganje zidova, suvo malterisanje","Građevinska bravarija","Ugradnja i zamena fasadne i unutrašnje stolarije","Izolaterski radovi (hidro, termo i zvučna izolacija)","Postavljanje novog i sanacija postojećeg parketa","postavljanje keramičkih i granitnih pločica","Postavljanje PVC i tekstilnih podova","Izrada epoksidnih i mikrocementnih podova","Molersko-farbarski i dekoraterski radovi","Stolarski radovi"];
for(let i =0;i<listaOpisValues.length;i++){
    listaOpis+=`<li><i class="zmdi zmdi-chevron-right"></i> ${listaOpisValues[i]}</li>`;
}
listaOpisValues+=`</ul>`;
listaOpisObj.innerHTML=listaOpis;

//dadatan opis klik na dugme i uklanjanje
let dugmeOpis = document.getElementById("dugmeOpis");
let opisPadajuciTekst = document.getElementById("dodatanOpis")
dugmeOpis.addEventListener('click',()=>{
    if(opisPadajuciTekst.hasAttribute("class")){
        opisPadajuciTekst.classList.remove("display-block");
        dugmeOpis.innerText = "Pročitaj više";
        opisPadajuciTekst.removeAttribute("class");
    }
    else{
        opisPadajuciTekst.classList.add("display-block");
        dugmeOpis.innerText = "Zatvori";
    }
});

//galerija dinamicka ispis
let galDinamicka = `<div class="row">`;
let galSlikeNizLink = new Array ("kuca2","kuca1","kuca4","kuca5","kuca6","kuca7","kuca8","kuca9","kuca10");
let nizPovKuca = new Array (150,250,308,270,190,350,159,238,290);
let nizCenaKuca = new Array ("225.000,00","375.000,00","465.000,00","405.000,00","285.000,00","525.000,00","238.500,00","357.000,00","435.000,00");
for(let i=0;i<galSlikeNizLink.length;i++){
    galDinamicka +=
    `<div class="icon">
        <img class="slikaa" src="assets/img/${galSlikeNizLink[i]}.jpg" alt="kuca${i+1}" onclick="fun(${i}, 'Projekat ${i+1}, površina: ${nizPovKuca[i]} <sup>2</sup>, cena: ${nizCenaKuca[i]}&euro;')"/>
     </div>`;
     if(!((i+1)%3)){
        galDinamicka += `</div><div class="row">`;
     }
}
galDinamicka+=`</div>`
document.getElementById("galerijaDin").innerHTML = galDinamicka;

//projects galerija sa funkcijom sa argumentima
function fun(x, y) {
    document.getElementById("tekst-opis").innerHTML = y;
    var z = document.getElementsByClassName("slikaa");
    document.getElementById("pozornicaslika").src = z[x].src;
}

//kalkulator
var spanTagCena = document.querySelector("#span");
let dugmeCena = document.querySelector("#dugmeCena");
let dugmeBrisi = document.querySelector("#dugmeBrisi");
var zeleno = document.getElementById("ok");
dugmeCena.addEventListener('click', ()=>{
    var valueCalc = document.querySelector("#unosPov").value;
    var select = document.getElementById('check');
    var text = select.options[select.selectedIndex].text;
    var kalkReg = /^[1-9]{1,4}$/;
    if(valueCalc =="" && text == "Status"){
            spanTagCena.innerHTML ="Unesite povrsinu u metrima kvadratnima i status (fizicko lice/investitor)";
            zeleno.innerHTML="";
    }
    else if((text == "Status")){
        spanTagCena.innerHTML ="Unesite STATUS !"
        zeleno.innerHTML="";
    }
    else if(!kalkReg.test(valueCalc)){
        spanTagCena.innerHTML ="Uneta vrednost mora biti broj u opsegu (1-10000)!";
        zeleno.innerHTML="";
    }
    else{
        if(text == "Investitor"){
            var cena = (valueCalc * 1.500).toFixed(3) + " &euro;";
            spanTagCena.classList.add("forma-ok");
            spanTagCena.innerHTML="";
            zeleno.innerHTML=`Cena izgradnje iznosi: ${cena}`;
        }
        else{
            var cena = (valueCalc * 1.300).toFixed(3) + " &euro;";
            spanTagCena.classList.add("forma-ok");
            spanTagCena.innerHTML="";
            zeleno.innerHTML=`Cena izgradnje iznosi: ${cena}`;
        }
    }
});
dugmeBrisi.addEventListener('click',()=>{
    document.querySelector("#unosPov").value="";
    spanTagCena.innerHTML="";
    zeleno.innerHTML="";
});

//dugme za povrat gore
let gore = document.getElementById("gore");
document.addEventListener('scroll', ()=>{
if(document.documentElement.scrollTop > 400){
    gore.classList.add("display-block");
}
else{
    gore.classList.remove("display-block");
}
});

//dinamicki nav meni
let navMenuEl=document.getElementById("navMenu");
let ulValues = new Array ("POČETNA", "O NAMA","PROJEKTI", "CENOVNIK","KONTAKT", "O AUTORU");
let ulHref = new Array ("#1","#2","#3","#4","#5","autor.html");
let navMenu = `<ul id="lista">`;
for(let i=0;i<ulValues.length; i++){
    navMenu+=`<li><a href="${ulHref[i]}">${ulValues[i]}</li>`;
}
navMenu+=`</ul>`;
navMenuEl.innerHTML = navMenu;

//dinamicki ispis listse linkova u futeru
let footerListaObj = document.getElementById("lista-footer");
let footerListaValues = new Array("Početna","O nama","Projekti","Cenovnik","Kontakt","O autoru sajta");
let footerListaLinkovi = new Array("#1","#2","#3","#4","#5","autor.html");
let footerLista ="";
for(let i=0;i<footerListaLinkovi.length;i++){
    footerLista+=`<li><a href="${footerListaLinkovi[i]}">${footerListaValues[i]}</a></li>`;
}
footerListaObj.innerHTML=footerLista;

//ddl za formu
let ddlfObj = document.getElementById("sl");
let ddlGradovi = new Array("Beograd","Mladenovac","Lazarevac","Obrenovac","Novi Sad", "Bujanovac","Zrenjanin","Priština","Kragujevac","Kruševac","Subotica","Sombor","Aranđelovac","Pirot","Negotin","Valjevo","Aleksandrovac","Petrovac na Mlavi");
let ddlGradoviSortirani = ddlGradovi.sort();
let ddl = `<option value = "0" name = "ddl" hidden>Odaberite grad odakle dolazite</option>`
for(let i=0;i<ddlGradoviSortirani.length;i++){
    ddl += `<option value = "${i+1}" name = "ddl">${ddlGradoviSortirani[i]}</option>`;
}
ddlfObj.innerHTML = ddl;

//obrada forme
function obradaForme(){
    //elementi forme koji se proveravaju
    let objIme = document.getElementById("txt-ime");
    let objTel = document.getElementById("txt-broj");
    let objRadio = document.getElementsByName("rbtn");
    let objChc = document.getElementsByName("chc1");
    let objSelect = document.getElementById("sl");

    //regularni izrazi za sve elemente forme
    let regIzrazImePrezime = /^[A-ZŠĐŽČĆ][a-zšđčćž]{2,19}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,19}){1,3}$/;
    let regBrojTelefona = /^(\+381|0)(6[0-9])([0-9]{6,8})$/;                 

    let greskaImePrez = false;
    let greskaBroj = false;
    let greskaRadio = false;
    let greskaChc = false;
    let greskaSelect = false;
 
        if(!regIzrazImePrezime.test(objIme.value)){
            objIme.nextElementSibling.classList.add("display-block");
            objIme.nextElementSibling.innerHTML = "Ime i prezime moraju početi velikim slovom, da sadrže minimum po 3 karaktera, sa razmakom između, primer:<br/>Aleksandar Kandić";
            objIme.classList.add("okvir-greska");
            greskaImePrez=true;
        }
        else{
            objIme.nextElementSibling.classList.remove("display-block");
            objIme.nextElementSibling.innerHTML = "";
            objIme.classList.remove("okvir-greska");
            greskaImePrez=false;
        }

        if(!regBrojTelefona.test(objTel.value)){
            objTel.nextElementSibling.classList.add("display-block");
            objTel.nextElementSibling.innerHTML = "Broj telefona mora biti u formatu:<br/> +381658255131 ili 0658255131";
            objTel.classList.add("okvir-greska");
            greskaBroj=true;
        }
        else{
            objTel.nextElementSibling.classList.remove("display-block");
            objTel.nextElementSibling.innerHTML = "";
            objTel.classList.remove("okvir-greska");
            greskaBroj=false;
        }
        //radio kupljenje vrednosti
        let radioValue = "";
        for(let i=0;i<objRadio.length;i++){
            if(objRadio[i].checked){
                radioValue = objRadio[i].val;
                break;
            }
        }
        //provera radio buttona
        if(radioValue == ""){
            objRadio[0].parentElement.nextElementSibling.classList.add("display-block");
            objRadio[0].parentElement.nextElementSibling.innerHTML = "Odaberite status"
            greskaRadio = true;
        }
        else{
            objRadio[0].parentElement.nextElementSibling.classList.remove("display-block");
            objRadio[0].parentElement.nextElementSibling.innerHTML = "";
            greskaRadio=false;
        }
        //checkbox uzimanje vrednosti
        let chcValue = "";
        for(let i=0;i<objChc.length;i++){
            if(objChc[i].checked){
                chcValue+=objChc[i].value;
            }
        }
        //provera checkboxova
        if(chcValue==""){
            objChc[0].parentElement.nextElementSibling.classList.add("display-block");
            objChc[0].parentElement.nextElementSibling.innerHTML = "Odaberite bar jednu uslugu"
            greskaChc = true;
        }
        else{
            objChc[0].parentElement.nextElementSibling.classList.remove("display-block");
            objChc[0].parentElement.nextElementSibling.innerHTML = "";
            greskaChc = false;
        }
        //select lista
        let selectListaValue = objSelect.options[objSelect.selectedIndex].value;
        if(selectListaValue==0){
            objSelect.classList.add("okvir-greska");
            greskaSelect = true;
        }
        else{
            objSelect.classList.remove("okvir-greska");
            greskaSelect = false;
        }
    var ispis = document.getElementById("form-ok");    
    if(!greskaImePrez && !greskaRadio && !greskaSelect && !greskaRadio && !greskaChc && !greskaSelect){
            document.getElementById("forma2").reset();
            ispis.innerHTML = "Uspešno ste podneli zahtev, neko od zaposlenih ce vas uskoro kontaktirati";
    }
    else{
        ispis.innerHTML="";
    }
    var errors = document.getElementsByClassName("err");
    let dugmeReset = document.getElementById("brisi");
    dugmeReset.addEventListener("click",()=>{
        for(let i =0;i<errors.length;i++){
            errors[i].innerHTML="";
        }
        objIme.nextElementSibling.classList.remove("display-block");
        objIme.classList.remove("okvir-greska");
        objTel.nextElementSibling.classList.remove("display-block");
        objTel.classList.remove("okvir-greska");
        objRadio[0].parentElement.nextElementSibling.classList.remove("display-block");
        objChc[0].parentElement.nextElementSibling.classList.remove("display-block");
        objSelect.classList.remove("okvir-greska");
        ispis.innerHTML="";
    });  
}
}


else if(url=="/gradjevinskafirmakandic/autor.html"){
    //lista kod autora
    let objListaOmeni = document.getElementById("olist");
    let listaOMeni="";
    let nizListaOMeni = new Array("instagram","facebook-box","twitter-box","linkedin");
    for(let i=0;i<nizListaOMeni.length;i++){
        listaOMeni +=`<li><a href="#"><i class="zmdi zmdi-${nizListaOMeni[i]}"></i></a></li>`;
    }
    objListaOmeni.innerHTML = listaOMeni;

    //dinamicki nav meni
    let navMenuEl=document.getElementById("navMenu");
    let ulValues = new Array ("POČETNA", "O NAMA","PROJEKTI", "CENOVNIK","KONTAKT", "O AUTORU");
    let ulHref = new Array ("index.html#1","index.html#2","index.html#3","index.html#4","index.html#5","autor.html");
    let navMenu = `<ul id="lista">`;
    for(let i=0;i<ulValues.length; i++){
        navMenu+=`<li><a href="${ulHref[i]}">${ulValues[i]}</li>`;
    }
    navMenu+=`</ul>`;
    navMenuEl.innerHTML = navMenu;

    //dinamicki ispis listse linkova u futeru
    let footerListaObj = document.getElementById("lista-footer");
    let footerListaValues = new Array("Početna","O nama","Projekti","Cenovnik","Kontakt","O autoru sajta");
    let footerListaLinkovi = new Array("index.html#1","index.html#2","index.html#3","index.html#4","index.html#5","autor.html");
    let footerLista ="";
    for(let i=0;i<footerListaLinkovi.length;i++){
        footerLista+=`<li><a href="${footerListaLinkovi[i]}">${footerListaValues[i]}</a></li>`;
    }
    footerListaObj.innerHTML=footerLista;

}


//slajder
let slajderIndex = 1;
slajder(slajderIndex);
function slajdPlusMinus(n){
    slajder(slajderIndex+=n);
}
function trenutniSlajd(n){
    slajder(slajderIndex=n);
}
function slajder(n) {
    let slajdovi = document.getElementsByClassName("slajd");
    if (n > slajdovi.length) {slajderIndex = 1;}
    if(n < 1) { slajderIndex = slajdovi.length;}
    for (let i = 0; i < slajdovi.length; i++) {
      slajdovi[i].classList.remove("prviS");
    }
    slajdovi[slajderIndex-1].classList.add("prviS");
  }

//dinamicki ispis liste za drustvene mreze
let mediaEl = document.getElementById("media");
let mediaHref = new Array ("facebook", "twitter", "linkedin", "instagram");
let medias = `<ul id="listaMedia">`;
for(let i=0;i<mediaHref.length;i++){
    medias += `<li class="ikonice"><i class="zmdi zmdi-${mediaHref[i]}"></i>`;
}
medias += `<ul>`;
mediaEl.innerHTML = medias;

//dinamicki ispis liste iz footer-a
let listaFooterMrezeObj = document.getElementById("drustvene-mreze");
let listaFooterMreze = "";
let listaFooterMrezeId = new Array("fb","ig","tw","li","dk");
let listaFooterMrezeValues  = new Array("Facebook","Instagram","Twitter","Linkedin","Dokumentacija");
let listaFooterMrezeLinkovi = new Array("#","#","#","#","assets/Dokumentacija.pdf")
for(let i =0;i<listaFooterMrezeValues.length;i++){
    listaFooterMreze+=`<li><a href="${listaFooterMrezeLinkovi[i]}" id="${listaFooterMrezeId[i]}">${listaFooterMrezeValues[i]}</a></li>`;
}
listaFooterMrezeObj.innerHTML=listaFooterMreze;

//otvaranje padajucce liste za nav menu
let dugmeZaHamburger = document.getElementById("hamburger");
let navPadajuci = document.getElementById("navMenu");
let lista = document.getElementById("lista");
dugmeZaHamburger.addEventListener('click',()=>{
     if(navPadajuci.hasAttribute("class")){
         navPadajuci.classList.remove("display-block");
         navPadajuci.removeAttribute("class");
     }
     else{
        navPadajuci.classList.add("display-block");
     } 
});
