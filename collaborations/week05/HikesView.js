
const imgBasePath = '//byui-cit.github.io/cit261/examples/';

function renderHikeList(hikeList, listElement){
        let element = document.getElementById(listElement);
        
        let currentInnerHTML = element.innerHTML;
        
        hikeList.forEach(buildHikeHTML);
        
        function buildHikeHTML(hike, index){
            currentInnerHTML = element.innerHTML;
            let displayedHike = `<div class="hike">
            <h2>${hike.name}</h2>
            <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
            <ul class="details">
            <li>${hike.distance}</li>
            <li>${hike.difficulty}</li>
            </ul>
            </div>`;
            currentInnerHTML += displayedHike;
            element.innerHTML = currentInnerHTML;
        }      
                
    }
    function renderOneHikeLight(hike){
            console.log("View: " + hike);
                let displayedHike = `<div class="hike">
                <h2>${hike.name}</h2>
                <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
                <ul class="details">
                <li>${hike.distance}</li>
                <li>${hike.difficulty}</li>
                </ul>
                </div>`;
                console.log(displayedHike);
                return displayedHike;
                
            }
            
    function renderOneHikeFull(hike, parentElement) {
        // this method will be used to one hike with full detail...you will need this for the stretch goal! 
        
        var node = document.createTextNode(parentElement);
        var childNode = document.createTextNode("fullHike");
        
        let displayedHike = `<div class="hike">
        <h2>${hike.name}</h2>
        <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
        <ul class="details">
        <li>${hike.distance}</li>
        <li>${hike.difficulty}</li>
        <li>${hike.description}</li>
        <li>${hike.directions}</li>
        </ul>
        </div>`;
        
        return displayedHike;
        
    }
export default {
    renderOneHikeFull,
    renderHikeList,
    renderOneHikeLight
}