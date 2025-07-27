import * as playerDal from '../DAL/playerDAL.js'
//add player i supabaesDB
export async function addPlayer(req, res) {
    try {
        const player = req.body
        const newPlayer = await playerDal.addPlayerD(player)
        console.log(player,newPlayer);
        
        res.json(newPlayer)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}
export async function getPlayer(req,res){
    try{
        const username = req.params.username
        const player = await playerDal.selectPlayerByUsername(username)
        res.json(player)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}   
  


export async function updateBestTime(req, res) {
    try {
        const { username, best_time } = req.body;
        console.log('update req', { username, best_time });

        if (!username || typeof best_time !== 'number') {
            return res.status(400).json({ error: 'missing username or invalid time' });
        }

        const result = await playerDal.updateBestTimeD(username, best_time);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}