import { playlistsData } from "../app.js";

export async function getAllPlaylists() {
    const data = await playlistsData.find({}).toArray();
    console.log(data);
    return data;
}

// import query from "../db/index.js"

// export async function getPlaylists(){

//     const result = await query('SELECT * FROM playlists;');
    
//     return result.rows;
// }

// export async function getPlaylistById(id){

//     const result = await query('SELECT * FROM playlists WHERE playlist_id = $1;', [id])
//     return result.rows[0]
// }

// export async function addNewPlaylist(playlist){

//     await query('INSERT INTO playlists (playlist_id, name, link, description, image, created_by, tracks, date, access) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);', [playlist.playlist_id, playlist.name, playlist.link, playlist.description, playlist.image, playlist.created_by, playlist.tracks, playlist.date, playlist.access]);

//     const newPlaylist = await query('SELECT * FROM playlists WHERE playlist_id = $1', [playlist.playlist_id])
//     return newPlaylist.rows[0];
// }

// export async function editPlaylist(id, playlist) {

//     await query('UPDATE playlists SET (playlist_id, name, link, description, image, created_by, tracks, date, access) = ($1, $2, $3, $4, $5, $6, $7, $8, $9) WHERE playlist_id = $10;', [playlist.playlist_id, playlist.name, playlist.link, playlist.description, playlist.image, playlist.created_by, playlist.tracks, playlist.date, playlist.access, id]);

//     const editedPlaylist = await query('SELECT * FROM playlists WHERE playlist_id = $1', [playlist.playlist_id])

//     return editedPlaylist.rows[0];
// }

// export async function deletePlaylist(id){

//     const deletedPlaylist = await query('SELECT * FROM playlists WHERE playlist_id = $1', [id]);

//     await query('DELETE FROM playlists WHERE playlist_id = $1;', [id]);

//     return deletedPlaylist.rows[0];
// }