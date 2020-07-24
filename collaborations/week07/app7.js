import HikeModel from './hikes.js';
//import Comments from './comments.js';

let controller = new HikeModel('hikes');
window.addEventListener('load', () => {
    controller.showHikeList();
});
