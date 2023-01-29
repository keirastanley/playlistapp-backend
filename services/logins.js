import query from "../db/index.js"

export async function getLogins(){
    const result = await query('SELECT * FROM logins;');
    return result.rows;
}

export async function getLoginsByUser(user_id){
    const result = await query('SELECT * FROM logins WHERE user_id = $1;', [user_id]);
    return result.rows;
}

export async function addNewLogin(user_id, access_token, date){
    await query('INSERT INTO logins (id, user_id, date) VALUES ($1, $2, $3);', [user_id, access_token, date]);
}