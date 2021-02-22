const api_key = "Nt8kz56S3R0wbsbVh9seCUoA3lVvqRem";
const trendingPath = `https://api.giphy.com/v1/trending/searches?api_key=${api_key}`;
const topTrending= `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`;

//funcion para agregar las categorias


fetch(trendingPath).then(function(res){
    return res.json();
}).then(function(json) {
    
    const trendingElem =  document.getElementById(`categories-trending`);
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

//funcion de trending 



fetch(topTrending).then(function(res){ 
    return res.json();
}).then(function(json){
    
    const topElement= document.getElementById(`trending-top`);
    let trendingHtml = '';
    
    json.data.forEach(function(obj){
       // console.log(json.data);
        const url = obj.images.fixed_width.url
        const alt = obj.images.title

            trendingHtml+=`<img 
            class="img-trending"
            src="${url}"
            alt="${alt}">`
           // console.log(trendingHtml);
        
    })
    topElement.innerHTML= trendingHtml;
    //console.log(topElement);
}).catch(function(err){
    console.log(err.message);
});

// let createCardOfGif = (gif, parent) => {
//     let card = document.createElement("div");
//     let imgContainer = document.createElement("div");
//     let img = document.createElement("img");
//     let backgroundHover = document.createElement("div");
//     let actionBtnList = document.createElement("ul");
//     let imgClases = ["like", "download", "maximize"];
//     let aClases = ["aLike", "aDownload", "aMaximize"];
//     let textContainer = document.createElement("div");
//     let userName = document.createElement("h6");
//     let GifTitle = document.createElement("h4");

//     imgContainer.className = "imgContainer";
//     card.className = "card";
//     backgroundHover.className = "cardBackground";
//     textContainer.className = "cardTextContainer";
//     userName.className = "userName";
//     GifTitle.className = "gifTitle";

//     img.src = gif.images.downsized.url;
//     img.alt = "not found";

//     parent.appendChild(card);
//     card.appendChild(imgContainer);
//     appendChildren(imgContainer, [img, backgroundHover]);
//     backgroundHover.appendChild(actionBtnList);
//     GifTitle.textContent = gif.title;
//     console.log(gif.title);
//     userName.textContent = gif.username;
//     console.log(gif.username);

//     for (let i = 0; i < imgClases.length; i++) {
//       let element = document.createElement("li");
//       let a = document.createElement("a");
//       a.className = aClases[i];
//       let btnImg = document.createElement("img");
//       btnImg.className = imgClases[i];
//       actionBtnList.appendChild(element);
//       element.appendChild(a);
//       if (aClases[i] == "aMaximize") {
//         a.addEventListener("click", maximize);
//       }
//       a.appendChild(btnImg);
//     }
//     backgroundHover.appendChild(textContainer);
//     appendChildren(textContainer, [userName, GifTitle]);
//   };


//   let maximize = (gif) => {
//     let body = document.getElementsByTagName("body")[0];
//     let modal = document.createElement("div");
//     modal.className = "modal";

//     let modalContainer = document.createElement("div");
//     modalContainer.id = "modalContainer";

//     let img = document.createElement("img");
//     img.src = gif.images.downsized.url;

//     let arrowLeft = document.createElement("button");
//     let arrowRight = document.createElement("button");
//     let closeBtn = document.createElement("button");

//     arrowLeft.className = "arrowLeft";
//     arrowRight.className = "arrowRight";
//     closeBtn.className = "closeBtn";
//     console.log("modal");

//     body.appendChild(modal);
//     modal.appendChild(modalContainer);
//   };


