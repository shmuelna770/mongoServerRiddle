import { supabase } from "../DB/supabase.js";

export async function addPlayerD(player) {
    const { data, error } = await supabase
        .from('players')
        .insert([player])
        .select()

    if (error) {
        throw new Error(error.message);
    }

    return data; 
}