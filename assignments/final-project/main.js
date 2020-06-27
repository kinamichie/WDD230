import quiz from './quiz.js';
import utilities from './utilities.js';
import {animalData} from './animalData.js';

window.addEventListener('load', loadData);

function loadData() {
    const app = document.getElementById('app');
    app.innerHTML='';
    document.querySelector('#pageTitle').innerText = "Animals of Alaska";
    animalData.forEach((animal, i) => {
        const animalNode = createAnimalNode(animal, i);
        animalNode.addEventListener('click', viewAnimal);

        document.querySelector('#backBtn').hidden = true;

        app.appendChild(animalNode);
    })  
    
}
function createAnimalNode(animal, i, showDetail = false){
    const div = document.createElement('div');
    const h1 = document.getElementById('#pageTitle');
    const img = document.createElement('img');

    div.classList.add('animal');
    div.id = i;
    img.src=animal.img;

if(showDetail) {
    h1.innerText=animal.name;
    const description = document.createElement('div');
    description.innerHTML = `<h2>Description<h2>
    ${animal.description}`;

    div.appendChild(img);
    div.appendChild(description);
   
}else {
    const h2 = document.createElement('h2');
    h2.innerText = animal.name;

    div.appendChild(h2);
    div.appendChild(img);
}
return div;
}
function viewAnimal(event) {
    const app = document.getElementById('app');
    app.innerHTML='';
    const id = event.currentTarget.id;

    const animalDetails = createAnimalNode(animalData[id], id, true);
    app.appendChild(animalDetails);
    document.querySelector('#backBtn').hidden = false;
}
