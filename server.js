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

app.get("/friends/all", (req, res) => {
  res.send("Esta es la informacion de todos mis amigos")
})

app.get("/friends/single/:friendName", (req, res) => {
  // una ruta dinamica => una ruta que tendra un acceso que puede contener cualquier valor posible.
  console.log(req.params) // ubicacion donde se encuentran todos los parametros dinamicos de esta ruta
  
  res.send(`Aqui informacion sobre ${req.params.friendName}`)
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})