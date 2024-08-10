document.addEventListener("DOMContentLoaded", () => {
    async function getQuote {
        fetch(url)
          .then((data) => data.json())
          .then((item) => {
            console.log(item)
          });
      };

    button.addEventListener("click", getQuote);
});
