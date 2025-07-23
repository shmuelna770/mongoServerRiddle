import playerDal from '../DAL/playerDAL.js'

export async function addPlayer(req, res) {
    try {
        const player = req.body
        const newPlayer = await playerDal.addPlayer(player)
        res.json(newPlayer)
    }
    catch (error) {
        res.status(500).json({ error: err.message })
    }
}