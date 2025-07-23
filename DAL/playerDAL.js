import { supabase } from "../DB/supabase";

export async function addPlayer(player){
    const data = await supabase
    .from(players)
    .insert([player])
    if(error){
        throw new error(error.massege)
    }
    return data[0]
}