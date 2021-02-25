let searchForm = document.getElementById('search-form');
let searchInput = document.getElementById('search-input');
let btnShowMore = document.getElementById('btnShowMore');
let elementGif = document.getElementById("searchGifs");
let btnSearch = document.getElementById("btn-search");
let btnRigthSearch = document.getElementById("btn-search-right")
let suggestionsCont = document.getElementById("containerSuggestions")
let lineSearch= document.getElementById("line")
let clickButtonSearch= false;
let btnIcon= document.getElementById("btn-icon")
let open= false;
let imgMore = 8;
let offset= 0;

function iconSearch(element, remove, add, show){
    element.addEventListener("click", ()=>{
        btnIcon.classList.remove(remove);
        btnIcon.classList.add(add);
        btnSearch.style.display= show;
        if(element == searchInput && open == false){
            open=true;
        }else if(element == btnRigthSearch && open ==true){
            searchInput.value="";
            open= false;
        }
        
    })
    
}
iconSearch(searchInput, "fa-search", "fa-times", "block", );
iconSearch(btnRigthSearch, "fa-times", "fa-search", "none");


function search(){
    async function gifSearch(q){
        let pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=${imgMore}&offset=${offset}`;
        console.log(pathSearch);
        const res = await fetch(pathSearch);
        const info = await res.json()
        return info;
    }

    let info = gifSearch(searchInput.value);
    info.then(info =>{
        for(i=0; i<imgMore ; i++){

            let img = document.createElement("img");
            img.setAttribute("src", info.data[i].images.fixed_width.url);
            img.setAttribute("class", "size-image")
            

            let divContainer = document.createElement("div");
            let favBtn = document.createElement("div");
            let btnDownload = document.createElement("div");
            let btnExpand= document.createElement("div");
            let divBtn = document.createElement("div");
            let divImg = document.createElement("div");

            divImg.setAttribute("class" , "img-div");
            divBtn.setAttribute("class", "btn-container");
            divContainer.setAttribute("class", "div-Container");
            favBtn.setAttribute("class", "far fa-heart btn-all", "id", "fav-btn");
            btnDownload.setAttribute("class", "fas fa-arrow-down btn-all", "id","down-btn");
            btnExpand.setAttribute("class", "fas fa-expand-alt btn-all", "id","expand-btn" );
            divBtn.appendChild(favBtn);
            divBtn.appendChild(btnExpand);
            divBtn.appendChild(btnDownload);
            divContainer.appendChild(img);
            divContainer.appendChild(divImg);
            divContainer.appendChild(divBtn);
            elementGif.appendChild(divContainer);

                        // if(open == true){
                        //                     btnRigthSearch.addEventListener("click", ()=>{
                        //                         divContainer.remove(elementGif);
                        //                     lineSearch.style.display="none";   
                        //                      })
                        //                     }
 
       } 
             
    }).catch(err =>{
        console.log(err);
    })
    lineSearch.style.display="block"
}


btnIcon.addEventListener("click", (e)=>{
    e.preventDefault();
    const q = searchInput.value;
    let titulo = document.getElementById("titleGifs");
    titulo.innerHTML=q;
    search();
    ShowMore();
    
})



searchForm.addEventListener("keyup", (e)=>{
    if (event.which === 13 || event.keyCode == 13) {
        e.preventDefault();
        const q = searchInput.value;
        let search_term = document.getElementById("titleGifs")
        search_term.innerHTML = q;
        search();
        ShowMore();
    }
})

function ShowMore(){
    if(searchInput.value != ""){
                btnShowMore.classList.toggle('btn-showMore')     
           }
}

btnShowMore.addEventListener("click", (e)=>{
    e.preventDefault()   
  offset+=8;
  search(searchInput.value)

})

////////////////////////////Suggestions

// const getSuggestions = async () => {
//     if(searchInput.value.length >=2){
//         let url = `https://api.giphy.com/v1/tags/related/${searchInput.value}?api_key=${api_key}`;
//         const respSuggetions = await fetch(url);
//         const suggestions =  await respSuggetions.json();
//         console.log(suggestions);
//         suggestionsCont.style.display="block"
//         addSugerencias(suggestions)
//     }
// }

// function addSugerencias(suggestions) {
//     suggestionsCont.innerHTML = ""
//     clickButtonSearch = true;
//     for (let i = 0; i < 5; i++) {
    
//         let suggestion = suggestions.data[i].name;
//         console.log(suggestion);
//         //cambia la lupa por la X
        
//         //rellena  las sugerencias
//         suggestionsCont.innerHTML += `
//         <div>
//         <div class="search-suggestion">
//         <img src="../assets/icon-search.svg" style="opacity:70%">
//         </div>
//         <div class="txt-suggestion" 
//         id="txt-suggestion${i}"
//         onclick="ejecutarBusqueda('${suggestion}')">
//         ${suggestion}
//         </div>
//         </div>`;
//         // let suggestionDiv = document.createElement("div");
//         // suggestionDiv.className("search-suggestion");
//         // let imgSuggestion = document.createElement("img");
//         // imgSuggestion.setAttribute("src", "../assets/icon-search.svg");
//         // let textSuggDiv= createElement("div","class","txt-suggestion", "id", "txt-suggestion")
        
//     };
// };

// function chkEnter(event) {
//     let x = event.key;
//     if (x === "Enter") {
        
//         if (searchInput.value === "") {
//             alert('ingrese un término de búsqueda') // resupuesta provisoria
//         } else {
//             closeSuggestions()       
//         }
        
//     };
// }

// function closeSuggestions() {
//     if (clickButtonSearch) {
//         //terminoBuscado.value = ""
//         suggestionsCont.style.display= "none"
//         btnIcon.style.background = "url(../sssets/icon-search.svg) no-repeat"
//     }
// }

