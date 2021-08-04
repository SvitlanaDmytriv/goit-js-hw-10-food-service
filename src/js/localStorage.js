
import { Theme } from './refs.js'
import {changeTheme} from './changeTheme.js'

export function theme (e) {
    changeTheme()
    
    if (e.target.checked){
        localStorage.setItem('themeBody', Theme.DARK)
     }
    else{
        localStorage.setItem('themeBody', Theme.LIGHT)
    }
}



