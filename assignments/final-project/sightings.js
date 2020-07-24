

    //add sightings to page
document.querySelector('#addBtn').onclick= newSightings;
loadSightings();

//load sightings
function loadSightings() {    
    const sightList=getSightingsList();
    sightList.forEach(sightings => {

        const el = createSightingsElement(sightings)
        addToList(el);
    })    
   
             
}
//add new sightings to list
function newSightings(){
    const sightings=createSightings();
    const commentDiv=createSightingsElement(sightings);
    addToList(commentDiv);
    saveSightings(sightings);
}
//create sightings 
function createSightings(){
    const name = document.querySelector('#sightedName');
    const place= document.querySelector('#sightedWhere');
    const when= document.querySelector('#sightedWhen');    
    const newSightings={ id: Date.now(), name: name.value, where: place.value, when: when.value };
    name.value= '';
    place.value='';
    when.value='';
    return newSightings;    
}
//save sightings in local storage
function saveSightings(sightings){
    const sightList = getSightingsList();
    sightList.push(sightings);
    localStorage.setItem('sightList',JSON.stringify(sightList));

}
//get sightings from local storage
function getSightingsList(){
    const sightingListString=localStorage.getItem('sightList');
    let sightingsList = [];

    if(sightingListString){
        sightingsList=JSON.parse(sightingListString);
    } return sightingsList;
}
//create element
function createSightingsElement(sightings) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    //animal name
    const animalSighted = document.createElement('div');
    animalSighted.innerText=sightings.name;
    animalSighted.classList.add('nameSighted');
    animalSighted.setAttribute('id', 'nameSighted');

    //where the animal was sighted
    const sightedWhere = document.createElement('div');    
    sightedWhere.innerText=sightings.where;
    sightedWhere.classList.add('whereSighted');
    sightedWhere.setAttribute('id', 'whereSighted');

    //when the animal was sighted
    const whenSighted = document.createElement('div');
    whenSighted.innerText=sightings.when + '\n \n';
    whenSighted.classList.add('whenSighted');
    whenSighted.setAttribute('id', 'whenSighted');

    
    commentDiv.appendChild(animalSighted);
    commentDiv.appendChild(sightedWhere);
    commentDiv.appendChild(whenSighted);
    

    return commentDiv;  

}
//add new sightings to list
function addToList(commentDiv){
    document.querySelector('#comments').appendChild(commentDiv);
}



//back button

export default {
    loadSightings
    }
 
