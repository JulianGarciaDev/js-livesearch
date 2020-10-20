# js-livesearch
Livesearch UI Test in JavaScript

### Vulnerable API KEY

Change `const API = 'PASTE HERE YOUR API KEY'` in js/functions.js file with your The MovieDB API key.

### Protected API KEY
### - Install DOTENV

```
npm install dotenv
```

### - Use DOTENV
.env:
```
API_KEY=YOUR THE MOVIEDB API KEY
```
js/functions.js:
```
require('dotenv').config()
const API = process.env.API_KEY
```
