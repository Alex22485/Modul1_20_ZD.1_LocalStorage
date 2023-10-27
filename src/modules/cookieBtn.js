
import {cookieHidden} from './cookieHidden'

// ! Обработка событий кнопки cookie btn

export const pushBtn = () => {

    const cookieConsentButton = document.querySelector('.cookie-consent__button')
    
    cookieConsentButton.addEventListener('click', (event) => {

        // запись в localStorage
        localStorage.setItem('cookie', 'hidden')

        // скрытия html cookie
        cookieHidden()
    })
}