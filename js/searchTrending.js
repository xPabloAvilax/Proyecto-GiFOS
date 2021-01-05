
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(e) { 
    e.preventDefault() 
    const q = searchInput.value; 

    search(q)
})


function search(q) { 

    const pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}`;
   
    fetch(pathSearch).then(function(res) {
        return res.json()
    }).then(function(json) {
        console.log(json.data[0].embed_url)
        const trendingEl = document.getElementById('searchGifs')
        let trendingHTML = ''
    
    
        json.data.forEach(function(obj) {
            console.log(obj) 
    
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