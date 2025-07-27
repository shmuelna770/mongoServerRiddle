import express from 'express'
import { addPlayer } from '../controllers/playersController.js'

const playerRoutes = express.Router()

playerRoutes.post('/player',addPlayer)

export default playerRoutes