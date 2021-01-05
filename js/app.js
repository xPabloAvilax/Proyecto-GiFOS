

function dark(){ // funcion que abarca a las otras para modo nocturno
    darkHeader()
    darkMain()
    darkTrending()
    darkFooter()
    changeName()
 
}
function darkHeader(){
    let element = document.getElementById('header');
    element.classList.toggle('darkMode');
}


let modoNoc= false;
//funciion para cambiar nombre del modo
function changeName(){
    let modoNocturno= "Modo Nocturno";
    let modoDiurno = "Modo Diurno"

   if(modoNoc == false){
     document.getElementById('cambio').innerHTML = modoDiurno;
     modoNoc=true
   }else{
    document.getElementById('cambio').innerHTML = modoNocturno;
    modoNoc=false
    
   }
   console.log(modoNoc);

    
}
function darkMain(){
    let element= document.getElementById('main');
    element.classList.toggle('darkMode');
}
function darkTrending(){
    let element = document.getElementById('top-trending');
    element.classList.toggle('darkMode');
}
function darkFooter(){
    let element = document.getElementById('footer');
    element.classList.toggle('darkMode');
}

