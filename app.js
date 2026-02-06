import express from 'express'
import db from "./db.js"

const PORT = 3321
const app = express()
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server runs on PORT ${PORT}`)
});