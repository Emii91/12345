const detailContainer = document.querySelector(".blog-specific");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://projectexam.site/wp-json/wp/v2/posts?_embed=1/" + id;

console.log(url);

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    }
    catch(error) {
        console.log(error);
    }
}

fetchPosts();

function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details[0].title.rendered}</h1>`
}