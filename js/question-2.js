const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

fetch(url)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        createHTML(data);
    })
    .catch(function(error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("An error occured when calling the API")
    })

function createHTML(result) {
    console.log(result.results)
    resultsContainer.innerHTML = "";

        for (let i = 0; i < result.results.length; i++) {
            
            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result">${result.results[i].name}</div>`
            resultsContainer.innerHTML += `<div class="result">${result.results[i].rating}</div>`
            resultsContainer.innerHTML += `<div class="result">${result.results[i].tags.length}</div>`
        }   
}
