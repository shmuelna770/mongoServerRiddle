import express from 'express'
import { addPlayer,getPlayer,updateBestTime } from '../controllers/playersController.js'

const playerRoutes = express.Router()

playerRoutes.post('/player',addPlayer)
playerRoutes.get('/player/:username', getPlayer);
playerRoutes.put('/update_time',updateBestTime)

export default playerRoutes