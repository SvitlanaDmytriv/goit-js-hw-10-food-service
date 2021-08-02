import cards from '../menu.json';
import menuCards from '../templates/cardsMenu.hbs';

const menuContainer = document.querySelector('.js-menu')
const menuElements = menuCards(cards)

menuContainer.insertAdjacentHTML('afterbegin',menuElements )