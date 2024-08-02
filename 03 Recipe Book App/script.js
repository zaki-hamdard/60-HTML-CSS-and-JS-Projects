const API_KEY = "648dabe93b764ade8ca064a4ec788d0f"; // Your API key for accessing the Spoonacular API
const recipes_list = document.querySelector(".recipe-list"); // Select the element with the class "recipe-list"

// Function to display recipes
function displayRecipes(recipes) {
    recipes_list.innerHTML = ""; // Clear the existing content in the list
    recipes.forEach((recipe) => {
        const recipeItem = document.createElement("li"); // Create a new list item
        recipeItem.classList.add("recipe-item"); // Add the class "recipe-item"

        const recipeImage = document.createElement("img"); // Create an img element
        recipeImage.src = recipe.image; // Set the image source
        recipeImage.alt = "Recipe Image"; // Set the alt text for the image
        recipeItem.appendChild(recipeImage); // Append the image to the list item

        const recipeTitle = document.createElement("h2"); // Create an h2 element
        recipeTitle.innerText = recipe.title; // Set the recipe title
        recipeItem.appendChild(recipeTitle); // Append the title to the list item

        const recipeIngredient = document.createElement("p"); // Create a paragraph element
        recipeIngredient.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`; // Set the ingredients
        recipeItem.appendChild(recipeIngredient); // Append the ingredients to the list item

        const recipeLink = document.createElement("a"); // Create a link element
        recipeLink.href = recipe.sourceUrl; // Set the link URL
        recipeLink.innerText = "View Recipe"; // Set the link text
        recipeItem.appendChild(recipeLink); // Append the link to the list item

        recipes_list.appendChild(recipeItem); // Append the list item to the recipe list
    });
}

// Function to fetch recipes from the API
async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`); // Fetch data from Spoonacular API
    const data = await response.json(); // Convert the response to JSON format
    return data.recipes; // Return the recipes from the data
}

// Function to initialize the app
async function init() {
    const recipes = await getRecipes(); // Get the recipes by calling getRecipes
    displayRecipes(recipes); // Display the recipes
}

// Start the process by calling init
init();
