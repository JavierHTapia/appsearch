/* theme script */
const switcher = document.querySelector('#theme-options')
const doc = document.firstElementChild

switcher.addEventListener('input', e =>
  setTheme(e.target.value))

const setTheme = theme =>
  doc.setAttribute('color-scheme', theme)
  
/* animation script */  
const toggleSearch = (search, button)=>{
    const searchBar = document.getElementById(search),
        searchButton = document.getElementById(button)
    searchButton.addEventListener('click',()=>{
        searchBar.classList.toggle('show-search')
    })
}
toggleSearch('search-bar','search-button')