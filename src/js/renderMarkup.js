import cards from '../menu.json';
import menuCardsTemplate from '../templates/cardsMenuTemplate.hbs';
import {refs} from './refs.js'

const menuElements = menuCardsTemplate(cards)

refs.menuContainer.insertAdjacentHTML('afterbegin',menuElements )