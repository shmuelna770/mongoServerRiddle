import express from 'express';
import {
  getAllRiddles,
  addRiddle,
  updateRiddle,
  deleteRiddle
 
} from "../controllers/riddlesController.js"

export const riddlesRoutes = express.Router();

riddlesRoutes.get('/', getAllRiddles);
riddlesRoutes.post('/', addRiddle);
riddlesRoutes.put('/:id', updateRiddle);
riddlesRoutes.delete('/:id', deleteRiddle);