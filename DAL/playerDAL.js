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
export async function selectPlayerByUsername(username) {
    const { data, error } = await supabase
        .from('players')
        .select()
        .eq('username', username)
        .single()
    if (error) throw new error(error.message)
    return data;
}