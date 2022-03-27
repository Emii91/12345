const resultsContainer = document.querySelector(".results");

const url = "https://projectexam.site/wp-json/wp/v2/posts?_embed=1";

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        const results = json;

        for (let i = 0; i < results.length; i++){
            
            resultsContainer.innerHTML += `<a href="blog-specific.html?id=${results[i].id}" class="card">
                                            <img src="${results[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}">
                                            <h1 class="h1-post">${results[i].title.rendered}</h1></a>`;
        }                     
  } catch (error) {
        console.log(error);
   }
}

fetchPosts();
