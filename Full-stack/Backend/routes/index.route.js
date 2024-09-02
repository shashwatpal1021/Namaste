import express from "express"

const yoitaRoutes = express.Router()


yoitaRoutes.get('/', (req, res) => {
  res.send("welcome to the node world")
})

yoitaRoutes.get('/yogita', (req, res) => {
  res.send("yogita is ahere")
})

export default yoitaRoutes;