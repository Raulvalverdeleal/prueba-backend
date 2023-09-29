const express = require("express");
const cors = require("cors")
let puerto = process.env.PORT || 4000;
const servidor = express();

servidor.use(cors())

servidor.use("/prueba",express.static("./estaticos"))

servidor.get("/",(peticion,respuesta) => {
	let [r,g,b] = [0,0,0].map(() => Math.floor(Math.random() * 256));
	respuesta.json({r,g,b});
})

servidor.use((peticion,respuesta) => {
	respuesta.status(404);
	respuesta.send("not found...")
})

servidor.listen(puerto);
