let apiQuotes = []; // We use a _let_ statement here instead of a constant because in the begininning we are setting it as an empty array but later we will change the value of it to pass in the quotes (inside the async function, in the statement "apiQuotes = await response.json();")

// Get quotes from API
async function getQuotes() {
    // Establish the API URL as a constant
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl); // "await" means that this constant will not be populated UNTIL we get some data from our API. We get the json from our API as a _response_ ...
        apiQuotes = await response.json(); // (global variable) ...and then we are turning that response into a .json object and we will pass that into a global variable called _apiQuotes_. 
        newQuote(); // On clicking the "New Quote" btn, call the function randomly picking one quote from the array
    } catch (error) {
        // Catch error here
    }
}

// Show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    // 1. Pick a random number using the Math.random() function (returns a random decimal fraction from 0 to 1)
    // 2. Multiply it by the length of the array to make sure the resulting number would not fall outside the array of quotes
    // 3. Bring the result from #2 to the nearest integer number using the Math.floor function
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// On load
getQuotes();