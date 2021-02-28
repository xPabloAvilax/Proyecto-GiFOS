let limite = 40;
let off= 0;
const api_key = "Nt8kz56S3R0wbsbVh9seCUoA3lVvqRem";
const trendingPath = `https://api.giphy.com/v1/trending/searches?api_key=${api_key}`;
//const topTrending= ;
let trendigContainer =  document.getElementById("trending-top")
let trendingElem =  document.getElementById(`categories-trending`);
let arrowLeft = document.getElementById("btn-left")
let arrowRigth = document.getElementById("btn-rigth")

//funcion para agregar las categorias
// async function trendingCategories(){
//     const resT = await fetch(trendingPath)
//     const infoT = await resT.json();
//     console.log(infoT);
//     return infoT; 
// }
// let infoT = trendingCategories();
// infoT.then(infoT => {
    
//     for(i=0; i>=5; i++){
//         let p = document.createElement("p");
//         p.setAttribute("class", "categories-trending");
//         p.textContent = infoT.data.data[i];
//         trendingElem.appendChild(p)
        
//     }
// }).catch(err =>{
//     console.log(err);
// })

//funcion para mostrar los trending
function trendingPrueba(off){
    async function trending(){
        const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limite}&offset=${off}`)
        const info = await res.json();
        return info
    }
    let info = trending();
    info.then(info => {
        for(i=0; i < info.data.length; i++){
            
    
            let containerGif = document.createElement("div");
            containerGif.setAttribute("class", "gifs");
            let imgGif = document.createElement("img");
            imgGif.setAttribute("src",info.data[i].images.fixed_width.url);
            imgGif.setAttribute("class","gifs");
            let pUser = document.createElement("p")
            let pTitle = document.createElement("p");
            pUser.textContent = info.data[i].username;
            pTitle.textContent= info.data[i].title;
            
            
            containerGif.appendChild(imgGif);
            trendigContainer.appendChild(containerGif);

            imgGif.addEventListener("mouseover", function(){
                let hoverDiv = document.createElement("div");
                let containerIcons = document.createElement("div");
                let imgFav = document.createElement("img");
                let imgMax = document.createElement("img");
                let imgDown = document.createElement("img");
                let pContainer = document.createElement("div");
                

                imgFav.setAttribute("src", "../assets/icon-fav.svg");
                imgFav.setAttribute("class", "bntMin", "id", "btn1");
                imgDown.setAttribute("src", "../assets/icon-download.svg")
                imgMax.setAttribute("src", "../assets/icon-max-normal.svg");
                imgMax.setAttribute("class", "bntMin", "id", "btn2");
                imgDown.setAttribute("class", "bntMin", "id", "btn3");
                containerIcons.setAttribute("class","iconsContent")
                pContainer.setAttribute("class", "text-pJson");
                hoverDiv.setAttribute("class","hoverGif")
            

                containerIcons.appendChild(imgFav);
                containerIcons.appendChild(imgMax);
                containerIcons.appendChild(imgDown);
                pContainer.appendChild(pUser);
                pContainer.appendChild(pTitle)
                hoverDiv.appendChild(containerIcons);
                hoverDiv.appendChild(pContainer);
                containerGif.appendChild(hoverDiv);
                console.log(pUser);
            })

            

        }
    }).catch(err => {
        console.log(err);
    })

}
trendingPrueba();

//pasar gifs
const nextGif =()=>{
    trendigContainer.scrollLeft+=400;
    
}

const backGif = () =>{
    trendigContainer.scrollLeft-=400;
  
}
arrowRigth.addEventListener("click",nextGif);
arrowLeft.addEventListener("click",backGif)

//muestra reactions
fetch(trendingPath).then(function(res){
    return res.json();
}).then(function(json) {
    
    
    let trendingHtml = '';

    let count = 0;
    json.data.slice(0,5).forEach(function(obj){
        const trendingTerms = obj;
        if(count<=3){
            trendingHtml+=`<p class="categories">${trendingTerms},</p>`
        }else{
            trendingHtml+=`<p class="categories">${trendingTerms}</p>`
        }
        count++;
    })   
    trendingElem.innerHTML=trendingHtml
}).catch(function(err){
  //  console.log(err.message);
});

// //funcion de trending 
// fetch(topTrending).then(function(res){ 
//     return res.json();
// }).then(function(json){
    
//     const topElement= document.getElementById(`trending-top`);
//     let trendingHtml = '';
    
//     json.data.forEach(function(obj){
//        // console.log(json.data);
//         const url = obj.images.fixed_width.url
//         const alt = obj.images.title

//             trendingHtml+=`<img 
//             class="img-trending"
//             src="${url}"
//             alt="${alt}">`
//            // console.log(trendingHtml);
        
//     })
//     topElement.innerHTML= trendingHtml;
//     //console.log(topElement);
// }).catch(function(err){
//     console.log(err.message);
// });



