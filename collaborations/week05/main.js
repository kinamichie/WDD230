import HikeModel from './HikeModel.js'

let controller = new HikeModel('hikes');
window.addEventListener('load', () => {
    controller.showHikeList();
});

//controller.showOneHike('Bechler Falls');