const express = require('express')
const app = express()
// app es TODO nuestro servidor

// RUTA de acceso. cuando el usuario vaya al path "/" entonces le vamos a enviar lo siguiente
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/about", (req, res) => {
  res.send("Esta es la pagina de about")
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})