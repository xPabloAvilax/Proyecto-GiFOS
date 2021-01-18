let darkMode = document.getElementById('cambio'); //Elemento que activa el evento click
let darkHeader = document.getElementById('header');//cambia header a modo oscuro
let darkMain = document.getElementById('main');//main header a modo oscuro
let darkTrending= document.getElementById('top-trending');//seccion trending header a modo oscuro
let darkFooter = document.getElementById('footer');
let changeName = document.getElementById('cambio')
let modoNoc= false;

//Funcion qye realiza el cambio a modo oscuro
darkMode.addEventListener('click', ()=>{
    darkHeader.classList.toggle('darkMode');
    darkMain.classList.toggle('darkMode');
    darkTrending.classList.toggle('darkMode');
    darkFooter.classList.toggle('darkMode');
    //se realiza una comprobacion para cambiar el nombre del elemento 
    let modoNocturno= "Modo Nocturno";
    let modoDiurno = "Modo Diurno"
    if(modoNoc == false){
            document.getElementById('cambio').innerHTML = modoDiurno;
             modoNoc=true
           }else{
            document.getElementById('cambio').innerHTML = modoNocturno;
            modoNoc=false  
          }
})

let btnHamburger = document.getElementById("menu-toggle");
let cross = document.getElementById("menu-toggle")
//se realiza un funcion con elemento clik, para despelgar menu y para cambiar la forma del menu hamburgesa
 btnHamburger.addEventListener("click", ()=>{
     let outnav = document.getElementById("navmenu__list")
     outnav.classList.toggle("nav-open");  
     cross.classList.toggle("menu-open");
     

 })
 



