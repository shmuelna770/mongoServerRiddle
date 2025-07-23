import { supabase } from "../DB/supabase.js";

export async function addPlayer(player) {
    const { data, error } = await supabase
        .from('players')
        .insert([player]);

    if (error) {
        throw new Error(error.message);
    }

    return data[0]; 
}