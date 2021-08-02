import cards from '../menu.json';
import menuCards from '../templates/cardsMenu.hbs';

const menuContainer = document.querySelector('.js-menu')
console.log(cards)
const menuElements = menuCards(cards)
console.log(menuElements)

menuContainer.insertAdjacentHTML('afterbegin',menuElements )