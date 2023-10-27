
// проверка есть ли данные в localStorage
export const getRequestOfLocalStorage = () => {
    const cookie = localStorage.getItem('cookie')
    return cookie
}