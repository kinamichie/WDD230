
//import HikesView from './HikesView.js';
//create an array of hikes

const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Denanda Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];
  
  export default class HikeModel {
    constructor(elementId) {
        this.parentElement=document.getElementById(elementId);
        this.backButton=this.buildBackButton();
    }
    
    getAllHikes() {
          // should return a list of all the hikes.
    return hikeList;
    }
    
    getHikeByName(hikeName){
      // filter the hikes for the record identified by hikeName and return it
      //const theHike = hikeList.find(hike => hike.name == hikeName);
      //console.log(theHike);
      return this.getAllHikes().find(hike => hike.name === hikeName)
    }
    showHikeList() {
      this.parentElement.innerHTML='';
      renderHikeList(this.parentElement, this.getAllHikes());
      this.addHikeListener();
      this.backButton.classList.add('hidden');
      //document.querySelector('.backButton').hidden=true;
    }
    showOneHike(hikeName){
      const hike = this.getHikeByName(hikeName);
      this.parentElement.innerHTML='';
      this.parentElement.appendChild(renderOneHikeFull(hike));
      //console.log("controller: " + desiredHike);
      //this.hikesView.renderOneHikeLight(desiredHike);
      this.backButton.classList.remove('hidden');
    }
    addHikeListener(){      
      const hikeArray = Array.from(this.parentElement.children);
      hikeArray.forEach(child => {
          child.addEventListener('touchend', e => {
              this.showOneHike(e.currentTarget.dataset.name);
          });
          child.addEventListener('click', e => {
            this.showOneHike(e.currentTarget.dataset.name);
      });
    });
    }
    buildBackButton() {
      const backButton = document.createElement('button');
      backButton.innerHTML='&lt;-All Hikes';
      backButton.addEventListener('touchend', () => {
          this.showHikeList();
      });
      backButton.addEventListener('click', () => {
        this.showHikeList();
    });
      backButton.classList.add('hidden');
      backButton.setAttribute('id', 'button')
      this.parentElement.before(backButton);
      return backButton;
  }
  }
  
  const imgBasePath = '//byui-cit.github.io/cit261/examples/';

    function renderHikeList(parent, hikes){
        hikes.forEach(hike => {
          parent.appendChild(renderOneHikeLight(hike));
        });
                
    }
    function renderOneHikeLight(hike){
            console.log("View: " + hike);
            let displayedHike = document.createElement('li');
            displayedHike.classList.add('light');
            displayedHike.setAttribute('data-name', hike.name);
            displayedHike.innerHTML  = `<div class="hike">
                <h2>${hike.name}</h2>
                <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
                <div class="details">
                <div>
                <h3>Distance: <h3>
                <p>${hike.distance}</p>
                </div>
                <div>
                <h3>Difficulty: </h3>
                <p>${hike.difficulty}</p>
                </div>
                </div>
                </div>`;
                console.log(displayedHike);
                return displayedHike;
                
            }
            
    function renderOneHikeFull(hike) {
        // this method will be used to one hike with full detail...you will need this for the stretch goal!        
        
        var displayedHike = document.createElement('li');
        
        displayedHike.innerHTML = `<div class="hike">
        <h2>${hike.name}</h2>
        <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
        <div class="details">
        <h3>Distance</>
        <div>${hike.distance}</div>
        <h3>Difficulty</h3>
        <div>${hike.difficulty}</div>
        <h3>Description</h3>
        <div>${hike.description}</div>
        <h3>Directions</h3>
        <div>${hike.directions}</div>
        </div>
        </div>`;
        
        return displayedHike;
        
    }
