//import HikeModel from './HikeModel.js';
//import HikesView from './HikesView.js';

export default class HikesController {
    constructor(elementId){
        this.parentElement = document.getElementById(elementId);
        this.hikeModel = new HikeModel();
        this.hikesView - new HikesView;
     }
    showHikeList() {
        this.parentElement.innerHTML='';
        this.hikesView.renderHikeList(this.hikeModel.getAllHikes(), 'hikes');
        this.addHikeListener();
        this.hikeModel.backButton.classList.add('hidden');
    }
    showOneHike(hikeName){
        let desiredHike = this.hikeModel.getHikeByName(hikeName);
        this.parentElement.innerHTML='';
        this.parentElement.appendChild(renderOneHikeFull(hike));
        console.log("controller: " + desiredHike);
        //this.hikesView.renderOneHikeLight(desiredHike);
        this.hikeModel.backButton.classList.remove('hidden');
    }
    addHikeListener(){
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(child => {
            child.addEventListener('touchend', e => {
                this.showOneHike(e.currentTarget.dataset.name);
            });
        });
        
    }
    /*buildBackButton() {
        const backButton = document.createElement('button');
        backButton.innerHTML='&lt;-All Hikes';
        backButton.addEventListener('touchend', () => {
            this.showHikeList();
        });
        backButton.classList.add('hidden');
        this.parentElement.before(backButton);
        return backButton;
    }*/
}
/*
import Hikes from './HikeModel.js';
const myHike = new Hikes('hikeListId');
myHike.showHikeList();
*/