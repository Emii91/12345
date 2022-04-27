const resultsContainer = document.querySelector(".results");

const url = "https://projectexam.site/wp-json/wp/v2/posts?_embed=1&per_page=12";

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        const results = json;

        for (let i = 0; i < results.length; i++){
            
            resultsContainer.innerHTML += `<a href="blog-specific.html?id=${results[i].id}" class="card">
                                            <div class="blog-image"><img src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}"></div>
                                            <div class="blog-h1"><h1 class="h1-post">${results[i].title.rendered}</h1><h2>Read more</h2></div></a>`;
        }                     
  } catch (error) {
        console.log(error);
   }
}

fetchPosts();
