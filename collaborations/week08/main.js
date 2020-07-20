const btn = document.querySelector('#request');
async function getPokemon(url){
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw Error(response.statusText)
    } else {
        const fetchJson = await response.json();
        showPokemon(fetchJson);      
        }
    } catch (error) {
        console.log(error);
    }
}
 function showPokemon(data) {
     const pokemonContainer = document.querySelector('#pokemonList');

     if (data.previous != null) {
        const pokemonList = document.querySelector('#pokemonList');
        pokemonList.innerHTML = "";
        const prev = data.previous;
        let prevButton = document.getElementById('previous');
        prevButton.onclick = function() {getPokemon(prev)};
        document.querySelector('#request').hidden=true;
    }
    if (data.next != null) {
        const pokemonList = document.querySelector('#pokemonList');
        pokemonList.innerHTML = "";
        const next = data.next;
        let nextButton = document.getElementById('next');
        nextButton.onclick = function() {getPokemon(next)};
        document.querySelector('#request').hidden=true;
    }
     data.results.forEach( pokemon => {
         const listItem = document.createElement('li');
         listItem.innerHTML = `
         <span class="poke-name">${pokemon.name}</span> <button class="view-btn" onclick="getDetails('${pokemon.name}', '${pokemon.url}' )">View</button>
         `
         listItem.id=pokemon.name;
         pokemonContainer.appendChild(listItem);
     })

 }

 function getDetails(id, url) {
     fetch(url)
     .then( res => res.json() )
     .then(json => {
         console.log('DETAILS', json)
         var li = document.getElementById(id);
         var div = document.createElement('div');
         div.innerHTML = 
         `
         <img src="${json.sprites.front_default}" />
         <li>Height: ${json.height} inches</li>
         <li>Weight: ${json.weight} pounds</li>

         `
         li.lastElementChild.remove();
         li.appendChild(div);
     })  
 }