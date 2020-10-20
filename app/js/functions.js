const focusIcon = () => document.querySelector('i').style.color = 'var(--focus)'
const blurIcon = () => document.querySelector('i').style.color = 'var(--icon)'

const search = () => {
    const term = document.getElementById('search').value

    if (term.length <= 3){
        document.querySelector('#result').style.display = 'none'
        document.querySelector('#results').innerHTML = ''
        return
    }

    const API = 'PASTE HERE YOUR API KEY'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${term}`
    document.querySelector('i').className = 'fas fa-spinner fa-spin'
    
    fetch(url)
        .then(response => response.json())
        .then(data => printResults(data.results, term))
        .catch(error => console.log('ERROR:' + error.message))
}

const printResults = (results, term) => {
    document.querySelector('i').className = 'fas fa-search'
    document.querySelector('#result').style.display = 'none'
    document.querySelector('#results').innerHTML = ''

    const filtered = filterResults(results, term)
    
    filtered.forEach(({ original_title }) => {
        document.querySelector('#result').style.display = 'block'
        document.querySelector('#results').innerHTML += `<li>${original_title}</li>`
    })    
}

const filterResults = (results, term) => {
    const pattern = new RegExp(term, "i")
    return results.filter(str => pattern.test(str.original_title))
}

const input = document.querySelector('input')
input.addEventListener('focus', focusIcon)
input.addEventListener('blur', blurIcon)
input.addEventListener('keydown', search)
