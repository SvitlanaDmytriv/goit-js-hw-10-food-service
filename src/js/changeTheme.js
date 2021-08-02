
const refs = {
    inputEl: document.querySelector('#theme-switch-toggle'),
    bodyEl: document.body,
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}


refs.inputEl.addEventListener('change', onChangeTheme)

function onChangeTheme(e) {
    refs.inputEl.checked ?  refs.bodyEl.classList.add(Theme.DARK) : refs.bodyEl.classList.remove(Theme.DARK)
}

