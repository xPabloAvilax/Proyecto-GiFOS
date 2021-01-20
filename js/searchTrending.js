
let searchForm = document.getElementById('search-form');
let searchInput = document.getElementById('search-input');
let btnShowMore = document.getElementById('btnShowMore')

searchForm.addEventListener('submit', function(e) { 
    e.preventDefault() 
    const q = searchInput.value; 
    btnShowMore.classList.toggle('btn-showMore')
    let titleCategories = document.getElementById('title-categories');
    titleCategories.innerHTML = MaysPrimera(q.toLowerCase());
    
    search(q);
})

function MaysPrimera(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
function search(q) { 

    const pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}`;
   
    fetch(pathSearch).then(function(res) {
        return res.json()
    }).then(function(json) {
       // console.log(json.data[0].embed_url)
        const trendingEl = document.getElementById('searchGifs')
        let trendingHTML = ''
    
        json.data.slice(0,6).forEach(function(obj) {
            const url = obj.images.fixed_width.url
            const title = obj.images.title
            
            trendingHTML += `<img 
                class="show_gifs"
                src="${url}"
                alt="${title}">`
                
        });

        trendingEl.innerHTML = trendingHTML;
    }).catch(function(err) {
        console.log(err.message)
    })
}

btnShowMore.addEventListener("click",()=>{
    
})



// function createByn (){
//     let btn = document.createElement('button');
//     box.classList.add('btn-showMore');
//     boxCtn.appendChild(btn);
// }