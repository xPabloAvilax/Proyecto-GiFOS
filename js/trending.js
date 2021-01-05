const api_key = "Nt8kz56S3R0wbsbVh9seCUoA3lVvqRem";
const trendingPath = `https://api.giphy.com/v1/trending/searches?api_key=${api_key}`;
const topTrending= `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`;

fetch(trendingPath).then(function(res){
    return res.json();
}).then(function(json) {
    
    const trendingElem =  document.getElementById(`categories-trending`);
    let trendingHtml = '';

    json.data.slice(0,5).forEach(function(obj){
        const trendingTerms = obj;
        trendingHtml+=`<p class="categories">${trendingTerms}</p>`
  
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
        const url = obj.images.fixed_width.url
        const alt = obj.images.title
        trendingHtml+=`<img 
        class="img-trending"
        src="${url}"
        alt="${alt}">`
    })
    topElement.innerHTML= trendingHtml;
}).catch(function(err){
    console.log(err.message);
});


