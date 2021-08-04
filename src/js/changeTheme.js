import { refs, Theme } from './refs.js'


export function changeTheme() {
  refs.checkbox.checked ? refs.bodyEl.classList.add(Theme.DARK) : refs.bodyEl.classList.remove(Theme.DARK)
 
}

