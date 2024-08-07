const accessKey = "b2YrnxJbivGHn0_C9SPiepiZbb-YOIet5KYKBP_ILd4";

const form = document.querySelector("form");
const results_container = document.querySelector(".results-container");
const result = document.querySelector(".result");
const search_input = document.querySelector(".search-input");
const search_btn = document.querySelector(".search-btn");
const showMoreBtn = document.querySelector(".showmore-btn");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = search_input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    if(page === 1) {
        search_input.innerHTML = "";
    }

    const results = data.results;
    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("result");

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        results_container.appendChild(imageWrapper);
    })

    page++;

    if(page > 1) {
        showMoreBtn.style.display = "block";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", () => {
    searchImages()
})
