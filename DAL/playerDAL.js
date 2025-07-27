import { supabase } from "../DB/supabase.js";

export async function addPlayerD(player) {
    const { data, error } = await supabase
        .from('players')
        .insert(player)
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
export async function updateBestTimeD(username, newTime) {
    const { data: player, error: getError } = await supabase
        .from('players')
        .select('best_time')
        .eq('username', username)
        .maybeSingle(); 

    if (getError) {
        throw new Error(getError.message);
    }

    if (!player) {
        throw new Error(`Player with username "${username}" not found`);
    }

    const currentBest = player.best_time;

    if (currentBest === null || newTime < currentBest) {
        const { error: updateError } = await supabase
            .from('players')
            .update({ best_time: newTime })
            .eq('username', username);

        if (updateError) {
            throw new Error(updateError.message);
        }

        return { message: 'best time updated', newTime };
    }

    return { message: 'no update needed', currentBest };
}
