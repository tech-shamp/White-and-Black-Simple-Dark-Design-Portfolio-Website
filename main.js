// Using Import Statement to import required Modules
const express = require("express") // Import Express Module
const path = require("path") // Import Path Module

const app = express() // Using Express Function in single Variable
const initPath = path.join(__dirname, "public") // Setting Up Initial Path for prerequisites
const port = process.env.PORT || 1000 // Creating a Custom Variable for PORT

// Setup Express Server
app.use(express.static(initPath))

// Setup Website Links
app.get("/", (req, res) => {
  res.sendFile(path.join(initPath, "index.html"))
})

// Setup 404 Page = Not Found Page
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(initPath, "index.html"))
})

app.listen(port, () => {
  console.log(`=================================`);
  console.log(`=========== PORT: ${port} ==========`);
  console.log(`🚀 App listening on the PORT ${port}`);
  console.log(`=================================`);
}) // Start Server 😎
