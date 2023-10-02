const express = require("express");
const cors = require("cors")
const {colores} = require("./configuracion");
let puerto = process.env.PORT || 4000;
const servidor = express();

servidor.use(cors())

servidor.use("/prueba",express.static("./estaticos"))

servidor.get("/", async (peticion,respuesta) => {
	let resultado = await colores("paleta-2")
	let {r,g,b} = resultado[Math.floor(Math.random() * resultado.length)]
	console.log(r,g,b)
	respuesta.json({r,g,b});
})

servidor.use((peticion,respuesta) => {
	respuesta.status(404);
	respuesta.send("not found...")
})

servidor.listen(puerto);
