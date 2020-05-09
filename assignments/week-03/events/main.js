const clickParagraph = document.getElementById('click');
//mouse events
clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!'));

//keyboard events
addEventListener('keydown', highlight);

addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

//modifer keys
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

addEventListener('keydown', (event) => {
    if (event.key ==='c' && event.ctrlKey) {
        console.log('Action canceled!');
    }
});

addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A Shifty Click!');
    }
});

//touch events
addEventListener('touchend', () => console.log('Touch stopped'));

//removing event listeners
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event){
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click', remove);
}
//stopping default behavior
const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

//event propagation
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) => console.log('Clicked on ul') );

liElement.addEventListener('click', (event) => console.log('Clicked on li') );

//capturing
ulElement.addEventListener('click', (event) => console.log('Clicked on ul'),true);

liElement.addEventListener('click', (event) => console.log('Clicked on li'),true);

//bubbling
ulElement.addEventListener('click', (event) => console.log('Clicked on ul'),false);
liElement.addEventListener('click', (event) => console.log('Clicked on li'),false);

//stopping the bubbling phase
liElement.addEventListener('click', (event) => {
    console.log('Clicked on li');
    event.stopPropagation(); },false);

//event delagation
ulElement.addEventListener('click', highlight);


