//index to return form
const form = document.forms[0];
//const form = document.getElementsByTagName('form');
//identify form
//const form = document.forms.search;
//const form = document.forms['search'];
//elements that returns and HTML collection
//const [input,button] = form.elements;
//const input = form.searchInput
//const input = form['searchInput']
//Form properties and methods
form.action = '/an/other.url'

const input = form.elements.searchInput;
input.addEventListener('focus', function(){
    if(input.value==='Search Here'){
        input.value = '';
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value===''){
        input.value = 'Search Here';
    }
}, false);

input.addEventListener('change', () => alert('changed'), false);

//submitting a form
//const form = document.forms['search'];
form.addEventListener('submit', search, false);

function search() {
    alert(' Form Submitted');
    event.preventDefault();
}

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}


