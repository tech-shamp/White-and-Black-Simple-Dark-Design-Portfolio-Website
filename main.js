// Using Import Statement to import required Modules
const express = require('express') // Import Express Module
const path = require('path') // Import Path Module

// Declaring Variables For Later Use in document
const app = express() // Using Express Function in single Variable
const initPath = path.join(__dirname, 'public') // Setting Up Initial Path for prerequisites
const port = process.env.PORT || 1000 // Creating a Custom Variable for PORT

// Direct Links for Files
const links = {
  home: 'Home',
  about: 'About',
  portfolio: 'Portfolio',
  service: 'Services',
  contact: 'Contact',

  tagLine: ' - Dark Design'
}

app.set('view engine', 'ejs');
app.use(express.static(initPath))

// Setup Website Links
app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: links.home + links.tagLine
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: links.about + links.tagLine
  })
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio', {
    pageTitle: links.portfolio + links.tagLine
  })
})

app.get('/service', (req, res) => {
  res.render('service', {
    pageTitle: links.service + links.tagLine
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    pageTitle: links.contact + links.tagLine
  })
})

// Setup 404 Page = Not Found Page
app.get('*', (req, res) => {
  res.status(404).render('index', { data: 'hey' })
})

app.listen(port, () => {
  console.log(`=================================`)
  console.log(`=========== PORT: ${port} ==========`)
  console.log(`🚀 App listening on the PORT ${port}`)
  console.log(`=================================`)
}) // Start Server 😎
