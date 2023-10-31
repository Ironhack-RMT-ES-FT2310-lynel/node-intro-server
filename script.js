console.log("ejecutando mi codigo con el entorno de node")


let variable = 10;
variable += 40;
console.log(`el valor total es: ${variable}`)


// en esta parte del codigo, se ejecute patata.js tambien
// require => metodo que nos permite buscar un archivo y ejecutarlo
let user = require("./patata.js")
// 1. ejecuta todo el codigo que haya en ese archivo
// 2. (opcionalmente) recibe una data que esté siendo exportada

console.log(user)

