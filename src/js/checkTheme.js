import { refs, Theme } from './refs.js'


function checkTheme () {
    let savedTheme = localStorage.getItem('themeBody')
if ( savedTheme !== null){
   refs.bodyEl.classList.add(savedTheme);
    if(savedTheme === Theme.DARK)
    {refs.checkbox.checked = true};
    }
else {
   refs.bodyEl.classList.add(Theme.LIGHT);
    refs.checkbox.checked = false;
  
}
}

checkTheme()