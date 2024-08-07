const btn = document.querySelector(".btn");
        const errorMsg = document.querySelector("small");

        function fetchImage() {
            const inputElement = document.querySelector(".input-number");
            const inputValue = Number(inputElement.value);

            if (inputValue > 10 || inputValue < 1) {
                errorMsg.style.display = "block";
                return;
            }

            errorMsg.style.display = "none";

            fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=Px1leJ69vdAdkYbZMhDN4ffUpsKQASkgS9EL-kggjck`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error fetching images:', error);
                });
        }

        btn.addEventListener("click", fetchImage);