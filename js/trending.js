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
    console.log(err.message);
});

//funcion de trending 

fetch(topTrending).then(function(res){ 
    return res.json();
}).then(function(json){
    
    const topElement= document.getElementById(`trending-top`);
    let trendingHtml = '';
    
    json.data.forEach(function(obj){
        console.log(json.data);
        const url = obj.images.fixed_width.url
        const alt = obj.images.title

            trendingHtml+=`<img 
            class="img-trending"
            src="${url}"
            alt="${alt}">`
            console.log(trendingHtml);
        
    })
    topElement.innerHTML= trendingHtml;
    console.log(topElement);
}).catch(function(err){
    console.log(err.message);
});


