const {MongoClient, ObjectId} = require("mongodb");
const urlConexion = process.env.URL_MONGO;

function conectar() {
    return MongoClient.connect(urlConexion)
}

function colores(collection) {
    return new Promise( async callback => {
        let conexion = await conectar()
        let coleccion = conexion.db("colores").collection(collection)

        callback(await coleccion.find({}).toArray())
        conexion.close()
    })
}

module.exports = {colores}