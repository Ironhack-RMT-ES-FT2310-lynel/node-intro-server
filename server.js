const express = require('express')
const app = express()
// app es TODO nuestro servidor

// configurar en el server donde estarán ubicados TODOS los archivos estaticos de la pagina web (imagenes, audios, videos, css, fonts, js)

app.use( express.static("public") ) // .todos los archivos se ubican en la carpeta public

// RUTA de acceso. cuando el usuario vaya al path "/" entonces le vamos a enviar lo siguiente

// app.use va a invocar una funcion en cualquier llamada del cliente
app.use((req, res, next) => {
  console.log("esto siempre se ejecutará", req.url)
  // middleware => una ejecucion que quiero hacer en cualquier request del cliente. ejemplos:
  // 1. verificar que tipo de usuario está accediendo
  // 2. quiero guardar la cantidad de visitar que tengo en mi pagina
  // 3. checkeos de error
  
  // next es una funcion que nos permite continuar con el checkeo de rutas de mi servidor
  next() // continua con el server
})


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

app.get("/home", (req, res) => {

  // tiene que haber algo en JS que me da cual es la base absolute de esta ubicacion
  console.log(__dirname) // la base absolute de esta ubicacion
  res.sendFile(__dirname + "/views/home-page.html")

})

app.get("/contact", (req, res) => {

  res.sendFile(__dirname + "/views/contact-page.html")

})


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})