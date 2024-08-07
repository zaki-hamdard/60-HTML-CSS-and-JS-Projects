const apikey = "mIAU7T6lA+mr1mi9lLTGgA==zqIlaLq7Rm9ZlpTV";
let jokeText = document.querySelector(".joke-text");
const btn = document.querySelector(".btn");
const url = "https://api.api-ninjas.com/v1/dadjokes?";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey
    }
}

async function getJoke() {
    try {
        jokeText.innerText = "Updating...";
        btn.disabled = true;
        btn.textContent = "Loading...";
    
        const response = await fetch(url, options);
        const data = await response.json();
    
        btn.textContent = "Tell me a joke";
        btn.disabled = false;
    
        jokeText.innerText = data[0].joke;
    } catch (error) {
        jokeText.innerText = "An error occurred. Please try again later. ";
        btn.textContent = "tell me a joke";
        btn.disabled = false;
    }
}

btn.addEventListener("click", getJoke);