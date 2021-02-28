let searchForm = document.getElementById('search-form');
let searchInput = document.getElementById('search-input');
let btnShowMore = document.getElementById('btnShowMore');
let elementGif = document.getElementById("searchGifs");
let btnSearch = document.getElementById("btn-search");
let btnRigthSearch = document.getElementById("btn-search-right")
let suggestionsCont = document.getElementById("containerSuggestions")
let lineSearch= document.getElementById("line")
let btnIcon= document.getElementById("btn-icon")
let ulSuggestion = document.getElementById("suggestion")

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
        
        const res = await fetch(pathSearch);
        const info = await res.json()
    
        return info;
        ;
    }

    let info = gifSearch(searchInput.value);
    info.then(info =>{
        for(i=0; i<imgMore ; i++){

            let img = document.createElement("img");
            img.setAttribute("src", info.data[i].images.fixed_width.url);
            img.setAttribute("class", "size-image")

            
            let favBtn = document.createElement("button");
            let btnDownload = document.createElement("button");
            let btnExpand= document.createElement("button");
            let divBtn = document.createElement("div");
            let divImg = document.createElement("div");
            let divContainer = document.createElement("div");

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

            if(open == true){
                btnRigthSearch.addEventListener("click", ()=>{
                elementGif.removeChil(divContainer);
                lineSearch.style.display="none";   
            })
            }
 
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

});

const autocomplete = ()=> {
    let search = searchInput.value;
    ulSuggestion.innerHTML="";
    
    let autocomplete = fetch(`https://api.giphy.com/v1/tags/related/${search}?api_key=${api_key}&limit=4`)
    .then(resp => resp.json())

    autocomplete.then(info =>{
        
        for(i= 0; i<info.data.length; i++){

            let text =document.createElement("p");
            let suggestionLi = document.createElement("li");

            text.setAttribute("class", "textSuggestion");
            suggestionLi.setAttribute("class","li-search");
            
            text.textContent= info.data[i].name;
            suggestionLi.appendChild(text);
            ulSuggestion.appendChild(suggestionLi);

            suggestionLi.addEventListener("click", function(){
                searchInput.value = text.textContent;
                ulSuggestion.classList.remove("suggestionShow")
            })

        }

    }).catch(err => console.log(err))

    if(search !== ""){
        ulSuggestion.classList.add("suggestionShow")
    }else{
        ulSuggestion.classList.remove("suggestionShow")

    }

}
searchInput.addEventListener("keyup", autocomplete)