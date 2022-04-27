const url = "https://projectexam.site/wp-json/wp/v2/posts?_embed=1&per_page=12";

const resultsContainer = document.querySelector(".latest-post");
const prevSlideButton = document.querySelector("#prev-button");
const nextSlideButton = document.querySelector("#next-button");

let currentCarouselSlide = 0;

async function fetchPosts() {
  resultsContainer.innerHTML = "";

  try {
    const response = await fetch(url);
    const post = await response.json();
    console.log(post);

    renderCarousel(post);

    prevSlideButton.addEventListener("click", () => {
      currentCarouselSlide += 1;
      renderCarousel(post);
    });

    nextSlideButton.addEventListener("click", () => {
      currentCarouselSlide += 1;
      renderCarousel(post);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();

function renderCarousel(posts) {
  const postGroups = [];
  let i = 0;

  while (i < posts.length) postGroups.push(posts.slice(i, (i += 3)));

  if (currentCarouselSlide >= postGroups.length) currentCarouselSlide = 0;
  if (currentCarouselSlide < 0) currentCarouselSlide = postGroups.length - 1;

  let newHTML = "";

  postGroups[currentCarouselSlide].forEach((post) => {
    newHTML += `
        <a href="blog-specific.html?id=${post.id}" class="card">
        <div class="blog-image">
            <img src="${post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}">
        </div>
            <div class="blog-h1">
                <h1 class="h1-post">${post.title.rendered}</h1>
            </div>
        </a>`;
  });
  resultsContainer.innerHTML = newHTML;
}
