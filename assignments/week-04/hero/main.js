const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
//invoke the makeHero function
function makeHero(event){
    //prevent form from being submitted
    event.preventDefault();
    //create and empty object
    const hero = {};
    //create a name property based on the input field's value
    hero.name = form.heroName.value;
    //convert object to JSON string and display in alert dialog
    alert(JSON.stringify(hero));
    return hero;
}
form.addEventListener('submit', validate,false);
function validate(event){
    const firstLetter = form.heroName.value[0];
if(firstLetter.toUpperCase()==='X'){
    event.preventDefault();
    alert('Your name is not allowed to start with and X!');
}}
const label = form.querySelector('label');
const error = document.createElement('div'); 
error.classList.add('error'); 
error.textContent = '! Your name is not allowed to start with X.'; 
label.append(error);
function validateInline() { 
    const heroName = this.value.toUpperCase(); 
    if(heroName.startsWith('X')){ 
        error.style.display = 'block'; 
    } else { error.style.display = 'none'
}}

hero.realName = form.realName.value;
//checkbox object to see if boxes have been checked or not
form.powers;
/*hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
     if (form.powers[i].checked) { 
         hero.powers.push(form.powers[i].value);
         } }*/
hero.powers = [form.powers].filter(box => box.checked).map(box => box.value);
document.forms.hero.powers[0].checked = true;
//hero category
form.category
hero.category = form.category.value
//form.type[2].checked = true
//check age
hero.age=form.age.value;
form.city;
hero.city = form.city.value;
form.city.options[form.city.selectedIndex].text;
form.city.options[0].text;
//text field
hero.origin = form.origin.value;
form.origin.value='Born as Kal-El on the planet Krypton...';


