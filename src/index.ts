import express from "express"
import { alumnoRouter } from "./routes/alumno.route"
import { SERVER_PORT, URL_BASE } from "./config/variablesEntorno"

const app = express()

app.use(express.json())

app.get("/", (_req, res) => {
    res.send("Hola desde express")
})

app.use(`${URL_BASE}/alumnos`, alumnoRouter)

app.listen(SERVER_PORT, () => {
    console.log("Server listening on port:", SERVER_PORT)
})