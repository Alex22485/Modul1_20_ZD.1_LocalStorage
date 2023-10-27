
import {getRequestOfLocalStorage} from './modules/request.js'
import {pushBtn} from './modules/cookieBtn'
import {cookieHidden} from './modules/cookieHidden'



export const checkIsEmptyLocalStorage =() => {

    // проверка есть ли данные в localStorage
    const isEmptyLocalStorage = getRequestOfLocalStorage()

    if(!isEmptyLocalStorage){
        // запуск обработчика кнопки cookie
        pushBtn()

    } else{
        // скрытие cookie
        cookieHidden()

    }
}