import express from 'express'
import { addPlayer,getPlayer } from '../controllers/playersController.js'

const playerRoutes = express.Router()

playerRoutes.post('/player',addPlayer)
playerRoutes.get('/player/:username', getPlayer);


export default playerRoutes