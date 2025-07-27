import * as playerDal from '../DAL/playerDAL.js'
//add player i supabaesDB
export async function addPlayer(req, res) {
    try {
        const player = req.body
        const newPlayer = await playerDal.addPlayerD(player)
        res.json(newPlayer)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}