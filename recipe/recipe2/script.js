document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('recipe-results');
    const loadingSpinner = document.getElementById('loading-spinner');

    searchButton.addEventListener('click', () => {
        const dish = searchInput.value.trim();
        if (dish) {
            fetchRecipe(dish);
        } else {
            resultsContainer.innerHTML = '<p>Please enter a dish name to search.</p>';
        }
    });

    function fetchRecipe(dishName) {
        showLoadingSpinner();
        // Replace this mockup with an actual API call
        setTimeout(() => { // Mockup for an API call
            hideLoadingSpinner();
            resultsContainer.innerHTML = `<h2>Recipe for ${dishName}</h2>
                                          <p>Ingredients: [List of ingredients for ${dishName}]</p>
                                          <p>Instructions: [Cooking instructions for ${dishName}]</p>`;
        }, 2000);
    }

    function showLoadingSpinner() {
        loadingSpinner.classList.remove('hidden');
    }

    function hideLoadingSpinner() {
        loadingSpinner.classList.add('hidden');
    }
});
