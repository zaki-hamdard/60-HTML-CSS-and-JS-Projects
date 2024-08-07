const inputElement = document.querySelector(".input-text");

const par = document.querySelector(".container p");
const main_container = document.querySelector(".container");
const container = document.createElement("div");
    container.classList.add("meaning-container");


async function fetchApi(inputValue) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;

    try {
        par.innerText = `Searching the meaning of "${inputValue}"`;
        const response = await fetch(url).then((response) => response.json())

    // Creating the div
    
    

    par.style.display = "none";
    container.style.display = "block";

    const wordTitle = document.createElement("p");
    wordTitle.classList.add("word-title");
    wordTitle.innerText = "Word Title: ";

    const wordSpan = document.createElement("span");
    wordSpan.innerText = response[0].word;
    wordTitle.appendChild(wordSpan);
    container.appendChild(wordTitle)

    const meaning = document.createElement("p");
    meaning.classList.add("word-meaning");
    meaning.innerText = "Meaning: "

    const meanSpan = document.createElement("span");
    meanSpan.innerText = response[0].meanings[0].definitions[0].definition;
    meaning.appendChild(meanSpan);
    container.appendChild(meaning);
    console.log(response)

    
    const audio = document.createElement("audio");
    audio.controls = true;
    
    if (response[0].phonetics[0].audio) {
        audio.src = response[0].phonetics[0].audio;
    } else if(response[0].phonetics[1].audio) {
        audio.src = response[0].phonetics[1].audio;
    } else {
        audio.src = response[0].phonetics[2].audio;
    }
    container.appendChild(audio);

    main_container.appendChild(container);
  
    } catch (error) {
        par.style.display = "block";
        par.innerHTML = "Not a correct word to search. Please try again.";
        container.style.display = "none";
        
    }

}

inputElement.addEventListener("keyup", (e) => {
    if(e.target.value && e.key === "Enter") {
        container.innerHTML = "";
        fetchApi(e.target.value)
    }
})