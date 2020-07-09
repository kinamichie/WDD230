//import quiz from './quiz.js';
import utilities from './utilities.js';
import {animalData} from './animalData.js';
import sightings from './sightings.js';

window.addEventListener('load', loadData);

document.querySelector('#backBtn').addEventListener('click', loadData);


function loadData() {
    
    const app = document.getElementById('app');   
    app.innerHTML='';
    animalData.forEach((animal, i) => {
        const animalNode = createAnimalList(animal, i);
        animalNode.addEventListener('click', viewAnimal);     

        app.appendChild(animalNode);
    });  
    
        document.querySelector('#backBtn').hidden = true;
        document.querySelector('#comments').hidden = true;
        document.querySelector('#sightings').hidden = false;
        document.querySelector('#newBack').hidden = true; 
        document.querySelector('#instructions').hidden=false;
   
}
function createAnimalList(animal, i, showDetails = false){
    const div = document.createElement('div');
    const img = document.createElement('img');

    div.classList.add('animal');
    div.id = i;
    img.src=animal.img;

if(showDetails) {
    const animalTitle = document.createElement('h2');
    animalTitle.innerHTML = `${animal.name}`;
    const description = document.createElement('div');
    description.innerHTML = `<h2>Description<h2>${animal.description}`;
    
    div.appendChild(img);
    div.appendChild(animalTitle);
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
    const animalDetails = createAnimalList(animalData[id], id, true);

    app.appendChild(animalDetails);

    
    document.querySelector('#backBtn').hidden = false;
    document.querySelector('#sightings').hidden = true;
    document.querySelector('#comments').hidden = true;
    document.querySelector('#newBack').hidden = true; 
 }


document.getElementById('sightings').addEventListener('click', () => {
    document.querySelector('#comments').innerHTML = '';
    document.querySelector('#app').hidden = true;
    document.querySelector('#backBtn').hidden = true;
    document.querySelector('#comments').hidden = false;
    document.querySelector('#sightings').hidden = true; 
    document.querySelector('#newBack').hidden = false;    
    
    sightings.loadSightings(); 
   
});
document.getElementById('newBack').addEventListener('click', () => {
    document.querySelector('#comments').innerHTML = '';
    document.querySelector('#app').hidden = false;
    document.querySelector('#backBtn').hidden = true;
    document.querySelector('#comments').hidden = true;
    document.querySelector('#sightings').hidden = true;    
    
    loadData(); 
   
});


