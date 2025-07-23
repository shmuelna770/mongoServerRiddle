import express from 'express'
import { addPlayer } from '../controllers/playersController'

const playerRoutes = express.Router()

playerRoutes.post('/',addPlayer)

export default playerRoutes