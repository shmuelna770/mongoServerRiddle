import * as riddlesDal from '../DAL/ridlleDAL.js';

// get all the riddles
export async function getAllRiddles(req, res) {
  try {
    const riddles = await riddlesDal.getAllRiddles();
    res.json(riddles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// add a new riddle
export async function addRiddle(req, res) {
  try {
    const id = await riddlesDal.addRiddle(req.body);
    res.json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// update by id
export async function updateRiddle(req, res) {
  console.log(req.params.id,req.body);
  try {
    const result = await riddlesDal.updateRiddle(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  
  
}

// delete by id
export async function deleteRiddle(req, res) {
  try {
    const result = await riddlesDal.deleteRiddle(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

