
function handleSearch() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; 

    const filteredRecipes = recipeList.filter(recipe =>
        recipe.name.toLowerCase().includes(searchInput) || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))
    );

    if (filteredRecipes.length === 0) {
        resultsContainer.innerHTML = "<p>No recipes found matching your search.</p>";
    } else {
        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.className = "recipe-card";
            recipeCard.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
            `;
            resultsContainer.appendChild(recipeCard);
        });
    }
}


document.getElementById("search-button").addEventListener("click", handleSearch);
function navigateToFindRecipesPage() {
    window.location.href = "find_recipes.html";
}

function navigateToHomePage() {
    window.location.href = "index.html";
}

document.getElementById("1").addEventListener("click", navigateToHomePage);
document.getElementById("2").addEventListener("click", navigateToHomePage);
document.getElementById("3").addEventListener("click", navigateToFindRecipesPage);
